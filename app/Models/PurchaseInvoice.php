<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseInvoice extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function vendor(){
        return $this->belongsTo(Vendor::class);
    }
    public function details(){
        return $this->hasMany(PurchaseInvoiceDetail::class);
    }
    public function transactionable(){
        return $this->morphMany(Transactionable::class, 'transactionable');
    }

    public function stakeholder(){
        return $this->hasManyThrough(Stakeholder::class, Transactionable::class, CashPaymentVoucher::class);
    }
    
}
