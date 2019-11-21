<?php

function custom_rewrite_rule() {
	add_rewrite_rule( 'news/([0-9]{4})/([^/0-9]+)/?$', 'index.php?post_type=news&year=$matches[1]&news_taxonomy=$matches[2]', 'top' );
}
add_action( 'init', 'custom_rewrite_rule', 10, 0 );

function get_news_archive_link( $year = null, $term_slug = null ) {
	$year = esc_html( $year );
	$additional_path = ! is_null( $year ) ? ( ! is_null( $term_slug ) ? $year . '/' . $term_slug : $year ) : '';
	return get_post_type_archive_link( 'news' ) . $additional_path;
}
