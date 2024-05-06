@php
$config = [
'appName' => config('app.name'),
'locale' => ($locale = app()->getLocale()),
'locales' => config('app.locales'),
'githubAuth' => config('services.github.client_id'),
'tomorrow' => config('app.dateTomorrow'),
'maxdate' => config('app.maxdate'),
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <title>{{ config('app.name') }}</title>

</head>

<body>
    <div id="app"></div>
    <script>
        window.config = <?php echo json_encode($config); ?>
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>