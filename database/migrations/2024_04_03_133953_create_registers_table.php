<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registers', function (Blueprint $table) {
            $table->id();
            $table->text('user_id');
            $table->text('application_no');
            $table->text('owner_name');
            $table->text('nickname');
            $table->text('td_no');
            $table->text('pin');
            $table->text('last_orno');
            $table->text('amount_paid');
            $table->text('relationship_to_owner');
            $table->text('mobile_no');
            $table->text('email');
            $table->text('property_type');
            $table->text('files');
            $table->text('submit_date');
            $table->text('is_approve')->default(0); //0 pending; 1 approved
            $table->text('is_cancel')->default(0); //0 not cancelled, 1 cancelled
            $table->text('remarks')->nullable();
            $table->text('is_requested');
            $table->text('register_type');
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
        Schema::dropIfExists('registers');
    }
}
