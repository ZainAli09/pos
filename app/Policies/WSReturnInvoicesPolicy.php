<?php

namespace App\Policies;

use App\Models\User;
use App\Models\WSReturnInvoices;
use Illuminate\Auth\Access\Response;

class WSReturnInvoicesPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('whole.sale.return.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, WSReturnInvoices $wSReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('whole.sale.return');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, WSReturnInvoices $wSReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, WSReturnInvoices $wSReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, WSReturnInvoices $wSReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, WSReturnInvoices $wSReturnInvoices): bool
    {
        //
    }
    public function wholesalereturnprint(User $user, User $model) : bool
    {
        return $user->can('whole.sale.return.print');
    }
}
