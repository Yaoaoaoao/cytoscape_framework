<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
    <title>Cytoscape</title>
    <!--  load jquery library-->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    
    <!-- bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

    <!-- load cytoscape library-->
    <!--customized cytoscape library supports download and line breaks-->
    <!--    <script src="js/library/cytoscape_customized.js"></script>-->
    <!--the released version has newest functions.
    However, you can download the newest release and modified the js file according to the file "cytoscape.js modified point" -->
    <script src="js/library/cytoscape.min.js"></script>

    <!-- load cytoscape-panzoom extension  -->
    <link rel="stylesheet" type="text/css" href="js/library/jquery.cytoscape-panzoom.css"/>
    <script src="js/library/jquery.cytoscape-panzoom.min.js"></script>
    <link rel="stylesheet" type="text/css" href="js/library/font-awesome.css"/>

    <!--cytoscape settings-->
    <!--load cytoscape network json-->
    <script src="js/network.js"></script>
    <!-- load cytoscape visual style-->
    <script src="js/style.js"></script>
    <!-- load cytoscape layout style-->
    <script src="js/layout.js"></script>
    <!-- load cytoscape layout style-->
    <script src="js/layout.js"></script>
    <script src="js/library/arbor.js"></script>
    <script src="js/library/springy.js"></script>
    <!-- load cytoscape functions-->
    <script src="js/functions_cyto.js"></script>
    <!-- optional: cytoscpae download functions-->
    <!--<script src="js/library/FileSaver.min.js"></script>-->
    <!--<script src="js/library/canvas-to-blob.min.js"></script>-->
    <!--<script src="js/library/download_xgmml_beta.php"></script>-->
    <!-- <script src="js/library/functions_xgmml.js"></script>-->
    <!--webstyle-->
    <link rel="stylesheet" type="text/css" href="js/web_style.css"/>

</head>
<body>
<!-- <nav class="navbar navbar-default">
    <div class="container-fluid">
        <form class="navbar-form">
            <span class="navbar-text">text</span>
            <div id='dpYearDiv' class="input-group"></div>
            <button type="button" class="btn btn-default btn-xs" onclick="animation('dpYear')">
                <span class="glyphicon glyphicon-play"></span>Animation
            </button>
        </form>
    </div>
</nav> -->
<div id="cy"></div>
<div id="property"></div>
</body>
</html>