<?php

namespace App\Http\Controllers;

use App\Models\SoaRequest;
use App\Models\Register;
use App\Models\SoaRequestDetail;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class SoaController extends Controller
{
    public function requestSOA(Request $request)
    {
        $request->validate(
            [
                'td_no.*' => 'required',
                'pin.*' => 'required',
            ],
            [
                'td_no.*.required' => 'ARPN is required.',
                'pin.*.required' => 'PIN is required.',
            ]
        );

        $user_id = auth()->user()->id;
        $user_name = auth()->user()->first_name . ' ' . auth()->user()->last_name;

        $transno = SoaRequest::max('transno');
        $transno = $transno ? $transno + 1 : 1000;

        SoaRequest::create([
            'user_id' => $user_id,
            'transno' => $transno,
            'trans_status' => 0,
            'amount_due' => 0.00,
            'due_date' => null,
            'remarks' => null,
            'requested_by' => $user_name,
            'requested_date' => date('Y-m-d'),
            'soa_by' => null,
            'soa_date' => null,
            'soa_no' => null,
            'payment_refno' => null,
            'orno' => null,
            'dt_paid' => null,
            'cancel_request' => 0, //0 on going; 1 cancelled
            'admin_message' => null,
        ]);

        foreach ($request->all() as $item) {
            if (isset($item['pin']) && isset($item['td_no'])) {
                SoaRequestDetail::create([
                    'transno' => $transno,
                    'arpn' => $item['td_no'],
                    'pin' => $item['pin'],
                    'requested_by' => $user_name,
                    'requested_date' => date('Y-m-d'),
                    'iscancelled_td' => 0,
                    'admin_message' => null,
                ]);
            }
        }

        foreach ($request->all() as $item) {
            if (isset($item['id'])) {
                Register::where('id', $item['id'])->update([
                    'is_requested' => 1,
                ]);
            }
        }

        return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Request Successful', 'text' => 'Your SOA request has been successfully sent! Please wait for approval'], 200);
    }

    public function getSoaRequest()
    {
        $table = SoaRequest::where("cancel_request", 0);

        if (auth()->check()) {
            $user_id = auth()->id();
            $table->where('user_id', $user_id);

            $pins = SoaRequest::join('soa_detail', 'soa_request.transno', '=', 'soa_detail.transno')
                ->where('soa_request.user_id', $user_id)
                ->select('soa_request.transno', 'soa_detail.pin')
                ->get()
                ->groupBy('transno')
                ->map(function ($group) {
                    return $group->pluck('pin')->toArray();
                });
        }

        $data = $table->get();

        $return = [];
        $row = 1;

        foreach ($data as $key => $value) {
            $temp = [];
            $temp['row'] = $row++;
            $temp['transno'] = $value->transno;
            $temp['id'] = $value->id;
            $temp['trans_status'] = $value->trans_status == 0 ? "Awaiting SOA from Treasury" : ($value->trans_status == 1 ? "SOA Available" : ($value->trans_status == 2 ? "For Upload of Payroll Receipt" : ($value->trans_status == 3 ? "Payment Complete" : "Unknown Status")));
            $temp['pin'] = isset($pins[$value->transno]) ? $pins[$value->transno] : [];
            $temp['amount_due'] = $value->amount_due;
            $temp['due_date'] = $value->due_date == null ? "N/A" : $value->admin_message;
            $temp['admin_message'] = $value->admin_message == null ? "N/A" : $value->admin_message;
            $temp['cancel_request'] = $value->cancel_request;
            array_push($return, $temp);
        }

        return ['data' => $return];
    }

    public function cancelRequest(Request $request)
    {
        SoaRequest::join('soa_detail', 'soa_detail.transno', '=', 'soa_request.transno')
            ->join('registers', 'registers.pin', '=', 'soa_detail.pin')
            ->where('soa_request.id', $request->id)
            ->update([
                'registers.is_requested' => 0,
                'soa_request.cancel_request' => 1
            ]);

        return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Cancel Successful', 'text' => 'Your request of SOA for the property has been successfully cancelled!'], 200);
    }
}
