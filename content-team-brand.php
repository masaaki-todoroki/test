<?php
/**
 * Block Name: teambrand
 */

// 画像を呼び出す場合に
$team_brand_image = get_field('team_brand_image');
// ブロックのIDを呼び出す設定
$id = 'teambrand' . $block['id'];
?>
<div id="<?php echo $id; ?>" class="teambrand <?php echo $align_class; ?>">
	<a href="<?php the_field( 'team_brand_url' ); ?>" target="_blank">
		<img src="<?php echo $team_brand_image[ 'url' ]; ?>" alt="<?php echo $team_brand_image[ 'alt' ]; ?>" />
		<h4><?php the_field( 'team_brand_name' ); ?></h4>
		<p><?php the_field( 'explanation_of_team_brand' ); ?></p>
	</a>
</div>
