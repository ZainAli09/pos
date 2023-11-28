<?php

namespace App\Policies;

use App\Models\User;
use App\Models\WSInvoice;
use Illuminate\Auth\Access\Response;

class WSInvoicePolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('whole.sale.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, WSInvoice $wSInvoice): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('whole.sale');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, WSInvoice $wSInvoice): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, WSInvoice $wSInvoice): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, WSInvoice $wSInvoice): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, WSInvoice $wSInvoice): bool
    {
        //
    }
    public function wholesaleinvoiceprint(User $user, User $model) : bool
    {
        return $user->can('whole.sale.print');
    }
}
