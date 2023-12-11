<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Log;

class DeletePolicy
{

    /**
     * Create a new policy instance.
     */
    public function __construct()
    {
        //
    }
    public function deleteRecords(User $user) 
    {
      return $user->can('delete.records');

    }
}
