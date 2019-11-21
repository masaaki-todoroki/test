<?php

function set_post_types_order( $wp_query ){
	if( is_admin() ){
		$post_type = $wp_query->query[ 'post_type' ];
		if( $post_type == 'news' ){
			$wp_query->set( 'orderby', 'date' );
			$wp_query->set( 'order', 'DESC' );
		}
	}
	
	if( $wp_query->is_post_type_archive( 'news' ) ) {
		$post_type = $wp_query->query[ 'post_type' ];
		if( $post_type == 'news' ){
			$wp_query->set( 'orderby', 'date' );
			$wp_query->set( 'order', 'DESC' );
		}
	}
}
add_filter( 'pre_get_posts', 'set_post_types_order' );
