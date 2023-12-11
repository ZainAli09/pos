<?php

namespace App\Policies;

use App\Models\CashReceivedVoucher;
use App\Models\User;
use Illuminate\Auth\Access\Response;

class CashReceivedVoucherPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        return $user->can('cash.payment.voucher.view');
        
    }

    /**
     * Determine whether the user can view the model.
     */
    public function view(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        return $user->can('cash.payment.voucher');
        
    }

    /**
     * Determine whether the user can update the model.
     */
    public function update(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
    public function delete(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
    public function restore(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
    public function forceDelete(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        //
    }
    public function cashreceivedvoucherprint(User $user, CashReceivedVoucher $cashReceivedVoucher): bool
    {
        return $user->can('cash.payment.voucher.print');
    }
}
