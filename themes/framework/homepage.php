<?php

// read the nodequeue and render content specifically for the homepage
$nodes = nodequeue_load_nodes(1, FALSE, 0, 100);

print '<div id="homepage-nodes">';
foreach($nodes as $n) {

	$title = $n->title;
	$path = $n->path;
	$image = $n->field_homepage_image[0];
	print '<div class="homepage-node">' .
			'<div class="homepage-node-image"><a href="' . $path . '">' . 
				theme('imagecache', 'teaser_image_550x250', $image['filepath'], $title, '') . '</a></div>' . 
			'<a href="' . $path . '">' . $title . '</a>' .
			'</div>';
}
print '</div>';

?>