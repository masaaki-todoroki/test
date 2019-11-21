<?php

function incliment_slug($slug) {
	global $post;
	if ( ( $slug ) || ( $post->post_type == 'page' ) ) {
		return $slug;
	}
	global $wpdb;
	$slug = $wpdb->get_var("select max(cast(post_name as unsigned)) from {$wpdb->posts} where post_type = 'post' and post_status not in ('object', 'attachment', 'inherit') and post_name regexp '^[0-9]+$'");
	$slug ++;
	return $slug;
}
// フィルターフック
add_filter('editable_slug', 'incliment_slug');
