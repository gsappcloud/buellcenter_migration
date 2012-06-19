<?php if (!$page): ?>
  <article id="node-<?php print $node->nid; ?>" class="node<?php if ($sticky) { print ' sticky'; } ?><?php if (!$status) { print ' node-unpublished'; } ?> clearfix">
<?php endif; ?>

  <?php if ($picture || $submitted || !$page): ?>
    <?php if (!$page): ?>
      <header>
	<?php endif; ?>

      <?php print $picture ?>

	  <?php if (!$page): ?>
        <h2><?php print $title ?></h2>
        <?php
        // get node body and add more/less w jquery
        $desc = $node->field_conf_description[0]['value'];
        
        // break after ~ 450 chars but not within a word
        $teaser = substr($desc, 0, 450);
        
        $remaining_post = substr($desc, 450);
        
        
        $teaser_a = explode(' ', $teaser);
        $last_chunk = array_pop(&$teaser_a);
        $teaser = implode(' ', $teaser_a);
        
        print '<div class="conf-teaser ' . $nid . '" >' . $teaser . '</div>';
        print '<div class="conf-teaser-end ' . $nid . '"><br/>...<br/></div>';
        print '<a href="#" class="show-conf" id="' . $nid . '">+ More</a>'; 
        print '<span class="conf-hidden ' . $nid . '"> ' . $last_chunk . 			
        	$remaining_post . 
        	'<a href="#" class="hide-conf" id="' . $nid . '">+ Less</a><br/>' . 
        	'</span>';
                print '<div class="line-body"></div>';
        
        
        ?>
        
        
        
        
      <?php endif; ?>

	  <?php if ($submitted): ?>
        <span class="submitted"><?php print $submitted; ?></span>
      <?php endif; ?>

    <?php if (!$page): ?>
      </header>
	<?php endif; ?>
  <?php endif;?>

  <div class="content">
    <?php print $content ?>
  </div>

  <?php if (!empty($terms) || !empty($links)): ?>
    <footer>
      <?php if ($terms): ?>
        <div class="terms">
          <span><?php print t('Tags: ') ?></span><?php print $terms ?>
        </div>
      <?php endif;?>
      <?php if ($links): ?>
        <div class="links">
          <?php print $links; ?>
        </div>
      <?php endif; ?>
    </footer>
  <?php endif;?>

<?php if (!$page): ?>
  </article> <!-- /.node -->
<?php endif;?>
