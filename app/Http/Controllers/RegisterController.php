<?php

namespace App\Http\Controllers;

use App\Models\Register;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function registerProperty(Request $request)
    {
        $request->validate([
            'files' => 'required|array',
            'files.*' => 'required|file|mimes:png,jpg,jpeg,pdf,doc,docx|max:2048',
        ], [
            'files.required' => 'Please upload at least one file.',
            'files.*.required' => 'One or more files are empty. Please upload valid files.',
            'files.*.mimes' => 'One or more files have an invalid format. Allowed formats are: png, jpg, jpeg, pdf, doc, docx.',
            'files.*.max' => 'One or more files exceed the maximum file size limit of 2048KB.',
        ]);

        if (Auth::user()) {
            $user_id = auth()->user()->id;
        } else {
            $user_id = 0;
        }

        $latestAppNo = Register::max('application_no');
        $appno = $latestAppNo ? $latestAppNo + 1 : 1000;

        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = $file->getClientOriginalName();
                $filePath = $file->storeAs('public/uploads/' . $appno, $fileName);
                $filePaths[] = str_replace('\\', '', str_replace('public', 'storage', $filePath));
                $fileNames[] = $fileName;
            }
        }

        Register::create([
            'user_id' => $user_id,
            'application_no' => 'AN' . $appno,
            'owner_name' => "null",
            'nickname' => "null",
            'td_no' => $request->td_no ? $request->td_no : "null",
            'pin' => $request->pin ? $request->pin : "null",
            'last_orno' => $request->last_orno ? $request->last_orno : "null",
            'amount_paid' => $request->last_amt_paid ? $request->last_amt_paid : "null",
            'relationship_to_owner' => $request->relationship ? $request->relationship : "null",
            'email' => $request->email,
            'mobile_no' => $request->mobileno,
            'property_type' => $request->property_type,
            'files' => json_encode($fileNames),
            'submit_date' => now(),
            'is_approve' => 0,
            'is_cancel' => 0,
            'is_requested' => 0,
            'register_type' => $request->last_orno === 'null' ? "Without OR" : "With OR",
        ]);

        return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Submit Successful', 'text' => 'You have successfully submitted your data! Your application no. is: ' . $appno . ' Please wait for approval'], 200);
    }

    public function updateAttachment(Request $request)
    {
        $table = Register::find($request->id);

        $existingFiles = json_decode($table->files, true) ?? [];

        if ($request->hasFile('upload')) {
            $request->validate([
                'upload' => 'required|array',
                'upload.*' => 'required|mimes:png,jpg,jpeg,pdf,doc,docx|max:2048'
            ]);

            foreach ($request->file('upload') as $file) {
                $fileName = $file->getClientOriginalName();
                $filePath = $file->storeAs('public/uploads/' . $request->application_no, $fileName);
                $filePaths[] = str_replace('\\', '', str_replace('public', 'storage', $filePath));
                $fileNames[] = $fileName;
            }

            foreach ($fileNames as $file) {
                $existingFiles[] = $file;
            }
            $table->files = json_encode($existingFiles);
            $table->save();

            return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Update Successful', 'text' => 'Selected file(s) have been successfully uploaded!'], 200);
        } else if ($request->deleted_files) {
            $filesToDelete = $request->deleted_files;

            foreach ($filesToDelete as $fileToDelete) {
                $filePathToDelete = 'public/uploads/' . $request->application_no . '/' . $fileToDelete;

                $existingFiles = array_diff($existingFiles, [$fileToDelete]);
                if (Storage::exists($filePathToDelete)) {
                    Storage::delete($filePathToDelete);
                }
            }

            $table->files = json_encode($existingFiles);
            $table->save();

            return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Delete Successful', 'text' => 'Selected file(s) have been successfully deleted!'], 200);
        }
    }

    public function cancelRegister(Request $request)
    {
        Register::where('id', $request->id)->update([
            'is_cancel' => 1,
        ]);

        return response()->json(['val' => 0, 'icon' => 'success', 'title' => 'Cancel Successful', 'text' => 'Your registration for the property has been successfully cancelled!'], 200);
    }
}
