<?php

function register_acf_panel_block_types() {
	// register a panel block.
	acf_register_block_type(array(
		'name'              => 'panel',
		'title'             => __('PANEL'),
		'description'       => __('A custom panel block.'),
		'render_template'   => 'template-parts/blocks/panel/panel.php',
		'category'          => 'aoi-layout',
		'icon'              => 'media-document',
		'keywords'          => array( 'panel', 'quote' ),
		'enqueue_assets' 	=> function(){
			wp_enqueue_style( 'block-panel', get_template_directory_uri() . '/template-parts/blocks/panel/panel.css', array(), '1.0.0' );
			wp_enqueue_script( 'block-panel', get_template_directory_uri() . '/template-parts/blocks/panel/panel.js', array(), '1.0.0', true );
		},
	));
}
// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
	add_action('acf/init', 'register_acf_panel_block_types');
}
