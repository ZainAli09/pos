<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CashPaymentVoucher extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function vendor(){
        return $this->hasOneThrough(Vendor::class, Stakeholder::class);
    }
    
    public function stakeholder(){
        return $this->belongsTo(Stakeholder::class, 'stakeholder_id');
    }
    
    public function transactionable(){
        return $this->morphMany(Transactionable::class, 'transactionable');
    }
    
}
