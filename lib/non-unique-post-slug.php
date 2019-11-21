<?php

function non_unique_post_slug( $slug, $post_ID, $post_status, $post_type, $post_parent, $original_slug ) {
		if( $post_type === 'news' && $original_slug === '01' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '02' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '03' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '04' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '05' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '06' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '07' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '08' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '09' ) {
			return $original_slug;
		} elseif( $post_type === 'news' && $original_slug === '10' ) {
			return $original_slug;
		} 
		return $slug;
}
add_filter( 'wp_unique_post_slug', 'non_unique_post_slug', 10, 6 );
