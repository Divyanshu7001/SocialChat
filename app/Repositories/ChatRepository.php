<?php

namespace App\Repositories;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ChatRepository
{
    public function getUserMessages(int $senderId, int $receiverId)
    {
        return Message::whereIn('sender_id', [$senderId, $receiverId])
            ->whereIn('receiver_id', [$senderId, $receiverId])
            ->get();
    }

    public function getRecentUsersWithMessage(int $senderId): array
    {
        DB::statement("SET SESSION sql_mode=''");

        // Subquery to get the most recent message between the sender and receiver
        $recentMessages = Message::where(function ($query) use ($senderId) {
            $query->where('sender_id', $senderId)
                ->orWhere('receiver_id', $senderId);
        })
            ->whereIn('id', function ($query) use ($senderId) {
                $query->select(DB::raw('MAX(id)'))
                    ->from('messages')
                    ->where(function ($subquery) use ($senderId) {
                        $subquery->where('sender_id', $senderId)
                            ->orWhere('receiver_id', $senderId);
                    })
                    ->groupBy(DB::raw('LEAST(sender_id, receiver_id), GREATEST(sender_id, receiver_id)'));
            })
            ->orderBy('id', 'desc')
            ->limit(30)
            ->get();

        return $this->getFilterRecentMessages($recentMessages, $senderId);
    }


    public function sendMessage(array $data): Message
    {
        return Message::create($data);
    }

    public function getFilterRecentMessages(Collection $recentMessages, int $senderId): array
    {
        $recentUsersWithMessage = [];
        $usedUserIds = [];
        foreach ($recentMessages as $message) {
            $userId = $message->sender_id == $senderId ? $message->receiver_id : $message->sender_id;
            if (!in_array($userId, $usedUserIds)) {
                $recentUsersWithMessage[] = [
                    'user_id' => $userId,
                    'message' => $message->message
                ];
                $usedUserIds[] = $userId;
            }
        }

        foreach ($recentUsersWithMessage as $key => $userMessage) {
            $recentUsersWithMessage[$key]['name'] = User::where('id', $userMessage['user_id'])->value('name') ?? '';
        }

        return $recentUsersWithMessage;
    }
}
