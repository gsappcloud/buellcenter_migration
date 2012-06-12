<div class="taxonomy-term-page">

<?php


	$view = views_get_view('taxonomy_page_view');
	$view_args = array();
	$display = $view->execute_display('Page', $tids);
	
	print $display;

?>

</div>