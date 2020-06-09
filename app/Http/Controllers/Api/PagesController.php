<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function index()
    {
        // Load index view and pass $titleName
        $titleHomepageName = "HomePage";
        return view('pages/index', compact('titleHomepageName'));
    }
    public function about()
    {
        // Load about view and pass $title
        $title = "About";
        return view('pages/about')->with('title', $title);
    }
    public function contact()
    {
        // Load contact view and pass $data array where initialize title key
        $data = array();
        $data['title'] = 'Contact';
        return view('pages/contact')->with($data);
    }
}
