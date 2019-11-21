<?php

/**
 * TeamBrand Block Template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during AJAX preview.
 * @param   (int|string) $post_id The post ID this block is saved to.
 */

// Create id attribute allowing for custom "anchor" value.
$id = 'policies-' . $block['id'];
if( !empty($block['anchor']) ) {
	$id = $block['anchor'];
}

// Create class attribute allowing for custom "className" and "align" values.
$className = 'policies';
if( !empty($block['className']) ) {
	$className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
	$className .= ' align' . $block['align'];
}

// Load values and assing defaults.
$name = get_field('title') ?: '';
$url = get_field('url') ?: 'Role';
?>

<div id="<?php echo esc_attr($id); ?>" class="">
	<a href="<?php echo $url ?>">
		<div class="c-panel__inner">
			<div class="c-panel__text">
				<?php echo $title; ?><br>
			</div>
		</div>
	</a>
</div>
