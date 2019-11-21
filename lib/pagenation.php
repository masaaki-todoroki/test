<?php

/* $rangeの値で出力されるページナンバーの範囲を設定 */
function pagination( $pages = '', $range = 1 ){
	$showitems = ( $range * 2 )+1;  

	global $paged;
	if( empty( $paged ) ) $paged = 1;

	/* ここで全体のページ数を取得 */
	if( $pages == '' ){
		global $wp_query;
		$pages = $wp_query->max_num_pages;
		if( !$pages ){
			$pages = 1;
		}
	}

	/* ページ数が1じゃなければ */
	if( 1 != $pages ){
	echo "<div class=\"p-news-page\"><ul class=\"p-news-page__list\">";

	/* 1番最初のページに戻るボタン */
	if($paged > 2 && $paged > $range+1 && $showitems < $pages){
		echo "<li class=\"p-news-page__item\"><a href=\"".get_pagenum_link(1)."\"><img src=". network_home_url()."\assets/img/icons/icon_arrow-left-double.png\" alt=\"FIRST\"></a></li>";
	}

	/* 1つ前のページへボタン */
	// if ( $paged > 1 && $showitems < $pages ){
	// 	echo "<li class=\"p-news-page__item p-news-page__item--prev\"><a href=\"".get_pagenum_link($paged - 1)."\"><img src=". network_home_url()."\assets/img/icons/icon_arrow-right.svg\" alt=\"PREV\"></a></li>";
	// }

	/* ページ数が続くことを示す３点リーダー */
	if ( $paged > 3 ){
		echo "<li class=\"p-news-page__item p-news-page__item--dots\"><span>…</span></li>";
	}

	/* ページナンバーの出力。$pagedが一致した場合はcurrentを、一致しない場合はリンクを生成 */
	for ( $i=1; $i <= $pages; $i++ ){
		if ( 1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1 ) || $pages <= $showitems )){
			echo ($paged == $i) ? "<li class=\"p-news-page__item p-news-page__item--current\"><span>".$i."</span></li>" : "<li class=\"p-news-page__item\"><a href=\"".get_pagenum_link($i)."\">".$i."</a></li>";
		}
	}

	/* ページ数が続くことを示す３点リーダー */
	if ( $paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages ){
		echo "<li class=\"p-news-page__item p-news-page__item--dots\"><span>…</span></li>";
	}

	/* 1つ次のページへボタン */
	// if ( $paged < $pages && $showitems < $pages ){
	// 	echo "<li class=\"p-news-page__item p-news-page__item--next\"><a href=\"".get_pagenum_link($paged + 1)."\"><img src=". network_home_url()."\assets/img/icons/icon_arrow-right.svg\" alt=\"NEXT\"></a></li>";
	// }

	/* 最後のページへ進むボタン */
	if ($paged < $pages-1 &&  $paged+$range-1 < $pages && $showitems < $pages){
		//echo "<li class=\"pagerNextAll\"><a href=\"".get_pagenum_link($pages)."\">Last</a></li>";
		echo "<li class=\"p-news-page__item\"><a href=\"".get_pagenum_link($pages)."\"><img src=". network_home_url()."\assets/img/icons/icon_arrow-right-double.png\" alt=\"LAST\"></a></li>";
	}

	echo "</ul></div>";
	}
}