<?php if (!$page): ?>
  <article id="node-<?php print $node->nid; ?>" class="node<?php if ($sticky) { print ' sticky'; } ?><?php if (!$status) { print ' node-unpublished'; } ?> clearfix">
<?php endif; ?>

  <?php if ($picture || $submitted || !$page): ?>
    <?php if (!$page): ?>
      <header>
	<?php endif; ?>

      <?php print $picture ?>

	  <?php if (!$page): ?>
        <h2><a href="<?php print $node_url ?>" title="<?php print $title ?>"><?php print $title ?></a></h2>        
      <?php endif; ?>

	  <?php if ($submitted): ?>
        <span class="submitted"><?php print $submitted; ?></span>
      <?php endif; ?>

    <?php if (!$page): ?>
      </header>
	<?php endif; ?>
  <?php endif;?>

  <div class="content">
    <?php 

		// write to ahidden div and then use js to set BG
    //field_rd_bg[0]['value'];
		$bg_hex = $node->field_rd_bg[0]['value'];
		if (strlen($bg_hex) > 2) {
			print '<div style="display: none;" id="rd-bg">' . 
				$bg_hex . '</div>';
		}

    
    $header_image = $node->field_rd_image[0]['view'];
    
    $header_link_url = $node->field_rd_header_image_link[0]['url'];
    if (strlen($header_image) > 5) {
    
    	if (strlen($header_link_url) > 5) {
    		print '<div class="rd-header-image">' .
    			'<a href="' . $header_link_url . '" target="_blank">' . 
    			$header_image . '</a></div>';
    	} else {
        $header_image = $node->field_rd_image[0]['filepath'];

        print '<div class="rd-header-image">' .
          theme('imagecache', 'teaser_image_550x250', $header_image, '', '') . '</div>';
    	}
    }
    
    $youtube = $node->field_rd_video_youtube[0]['value'];
    if (strlen($youtube) > 5) {
			print $node->field_rd_video_youtube[0]['view'];
    }
    
    print '<strong>' . $title . '</strong>';


    print $node->field_rd_teaser_text[0]['view'] . '<br/>';
    print $node->field_conf_description[0]['view'];


		$additional_images = $node->field_rd_add_images;
		if (strlen($additional_images[0]['filepath']) > 2) {
			print '<div class="rd-additional-images">';
			foreach($additional_images as $key=>$value) {
				$img = theme('imagecache', 'additional_image_265x175', $value['filepath'], 'Additional image', '');
				print '<div class="rd-additional-image">' . $img . '</div>';
				
			}
			print '</div>';
		}


		$footer_videos = $node->field_rd_footer_videos;
		if (strlen($footer_videos[0]['value']) > 2) {
			print '<div class="rd-additional-videos">';
				foreach($footer_videos as $key=>$value) {
					print '<div class="rd-additional-video">';
					// dont use stock embed, force size here to 265 x 175
					$provider = $value['provider'];
					$vid = $value['value'];
					$vtitle = $value['title'];
					if ($provider == 'vimeo') {
						print '<iframe src="http://player.vimeo.com/video/' . $vid . '" width="265" height="175" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe> <p>' . 
						$vtitle . '</p>';
					} else {
						// yt
						print '<iframe width="265" height="175" ' .  'src="http://www.youtube.com/embed/' . $vid . '" frameborder="0" allowfullscreen></iframe>';
					}
					print '</div>';
				}
			print '</div>';
		}


    // attachments
    $attachment = $node->field_rd_attachment[0]['view'];
    print '<div class="rd-attachment"><strong>Attachments</strong>:<br/>' . $attachment . '</div>';


    
    
                    
    
    
    
			?>
  </div>


<?php if (!$page): ?>
  </article> <!-- /.node -->
<?php endif;?>
