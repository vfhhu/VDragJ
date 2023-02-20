<?php
include_once(dirname(__FILE__).'/_path.php');
?>
<!DOCTYPE html>
<html >
<head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="drag" />
    <meta name="robots" content="noindex , nofollow">
    <meta name="revisit-after" content="1 month">
    <meta name="language" content="zh-tw">
    <meta name="generator" content="N/A">
    <title>無心碎碎念 drag</title>
    <link href="<?php echo URL_ROOT;?>lib/bootstrap-5.2.1-dist/css/bootstrap.css" rel="stylesheet">
    <script src="<?php echo URL_ROOT;?>lib/bootstrap-5.2.1-dist/js/bootstrap.min.js"></script>
    <script src="<?php echo URL_ROOT;?>js/jquery-3.1.1.min.js"></script>
    <script src="js/VDragJ.js?_=<?php echo time();?>"></script>

</head>
<style>
    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
            font-size: 3.5rem;
        }
    }
</style>
<body class="text-center">
<div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header class="masthead mb-auto">
        <div class="inner">
            <h3 class="masthead-brand">drag</h3>
            <nav class="nav nav-masthead justify-content-center">
                <!--                <a class="nav-link active" href="#">Home</a>-->
                <!--                <a class="nav-link" href="#">Features</a>-->
                <!--                <a class="nav-link" href="#">Contact</a>-->
            </nav>
        </div>
    </header>

    <main role="main" class="inner cover">
<!--        <div class="photo" style="position:relative; background:white;width: 500px; height: 400px;">-->
<!--            <div id="panel"  style="z-index: 999; position: relative; width: 500px; height: 400px;">-->
<!--            </div>-->
<!--            <div id="dv1" style="width: 50px; height: 50px;position: absolute;z-index: 1;top:20px">-->
<!--                <img id="img1" style="position: absolute; z-index: 1; touch-action: unset; width: 50px; height: 50px;"-->
<!--                     src="img/1649475785_921.png">-->
<!---->
<!--            </div>-->
<!--        </div>-->
        <img id="img2" src="img/1649475785_921.png">
        <div id="tg">aaa</div>
        <script>
            // let v=new VMoveJ("panel");
            // v.addDiv("dv1")

            let v=new VDragJ({"fmt":"text/plain","cb":e=>{
                v.moveEl(e);
                }});
            v.addDragID("img2")
            v.addDropID("tg")
        </script>



    </main>

    <footer class="mastfoot mt-auto">
        <div class="inner">
            <!--            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>-->
        </div>
    </footer>
</div>
</body>
</html>

