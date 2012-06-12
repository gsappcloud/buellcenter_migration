<?php if (!$page): ?>
  <article id="node-<?php print $node->nid; ?>" class="node<?php if ($sticky) { print ' sticky'; } ?><?php if (!$status) { print ' node-unpublished'; } ?> clearfix">
<?php endif; ?>

  <?php if ($picture || $submitted || !$page): ?>

	  <?php if (!$page): ?>
        <?php
        $teaser_image = $node->field_rd_teaser_image[0];
        
				// if null use the first image
				if (strlen($teaser_image['filepath']) < 10) {
					$teaser_image = $node->field_rd_image[0];
				}
				$filepath = $teaser_image['filepath'];
				print '<a href="/' . $node->path . '"><div class="rd-teaser">' .
							theme('imagecache', 'teaser_image_550x250', $filepath, 'Buellcenter header image', '') . 
							'</div></a>';
				print '<div class="rd-teaser-title"><a href="/' . $node->path . '">' .
							$title . '</a></div>';
							
				print '<div class="rd-teaser-text">' . 
							$node->field_rd_teaser_text[0]['view'] . '</div>';
				
				$bg_hex = $node->field_rd_bg[0]['value'];
				if (strlen($bg_hex) > 2) {
					print '<div style="display: none;" class="rd-bg">' . 
						$bg_hex . '</div>';
					}
				        
        
        
        ?>
        
        
        
        
      <?php endif; ?>


  <?php endif;?>



<?php if (!$page): ?>
  </article> <!-- /.node -->
<?php endif;?>
