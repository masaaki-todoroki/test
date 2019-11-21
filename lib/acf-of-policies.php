<?php

function register_acf_policies_block_types() {
	// register a policies block.
	acf_register_block_type(array(
		'name'              => 'policies',
		'title'             => __('Policies'),
		'description'       => __('A custom policies block.'),
		'render_template'   => 'template-parts/blocks/policies/policies.php',
		'category'          => 'aoi-layout',
		'icon'              => 'media-document',
		'keywords'          => array( 'policies', 'quote' ),
		// 'enqueue_assets' 	=> function(){
		// 	wp_enqueue_style( 'block-policies', get_template_directory_uri() . '/template-parts/blocks/policies/policies.css', array(), '1.0.0' );
		// 	wp_enqueue_script( 'block-policies', get_template_directory_uri() . '/template-parts/blocks/policies/policies.js', array(), '1.0.0', true );
		// },
	));
}
// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
	add_action('acf/init', 'register_acf_policies_block_types');
}
