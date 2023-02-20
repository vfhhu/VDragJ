<?php

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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.3.min.js"></script>
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
            </nav>
        </div>
    </header>

    <main role="main" class="inner cover">
        <img id="img2" src="img/1649475785_921.png">
        <div id="tg" style="width: 100%;min-height: 200px;height: 800px;">drop to this div</div>
        <script>
            let v=new VDragJ({"fmt":"text/plain","cb":(c,e)=>{
                    if(c==onVDrag)v.moveElStart(e);
                    if(c==onVDrop)v.moveElEnd(e);
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

