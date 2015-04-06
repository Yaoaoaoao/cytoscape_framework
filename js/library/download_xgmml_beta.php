<?php 
	header("Content-Type: text/xgmml"); 
	header("Content-Disposition: attachment; filename=cytoscapeView.xgmml");
	
	echo ($_POST["xgmmlNetwork"]);
?>