<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Word;

class WordController extends Controller
{
    //
    public function index()
    {
        return Word::all();
    }

    //
    public function store(Request $request)
    {
        return Word::create($request->all());
    }

    //
    public function update(Request $request, $id)
    {
        $task = Word::findOrFail($id);
        $task->update($request->all());
        return $task;
    }

    //
    public function delete($id)
    {
        $task = Word::findOrFail($id);
        $task->delete();
        return 204;
    }
}
