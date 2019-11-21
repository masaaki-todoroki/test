<?php

function aoitheme_assets()
{
	wp_enqueue_style( 'aoitheme-stylesheet', network_home_url() . 'assets/css/style.css', array(), '1.0.0', 'all' );
	wp_enqueue_style( 'aoitheme-stylesheet-plus', network_home_url() . 'assets/css/style-plus.css', array(), '1.0.0', 'all' );
	wp_enqueue_script( 'aoitheme-scripts', network_home_url() . 'assets/js/script.min.js', array('jquery'), '1.0.0', true );
	wp_enqueue_script( 'aoitheme-myswiper-scripts', network_home_url() . 'assets/js/bundle.js', array('jquery'), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'aoitheme_assets' );

function aoitheme_block_editor_assets()
{
	wp_enqueue_style( 'aoitheme-block-style', network_home_url() . 'assets/css/editor-style.css', array(), '1.0.0', 'all' );
	wp_enqueue_style( 'aoitheme-block-style-plus', network_home_url() . 'assets/css/editor-style-plus.css', array(), '1.0.0', 'all' );
	wp_enqueue_script( 'aoitheme-block-custom', network_home_url() . 'assets/js/block-editor.js', array('wp-blocks', 'wp-element', 'wp-editor'), '1.0.0', true );
	wp_enqueue_script( 'aoitheme-block-custom-select', network_home_url() . 'assets/js/blocks.build.js', array('wp-blocks', 'wp-element', 'wp-editor','wp-rich-text', 'wp-element', 'wp-compose', 'wp-data' ), '1.0.0', true );
}
add_action( 'enqueue_block_editor_assets', 'aoitheme_block_editor_assets' );

function contactform_script()
{
	//jp
	if (is_page(356)) {
		wp_enqueue_script('aoitheme-contactform-inquiry-scripts', network_home_url() . 'assets/js/contactform-inquiry-jp.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(360)) {
		wp_enqueue_script('aoitheme-contactform-neworder-scripts', network_home_url() . 'assets/js/contactform-neworder-jp.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(363)) {
		wp_enqueue_script('aoitheme-contactform-production-scripts', network_home_url() . 'assets/js/contactform-production-jp.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(366)) {
		wp_enqueue_script('aoitheme-contactform-recruit-scripts', network_home_url() . 'assets/js/contactform-recruit-jp.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(369)) {
		wp_enqueue_script('aoitheme-contactform-mynumber-scripts', network_home_url() . 'assets/js/contactform-mynumber-jp.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(374)) {
		wp_enqueue_script('aoitheme-contactform-ecd-scripts', network_home_url() . 'assets/js/contactform-ecd-jp.js', array('jquery'), '1.0.0', true);
	}
	//en
	if (is_page(80)) {
		wp_enqueue_script('aoitheme-contactform-inquiry-scripts', network_home_url() . 'assets/js/contactform-inquiry-en.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(84)) {
		wp_enqueue_script('aoitheme-contactform-recruit-scripts', network_home_url() . 'assets/js/contactform-recruit-en.js', array('jquery'), '1.0.0', true);
	}
	elseif(is_page(89)) {
		wp_enqueue_script('aoitheme-contactform-production-scripts', network_home_url() . '/assets/js/contactform-production-en.js', array('jquery'), '1.0.0', true);
	}
}
add_action('wp_head', 'contactform_script');
