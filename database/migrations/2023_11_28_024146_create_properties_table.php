<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->text('username');
            $table->text('pin');
            $table->text('arp');
            $table->text('owner_name');
            $table->text('nickname');
            $table->text('eff_date');
            $table->text('taxability');
            $table->text('previous_pin');
            $table->text('previous_arp');
            $table->text('last_orno');
            $table->text('last_payment_amount');
            $table->date('transaction_date');
            $table->text('relationship_to_owner');
            $table->text('remarks')->nullable();
            $table->integer('is_remove');
            $table->integer('is_approve');
            $table->integer('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('properties');
    }
}
