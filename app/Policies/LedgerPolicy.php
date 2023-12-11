<?php

namespace App\Policies;

use App\Models\User;

class LedgerPolicy
{
    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }
    public function ledger(User $user, User $model): bool
    {
        return $user->can('ledger');
    }
}
