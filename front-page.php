<?php
/*
Template Name: front-page
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<?php if( have_posts() ) : ?>
	<?php while( have_posts() ) : ?>
	<?php the_post(); ?>
	<div class="p-top__slider">
		<div class="p-top__slider-container swiper-container">
			<div class="swiper-wrapper">
				<?php $movie_rows = get_field( 'top-movie' ); ?>
				<?php if( $movie_rows ): ?>
				<?php foreach ( $movie_rows as $movie_row ): ?>
				<div class="p-top__slider-slide swiper-slide">
					<div class="p-top__slider-movie">
						<iframe width="560" height="315" src="https://www.youtube.com/embed/<?php echo esc_attr( $movie_row[ 'movie-url' ] ); ?>?controls=0&autoplay=1&loop=1&playlist=<?php echo esc_attr( $movie_row[ 'movie-url' ] ); ?>&enablejsapi=1&mute=1&start=<?php echo esc_attr( $movie_row[ 'movie-start' ] ); ?>" frameborder="0" allow="accelerometer; autoplay" allowfullscreen></iframe>
					</div>
					<div class="p-top__slider-image">
						<img src="<?php echo esc_attr( $movie_row[ 'thumbnail-image' ] ); ?>" alt="">
					</div>
					<a href="#">
						<span class="p-top__slider-title"><?php echo esc_html( $movie_row[ 'movie-title' ] ); ?></span>
					</a>
				</div>
				<?php endforeach; ?>
				<?php endif; ?>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
	<section class="p-top__who">
		<div class="p-top__content p-top__content--who">
			<div class="p-top__heading">
				<h2>WHO WE ARE</h2>
			</div>
			<div class="p-top__body">
				<div class="p-top__who-text">
					<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'who-we-are-lead-text' ) ) ); ?></p>
				</div>
				<ul class="p-top__glance">
					<li class="p-top__glance-item">
						<a href="http://works.aoi-pro.com/" target="_blank">
							<div class="p-top__glance-inner p-top__glance-inner--card01">
							<div class="p-top__glance-heading">
								<h3>広告映像制作本数</h3>
							</div>
							<div class="p-top__glance-body">
								<p class="p-top__glance-number">約<span class="p-top__glance-figure"><?php echo number_format( esc_html( get_field( 'number-of-ad-video-productions' ) ) ); ?></span>本</p>
								<p class="p-top__glance-text">国内業界トップクラス</p>
								<p class="p-top__glance-link">WORKS</p>
							</div>
							</div>
						</a>
					</li>
					<li class="p-top__glance-item">
						<a href="http://works.aoi-pro.com/" target="_blank">
							<div class="p-top__glance-inner p-top__glance-inner--card02">
							<div class="p-top__glance-heading">
								<h3>受賞数</h3>
							</div>
							<div class="p-top__glance-body">
								<p class="p-top__glance-number">年<span class="p-top__glance-figure"><?php echo number_format( esc_html( get_field( 'number-of-awards' ) ) ); ?></span>以上</p>
								<p class="p-top__glance-text">国内外で多数の受賞</p>
								<p class="p-top__glance-link">AWARDS</p>
							</div>
							</div>
						</a>
					</li>
					<li class="p-top__glance-item">
						<a href="<?php echo esc_url( get_page_link( 300 ) ); ?>">
							<div class="p-top__glance-inner p-top__glance-inner--card03">
							<div class="p-top__glance-heading">
								<h3>制作拠点</h3>
							</div>
							<div class="p-top__glance-body">
								<p class="p-top__glance-number">アジア<span class="p-top__glance-figure"><?php echo number_format( esc_html( get_field( 'production-base' ) ) ); ?></span>都市</p>
								<p class="p-top__glance-text">&nbsp;</p>
								<p class="p-top__glance-link">NETWORK</p>
							</div>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<?php endwhile; ?>
	<?php endif; ?>
	<section class="p-top__news">
		<div class="p-top__content">
			<div class="p-top__heading">
				<h2>NEWS</h2>
			</div>
			<div class="p-top__body">
				<ul class="p-top__news">
					<?php
						$args = array(
							'post_type' => 'news',
							'posts_per_page' => 3,
						);
					?>
					<?php $posts = get_posts( $args ); ?>
					<?php foreach( $posts as $post ): ?>
					<?php setup_postdata( $post ); ?>
					<li class="p-top__news-item">
						<a href="<?php the_permalink(); ?>">
							<div class="p-top__news-inner">
								<div class="p-top__news-image">
									<?php if( has_post_thumbnail() ): ?>
										<?php the_post_thumbnail( 'full' ); ?>
									<?php endif; ?>
								</div>
								<div class="p-top__news-text">
									<p class="c-paragraph"><?php the_title(); ?></p>
								</div>
								<div class="p-top__news-info">
									<span class="p-top__news-date">
										<?php echo esc_html( get_the_date() ); ?>
									</span>
									<span>
										<?php
										if ( $terms = get_the_terms($post->ID, 'news_taxonomy') ) {
											foreach ( $terms as $term ) {
											echo esc_html( $term->name );
											}
										}
										?>
									</span>
								</div>
							</div>
						</a>
					</li>
					<?php endforeach; ?>
					<?php wp_reset_postdata(); ?>
				</ul>
				<div class="c-button c-button--more">
					<a href="<?php echo get_post_type_archive_link( 'news' ); ?>">VIEW MORE</a>
				</div>
			</div>
		</div>
	</section>
</main>

<?php get_footer(); ?>
