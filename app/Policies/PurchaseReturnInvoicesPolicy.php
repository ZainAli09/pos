<?php

namespace App\Policies;

use App\Models\PurchaseReturnInvoices;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class PurchaseReturnInvoicesPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('purchase.return.view');
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, PurchaseReturnInvoices $purchaseReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('purchase.return');
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, PurchaseReturnInvoices $purchaseReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, PurchaseReturnInvoices $purchaseReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, PurchaseReturnInvoices $purchaseReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, PurchaseReturnInvoices $purchaseReturnInvoices): bool
    {
        //
    }
    public function purchasereturnprint(User $user, User $model) : bool
    {
        return $user->can('purchase.return.print');
    }
}
