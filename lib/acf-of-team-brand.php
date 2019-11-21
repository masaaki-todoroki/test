<?php

function register_acf_teambrand_block_types() {
	// register a teambrand block.
	acf_register_block_type(array(
		'name'              => 'teambrand',
		'title'             => __('Team/Brand'),
		'description'       => __('A custom teambrand block.'),
		'render_template'   => 'template-parts/blocks/teambrand/teambrand.php',
		'category'          => 'aoi-layout',
		'icon'              => 'media-document',
		'keywords'          => array( 'teambrand', 'quote' ),
		'enqueue_assets' 	=> function(){
			wp_enqueue_style( 'block-teambrand', get_template_directory_uri() . '/template-parts/blocks/teambrand/teambrand.css', array(), '1.0.0' );
			wp_enqueue_script( 'block-teambrand', get_template_directory_uri() . '/template-parts/blocks/teambrand/teambrand.js', array(), '1.0.0', true );
		},
	));
}
// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
	add_action('acf/init', 'register_acf_teambrand_block_types');
}
