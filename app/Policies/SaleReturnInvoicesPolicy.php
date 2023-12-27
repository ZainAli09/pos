<?php

namespace App\Policies;

use App\Models\SaleReturnInvoices;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class SaleReturnInvoicesPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('sale.return.view');
        
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, SaleReturnInvoices $saleReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('sale.return');
        
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, SaleReturnInvoices $saleReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, SaleReturnInvoices $saleReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, SaleReturnInvoices $saleReturnInvoices): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, SaleReturnInvoices $saleReturnInvoices): bool
    {
        //
    }
    public function salereturninvoiceprint(User $user, User $model) : bool
    {
        return $user->can('sale.return.print');
    }
}
