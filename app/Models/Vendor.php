<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vendor extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function city(){
       return $this->belongsTo(City::class);

    }
    public function stakeholder()
    {
        return $this->morphOne(Stakeholder::class, 'stakeholder');
    }

}
