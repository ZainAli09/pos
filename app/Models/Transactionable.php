<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transactionable extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function transactionable(){
        return $this->morphTo();
    }

    public function stakeholder()
    {
        return $this->morphTo();
    }
    
}
