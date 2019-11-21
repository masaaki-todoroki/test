<?php
/*
Template Name: page-business
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">ABOUT</h2>
		</div>
	</div>
	<div class="l-local-nav">
		<div class="l-local-nav__content">
			<ul class="l-local-nav__list">
				<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="l-local-nav__list-item <?php if( is_page( 'business' ) ) echo esc_attr( 'l-local-nav__list-item--current' ); ?>"><a href="<?php echo esc_url( get_page_link( 297 ) ); ?>">事業紹介</a></li>
				<li class="l-local-nav__list-item"><a href="<?php echo get_page_link( 300 ) ?>">会社情報</a></li>
				<?php else: ?>
				<li class="l-local-nav__list-item <?php if( is_page( 'business' ) ) echo esc_attr( 'l-local-nav__list-item--current' ); ?>"><a href="<?php echo esc_url( get_page_link( 15 ) ); ?>">Business</a></li>
				<li class="l-local-nav__list-item"><a href="<?php echo esc_attr( get_page_link( 20 ) ); ?>">Corporate Information</a></li>
				<?php endif; ?>
			</ul>
		</div>
	</div>

	<?php if( have_posts() ) : ?>
	<?php while( have_posts())  : ?>
	<?php the_post(); ?>
	<div class="l-main__content l-main__content--full">
		<div class="c-lead">
			<div class="c-lead__image">
				<img src="<?php the_field( 'lead-image-pc' ); ?>" alt="">
				<img src="<?php the_field( 'lead-image-sp' ); ?>" alt="">
			</div>
			<div class="c-lead__content">
				<p class="c-lead__text"><?php echo nl2br( esc_html( get_field( 'lead-title' ) ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="l-main__content">
		<p class="c-paragraph c-paragraph--center">
			<?php echo nl2br( esc_html( get_field( 'lead-text' ) ) ); ?>
		</p>

		<h3 class="c-heading c-heading--lv3">CAPABILITIES</h3>
		<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'capabilities-text' ) ) ); ?></p>
		<ul class="p-about__capabilities">
			<?php $capabilities_rows = get_field( 'capabilities' ); ?>
			<?php if( $capabilities_rows ): ?>
			<?php foreach ( $capabilities_rows as $capabilities_row ): ?>
			<li class="p-about__capabilities-item">
				<div class="p-about__capabilities-inner">
					<p class="p-about__capabilities-text"><?php echo esc_html( $capabilities_row[ 'capabilities-title' ] ); ?></p>
					<div class="p-about__capabilities-image">
						<img src="<?php echo esc_attr( $capabilities_row[ 'capabilities-image' ] ); ?>" alt="">
					</div>
				</div>
			</li>
			<?php endforeach; ?>
			<?php endif; ?>
		</ul>

		<?php if( strpos( $url, 'jp' ) !== false ): ?>
		<h3 class="c-heading c-heading--lv3">TEAM / BRAND</h3>
		<ul class="c-panel c-panel--col4">
			<?php $teambrand_rows = get_field( 'teambrand' ); ?>
			<?php if( $teambrand_rows ): ?>
			<?php foreach ( $teambrand_rows as $teambrand_row ): ?>
			<li class="c-panel__item c-panel__item--blank">
				<a href="<?php echo esc_url( $teambrand_row[ 'teambrand-url' ] ); ?>" target="_blank">
					<div class="c-panel__inner">
						<div class="c-panel__image">
							<img src="<?php echo esc_attr( $teambrand_row[ 'teambrand-image' ] ); ?>" alt="">
						</div>
						<div class="c-panel__text">
							<p class="c-panel__title"><?php echo esc_html( $teambrand_row[ 'teambrand-title' ] ); ?></p>
							<p class="c-paragraph"><?php echo nl2br( esc_html( $teambrand_row[ 'teambrand-text' ] ) ); ?></p>
						</div>
					</div>
				</a>
			</li>
			<?php endforeach; ?>
			<?php endif; ?>
		</ul>
		<?php else: ?>
		<h3 class="c-heading c-heading--lv3">DIRECTORS</h3>
		<div class="c-grid c-grid--2to1">
			<div class="c-grid__item wp-block-column">
				<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'directors-text' ) ) ); ?></p>
				<div class="c-button c-button--more">
					<a href="https://www.aoi-global.com/directors/japan" target="_blank">VIEW MORE</a>
				</div>
			</div>
			<div class="c-grid__item wp-block-column">
				<figure class="c-figure">
					<img src="<?php the_field( 'directors-image' ); ?>" alt="">
				</figure>
			</div>
		</div>

		<h3 class="c-heading c-heading--lv3">PRODUCTION SERVICE</h3>
		<p class="c-paragraph">Please take a look at what Japan has to offer.</p>
		<div class="p-about__awards">
			<?php $production_service_rows = get_field( 'production-service' ); ?>
			<?php if( $production_service_rows ): ?>
			<?php foreach ( $production_service_rows as $production_service_row ): ?>
			<div class="p-about__awards-item">
				<figure class="c-figure">
					<img src="<?php echo esc_attr( $production_service_row[ 'production-service-image' ] ); ?>" class="c-figure__img" alt="">
				</figure>
			</div>
			<?php endforeach; ?>
			<?php endif; ?>
		</div>
		<div class="c-button c-button--more">
			<a href="https://www.aoi-global.com/directors/japan" target="_blank">VIEW MORE</a>
		</div>

		<h3 class="c-heading c-heading--lv3">AWARDS</h3>
		<div class="p-about__awards">
			<?php $awards_rows = get_field( 'awards' ); ?>
			<?php if( $awards_rows ): ?>
			<?php foreach ( $awards_rows as $awards_row ): ?>
			<div class="p-about__awards-item">
				<figure class="c-figure">
					<img src="<?php echo esc_attr( $awards_row[ 'awards-image' ] ); ?>" class="c-figure__img" alt="">
				</figure>
			</div>
			<?php endforeach; ?>
			<?php endif; ?>
		</div>
		<div class="c-button c-button--more">
			<a href="http://works.aoi-pro.com/" target="_blank">VIEW MORE</a>
		</div>
		<?php endif; ?>

		<h3 class="c-heading c-heading--lv3">NETWORK</h3>
		<div class="c-grid c-grid--2to1">
			<div class="c-grid__item wp-block-column">
				<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'network-text' ) ) ); ?></p>
				<div class="c-button c-button--more">
					<a href="<?php echo esc_attr( get_page_link( 306 ) ); ?>">VIEW MORE</a>
				</div>
			</div>
			<div class="c-grid__item wp-block-column">
				<figure class="c-figure">
					<img src="<?php the_field( 'network-image' ); ?>" alt="">
				</figure>
			</div>
		</div>

		<?php if( strpos( $url, 'jp' ) !== false ): ?>
		<h3 class="c-heading c-heading--lv3">AWARDS</h3>
		<div class="p-about__awards">
			<?php $awards_rows = get_field( 'awards' ); ?>
			<?php if( $awards_rows ): ?>
			<?php foreach ( $awards_rows as $awards_row ): ?>
			<div class="p-about__awards-item">
				<figure class="c-figure">
					<img src="<?php echo esc_attr( $awards_row[ 'awards-image' ] ); ?>" class="c-figure__img" alt="">
				</figure>
			</div>
			<?php endforeach; ?>
			<?php endif; ?>
		</div>
		<div class="c-button c-button--more">
			<a href="http://works.aoi-pro.com/" target="_blank">VIEW MORE</a>
		</div>
		<?php endif; ?>
	</div>
	<?php endwhile; ?>
	<?php endif; ?>
	<div class="l-breadcrumb">
		<div class="l-breadcrumb__content">
			<?php the_breadcrumbs(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>
