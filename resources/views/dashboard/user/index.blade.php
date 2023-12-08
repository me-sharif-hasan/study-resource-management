<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Student Dashboard</title>
    @vite('resources/js/app.js')
    <link rel="shortcut icon" type="image/png" href="{{asset('/assets/images/logos/favicon.png')}}" />
    <link rel="stylesheet" href="{{asset('/assets/css/styles.min.css')}}" />
</head>
<body>
<div id="app"></div>

<script src="{{asset('/assets/libs/jquery/dist/jquery.min.js')}}"></script>
<script src="{{asset('/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js')}}"></script>
<script src="{{asset('/assets/js/sidebarmenu.js')}}"></script>
<script src="{{asset('/assets/js/app.min.js')}}"></script>
<script src="{{asset('/assets/libs/apexcharts/dist/apexcharts.min.js')}}"></script>
<script src="{{asset('/assets/libs/simplebar/dist/simplebar.js')}}"></script>
<script src="{{asset('/assets/js/dashboard.js')}}"></script>

</body>
</html>
