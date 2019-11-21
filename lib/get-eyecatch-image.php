<?php

function get_the_image() {
	global $post;
	$get_img = '';
	// 取得したい画像の位置
	$number = 2;
	$pattern1 ='/<a href=[\'"]([^\'"]+.(jpg|jpeg|gif|png|svg))[\'"]>/i';
	$pattern2 ='/<img.*src=[\'"]([^\'"]+)[\'"].*>/i';
	// リンク先画像があるかどうか
	$match_num = preg_match_all( $pattern1, $post->post_content, $matches );
	if( $match_num === 0 ){
	// リンク先画像がない場合は最初の画像を取得
		preg_match_all( $pattern2, $post->post_content, $matches );
	}
	$get_img = $matches[1][$number - 1];

	if( empty( $get_img ) ){
		// 記事内に画像がない場合のデフォルト画像を設定
		// デフォルト画像を非表示にしたい場合は下にある$get_img = false;の左側の//を消したらよいです。
		$get_img  = get_template_directory_uri()."/img/default.jpg";
		// $get_img  = false;
	}
	if( $get_img === false ){
		//return false;
	} else {
		// 画像表示設定
		$alt = get_the_title();
		$img = '<img src="'.$get_img.'" alt="'.$alt.'" class="attachment-post-thumbnail size-post-thumbnail wp-post-image">';
		return $img;
	}
}