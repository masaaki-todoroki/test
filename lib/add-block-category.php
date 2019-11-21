<?php

function aoitheme_block_categories( $categories, $post ) {
	$aoi_heading_and_paragraph = array(
		array(
			'slug' => 'aoi-heading-and-paragraph',
			'title' => 'Aoi見出し & 本文',
			'icon'  => 'edit',
		)
	);
	array_splice( $categories, 0, 0, $aoi_heading_and_paragraph );

	$aoi_div = array(
		array(
			'slug' => 'aoi-div',
			'title' => 'Aoi囲みテキスト & リンク段落',
			'icon'  => 'editor-kitchensink',
		)
	);
	array_splice( $categories, 1, 0, $aoi_div );

	$aoi_list = array(
		array(
			'slug' => 'aoi-list',
			'title' => 'Aoiリスト',
			'icon'  => 'editor-ol',
		)
	);
	array_splice( $categories, 2, 0, $aoi_list );

	$aoi_layout = array(
		array(
			'slug' => 'aoi-layout',
			'title' => 'Aoiレイアウト',
			'icon'  => 'welcome-widgets-menus',
		)
	);
	array_splice( $categories, 3, 0, $aoi_layout );

	$aoi_other = array(
		array(
			'slug' => 'aoi-other',
			'title' => 'Aoiその他',
			'icon'  => 'wordpress',
		)
	);
	array_splice( $categories, 9, 0, $aoi_other );

	return $categories;
}
add_filter( 'block_categories', 'aoitheme_block_categories', 10, 2 );
