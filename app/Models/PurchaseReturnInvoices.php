<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PurchaseReturnInvoices extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function vendor(){
        return $this->belongsTo(Vendor::class);
    }
    public function transactionable(){
        return $this->morphMany(Transactionable::class, 'transactionable');
    }

}
