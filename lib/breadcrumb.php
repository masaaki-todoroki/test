<?php

function the_breadcrumbs(){
	global $post;
	$results = '';
	$taxonomy = get_post_taxonomies( $post );
	$term     = get_the_terms( $post, $taxonomy[0] );
	$results .=
	'
	<ul class="l-breadcrumb__list">
		<li class="l-breadcrumb__list-item">
			<a href="'.home_url( '/' ).'">HOME</a>
		</li>
	';
	if( is_archive() ){
		$results .=
		'
		<li class="l-breadcrumb__list-item">
		'.get_the_archive_title().'
		</li>
		';
	}
	elseif ( is_singular( 'access' ) ) {
		$results .=
		'
		<li class="l-breadcrumb__list-item">
			<a href="'.home_url( '/' ). 'access/ ">
				ACCESS
			</a>
		</li>
		<li class="l-breadcrumb__list-item">
		'.get_the_title( $post ).'
		</li>
		';
	}
	elseif ( is_singular( 'news' ) ) {
		$results .=
		'
		<li class="l-breadcrumb__list-item">
			<a href="'.home_url( '/' ). 'news/ ">
				NEWS
			</a>
		</li>
		<li class="l-breadcrumb__list-item">
			<a href="'.home_url( '/' ). 'news/'.get_the_date('Y').'">
			'.get_the_date('Y').'
			</a>
		</li>
		<li class="l-breadcrumb__list-item">
		'.get_the_title( $post ).'
		</li>
		';
	}
	elseif( is_single() ){
		if( $term ){
		$results .=
		'
		<li class="l-breadcrumbs-list__item">
			<a href="'.home_url( '/' ). 'news/ ">
			NEWS
			</a>
		</li>
		<li class="l-breadcrumbs-list__item">
			<a href="'.get_term_link( $term[0], $taxonomy[0] ).'">
			'.$term[0]->name.'
			</a>
		</li>
		';
		}
		$results .=
		'
		<li class="l-breadcrumbs-list__item l-breadcrumbs-list__item--current">
		'.get_the_title( $post ).'
		</li>
		';
	}
	elseif( is_page() ){
		if( $post->post_parent != 0 ){
			$ancestors = array_reverse( $post->ancestors );
			foreach( $ancestors as $ancestor ){
				$results .=
				'
				<li class="l-breadcrumb__list-item"><a href="'.get_permalink( $ancestor ).'">'.get_the_title( $ancestor ).'</a></li>
				';
			}
		}
		$results .=
		'
		<li class="l-breadcrumb__list-item">'.get_the_title( $post ).'</li>
		';
	}
	elseif( is_404() ){
		$results .=
		'
		<li class="l-breadcrumbs-list__item l-breadcrumbs-list__item--current">
		404 Not Found
		</li>
		';
	}
	elseif( is_search() ){
		$results .=
		'
		<li class="l-breadcrumbs-list__item l-breadcrumbs-list__item--current">
		'.'"'.get_search_query().'"の検索結果
		</li>
		';
	}
	$results .= '</ul>';
	echo $results;
}
