<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SoaRequest extends Model
{
    use HasFactory;

    protected $table = 'soa_request';

    protected $guarded = ['id'];
}
