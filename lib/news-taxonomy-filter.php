<?php
function custom_taxonomy_filter() {
	global $post_type;
	if ( 'news' == $post_type ) {
?>
	<select name="news_taxonomy">
		<option value="">Tag - All</option>
<?php
		$terms = get_terms('news_taxonomy');
		foreach ($terms as $term) { ?>
		<option value="<?php echo $term->slug; ?>" <?php if ( $_GET['news_taxonomy'] == $term->slug ) { print 'selected'; } ?>><?php echo $term->name; ?></option>
<?php
		}
?>
	</select>
<?php
	}
}
add_action( 'restrict_manage_posts', 'custom_taxonomy_filter' );
