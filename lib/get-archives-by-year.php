<?php

function get_archives_by_year( $args = '' ) {
	global $wpdb, $wp_locale;
	$defaults = array (
		'post_type' => 'news',
		'limit' => '',
		'format' => 'html',
		'before' => '',
		'after' => '',
		'show_post_count' => false,
		'echo' => 1
	);
	$parse = wp_parse_args( $args, $defaults );
	extract ( $parse, EXTR_SKIP );
	if ( '' != $limit ) {
		$limit = absint( $limit );
		$limit = ' LIMIT ' . $limit;
	}
	$arcresults = (array) $wpdb->get_results(
		"SELECT YEAR(ADDDATE(post_date, INTERVAL -3 MONTH)) AS `year`, COUNT(ID) AS `posts`
		FROM $wpdb->posts
		WHERE post_type = '$post_type' AND post_status = 'publish'
		GROUP BY YEAR(ADDDATE(post_date, INTERVAL -3 MONTH))
		ORDER BY post_date DESC
		$limit"
	);
	return $arcresults;
}
