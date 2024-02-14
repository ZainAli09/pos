<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WSInvoice extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function customer(){
        return $this->belongsTo(Customer::class);
    }

    public function transactionable(){
        return $this->morphMany(Transactionable::class, 'transactionable');
    }

    public function wSaleInvoiceDetail(){
        return $this->hasMany(WSInvoiceDetail::class);
    }
}
