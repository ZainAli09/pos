<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stakeholder extends Model
{
    use HasFactory;
    
    public function stakeholder(){
        return $this->morphTo();
    }
    
    public function cashPaymentVoucher(){
        return $this->hasOne(CashPaymentVoucher::class,'stakeholder_id');
    }
}
