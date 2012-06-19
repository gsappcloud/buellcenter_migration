<?php

// read the nodequeue and render content specifically for the homepage
$nodes = nodequeue_load_nodes(1, FALSE, 0, 100);

print '<div id="homepage-nodes">';
foreach($nodes as $n) {

	$ntitle = $n->title;
	if (strlen($n->field_homepage_title[0]['value']) > 10) {
		$ntitle = trim($n->field_homepage_title[0]['value']);
	}
	
	
	$path = $n->path;
	$type = $n->type;

	switch ($type) {
		case 'conference':
			$path = '/conferences'; break;
		case 'fellowship':
			$path = '/fellowships'; break;
		default:
			break;		
	}

	
	$image = $n->field_homepage_image[0];
	print '<div class="homepage-node">' .
			'<div class="homepage-node-image"><a href="' . $path . '">' . 
				theme('imagecache', 'teaser_image_550x250', $image['filepath'], $ntitle, '') . '</a></div><strong>' . $ntitle . '</strong></div>';

}
print '</div>';

?>