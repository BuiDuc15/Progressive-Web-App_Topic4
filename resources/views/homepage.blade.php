<!-- Step to Create a new page in Laravel
        1. Create Route in routes/web.php
        2. Create a file in resources/views: name-of-file.php (or .blade.php)
-->

<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
    <!-- Stylesheet should be in public/css folder -->
    <link rel="stylesheet" href="css/welcome.css" type="text/css">
</head>
<body>
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Rmegister</a>
                @endif
            @endauth
        </div>
    @endif

    <div class="content">
        <div class="title m-b-md">
            Vocab Test System
        </div>
        <p>Begin Testing links</p>

        <div class="links">
            <a href="/example">Welcome</a>
        </div>
    </div>
</div>
</body>
</html>
