<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SaleInvoice extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function transactionable(){
        return $this->morphMany(Transactionable::class, 'transactionable');
    }

    public function saleInvoiceDetail(){
        return $this->hasMany(saleInvoiceDetail::class);
    }
}
