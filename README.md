
<h1>VDragJ</h1>


[sample](https://tool.vfhhu.xyz/a_js_sample/drag.php)
<h2>
Step1 include js
</h2>

``````js
<script src="js/VDragJ.js"></script>
``````


<h2>
Step2 init VDragJ and set callback of drop action
</h2>

``````js
let v=new VDragJ({"fmt":"text/plain","cb":e=>{
        v.moveEl(e);
    }});
``````

<h2>
Step3 add drag src 
</h2>

``````js
v.addDragID("img2");
//or
//v.addDragEl($("#img2"));
``````

<h2>
Step4 add drop src 
</h2>

``````js
v.addDropID("img2");
//or
//v.addDropEl($("#img2"));
``````

<br><br><br>
######################################
<h1>中文說明</h1>


[範例網址](https://tool.vfhhu.xyz/a_js_sample/drag.php)
<h2>
第一步: 引入js
</h2>

``````js
<script src="js/VDragJ.js"></script>
``````

<h2>
第二步 初始化並設定drop回傳處理
</h2>

``````js
let v=new VDragJ({"fmt":"text/plain","cb":e=>{
        v.moveEl(e);
    }});
``````

<h2>
第三步 設定drag來源
</h2>

``````js
v.addDragID("img2");
//or
//v.addDragEl($("#img2"));
``````

<h2>
第四步 設定drop來源
</h2>

``````js
v.addDropID("img2");
//or
//v.addDropEl($("#img2"));
``````