<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoaRequestDetail extends Model
{
    use HasFactory;

    protected $table = 'soa_detail';

    protected $guarded = ['id'];
}
