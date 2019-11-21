<!DOCTYPE html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<meta name="format-detection" content="telephone=no">
		<meta property="og:title" content="">
		<meta property="og:url" content="http://www.aoi-pro.com/">
		<meta property="og:image" content="http://www.aoi-pro.com/asset/img/logo_ogp.png">
		<meta property="og:description" content="(株)AOI Pro.コーポレートサイト。テレビコマーシャル、デジタルコンテンツ、エンタテイメントコンテンツの企画及び制作。">
		<meta property="og:site_name" content="AOI Pro. Inc.">
		<meta property="og:type" content="website">
		<meta property="og:locale" content="ja_JP">
		<!-- Google Tag Manager -->
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-WQXGLRM');</script>
		<!-- End Google Tag Manager -->
		<?php wp_head(); ?>
	</head>
	<body <?php body_class(); ?>>
		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WQXGLRM"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->
		<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
		<header class="l-header">
			<div class="l-header__content">
				<h1 class="l-header__logo">
					<a href="<?php echo esc_url( get_home_url() ); ?>">
						<img src="<?php echo network_home_url(); ?>/assets/img/logo_aoipro.svg" alt="AOI Pro. Inc.">
					</a>
				</h1>
				<ul class="l-header__utility">
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
					<li class="l-header__utility-item"><a href="<?php echo network_home_url() . 'en'; ?>">ENGLISH</a></li>
					<?php else: ?>
					<li class="l-header__utility-item"><a href="<?php echo network_home_url() . 'jp'; ?>">JAPANESE</a></li>
					<?php endif; ?>
				</ul>
				<div class="l-header__menu-btn">
					<span class="l-header__menu-btn-bar"></span>
					<span class="l-header__menu-btn-bar"></span>
					<span class="l-header__menu-btn-bar"></span>
					<span class="l-header__menu-btn-text">MENU</span>
				</div>
			</div>
		</header>

		<div class="l-header-menu__overlay"></div>
		<nav class="l-header-menu">
			<ul class="l-header-menu__list">
				<li class="l-header-menu__list-item">
					<a href="https://works.aoi-pro.com/">WORKS</a>
				</li>
				<li class="l-header-menu__list-item">
					<span>ABOUT</span>
					<ul class="l-header-menu__sub">
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_page_link( 297 ) ); ?>">事業紹介</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_page_link( 300 ) ); ?>">会社情報</a></li>
						<?php else: ?>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_page_link( 15 ) ); ?>">Business</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_page_link( 20 ) ); ?>">Corporate Information</a></li>
						<?php endif; ?>
					</ul>
				</li>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="l-header-menu__list-item"><a href="<?php echo esc_url( get_page_link( 306 ) ); ?>">NETWORK</a></li>
				<?php else: ?>
				<li class="l-header-menu__list-item"><a href="<?php echo esc_url( get_page_link( 29 ) ); ?>">NETWORK</a></li>
				<?php endif; ?>
				<li class="l-header-menu__list-item"><a href="<?php echo esc_url( get_post_type_archive_link( 'news' ) ); ?>">NEWS</a></li>
				<li class="l-header-menu__list-item">
					<span>ACCESS</span>
					<ul class="l-header-menu__sub">
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 314 ) ); ?>">大崎オフィス</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 315 ) ); ?>">赤坂オフィス</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 318 ) ); ?>">新橋オフィス</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 321 ) ); ?>">白金オフィス</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 1844 ) ); ?>">赤坂サテライト</a></li>
						<?php else: ?>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 39 ) ); ?>">Osaki Office</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 44 ) ); ?>">Akasaka Office</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 45 ) ); ?>">Shimbashi Office</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 50 ) ); ?>">Shirokane Office</a></li>
						<li class="l-header-menu__sub-item"><a href="<?php echo esc_url( get_permalink( 794 ) ); ?>">Akasaka Satellite</a></li>
						<?php endif; ?>
					</ul>
				</li>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="l-header-menu__list-item"><a href="<?php echo esc_url( get_page_link( 353 ) ); ?>">CONTACT</a></li>
				<?php else: ?>
				<li class="l-header-menu__list-item"><a href="<?php echo esc_url( get_page_link( 74 ) ); ?>">CONTACT</a></li>
				<?php endif; ?>
			</ul>
			<ul class="l-header-menu__etc">
				<li class="l-header-menu__etc-item"><a href="https://recruit.aoi-pro.com/" target="_blank">RECRUIT</a></li>
				
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="l-header-menu__etc-item l-header-menu__etc-item--english"><a href="<?php echo network_home_url() . 'en'; ?>">ENGLISH</a></li>
				<?php else: ?>
				<li class="l-header-menu__etc-item l-header-menu__etc-item--english"><a href="<?php echo network_home_url() . 'jp'; ?>">JAPANESE</a></li>
				<?php endif; ?>
			</ul>
		</nav>

		<div id="content">