<?php

namespace App\Http\Controllers;

use App\Models\Register;
use App\Models\Property;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PropertyController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function getRegisterPending(Request $request)
    {
        $registerType = $request->input('registerType');

        $table = Register::where("is_approve", "=", 0)->where("is_cancel", "=", 0);

        if (auth()->check()) {
            $user_id = auth()->user()->id;
            $table = $table->where('user_id', '=', $user_id);
        }

        if ($registerType) {
            $table = $table->where('register_type', '=', $registerType);
        }

        $data = $table->get();

        $return = [];
        $row = 1;

        foreach ($data as $key => $value) {
            $temp = [];
            $temp['row'] = $row++;
            $temp['id'] = $value->id;
            $temp['application_no'] = $value->application_no;
            $temp['td_no'] = $value->td_no == "null" ? "N/A" : $value->td_no;
            $temp['pin'] = $value->pin == "null" ? "N/A" : $value->pin;
            $temp['relationship'] = $value->relationship_to_owner == "null" ? "N/A" : $value->relationship_to_owner;
            $temp['files'] = $value->files;
            $temp['is_approve'] = $value->is_approve == 0 ? "For Approval" : "Approved";
            $temp['submit_date'] = date('m/d/Y g:i A', strtotime($value->submit_date));
            $temp['remarks'] = $value->remarks == null ? "N/A" : $value->remarks;
            $temp['register_type'] = $value->register_type;
            array_push($return, $temp);
        }

        return ['data' => $return];
    }

    public function getRegisteredProperty()
    {
        $table = Register::where("is_approve", "=", 1);

        if (auth()->check()) {
            $user_id = auth()->user()->id;
            $table = $table->where('user_id', '=', $user_id);
        }

        $data = $table->get();

        $return = [];
        $row = 1;

        foreach ($data as $key => $value) {
            $temp = [];
            $temp['row'] = $row++;
            $temp['application_no'] = $value->application_no;
            $temp['id'] = $value->id;
            $temp['td_no'] = $value->td_no;
            $temp['pin'] = $value->pin;
            $temp['property_type'] = $value->property_type;
            $temp['owner_name'] = $value->owner_name;
            $temp['nickname'] = $value->nickname;
            $temp['is_requested'] = $value->is_requested;
            array_push($return, $temp);
        }

        return ['data' => $return];
    }

    public function updatenick(Request $request)
    {
        $user = Register::where('id', $request->id)->first();

        if ($user && $user->is_requested != 1) {
            $user->update([
                'nickname' => $request->nickname,
            ]);

            return response()->json(['icon' => 'success', 'title' => 'Save Successful', 'text' => 'Changes have been successfully saved!'], 200);
        }
        return response()->json(['icon' => 'error', 'title' => 'Update Failed', 'text' => 'Nickname update is not allowed.'], 400);
    }
}
