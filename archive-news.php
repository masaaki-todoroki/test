<?php
/*
Template Name: archive-news
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<section>
			<?php
				$url = esc_url($_SERVER['REQUEST_URI']);
				$current_year = get_query_var( 'year' );
				$current_term = get_query_var( 'news_taxonomy' );
			?>
			<div class="c-heading c-heading--page-title">
				<h2 class="c-heading__text">
					NEWS <?php if( $current_year ) { echo $current_year; } ?>
				</h2>
			</div>

			<div class="p-news-refine">
				<div class="p-news-refine__year">
					<form>
						<select onChange="location.href=value;">
							<?php
								$archives = get_archives_by_year();
								foreach( $archives as $archive ):
							?>
							<option value="<?php echo esc_attr( get_news_archive_link( $archive->year ) ); ?>"
								<?php
									if ( strpos( $url, esc_html( $archive->year ) ) !== false ) {
										echo 'selected';
									} else {
										echo '';
									}
								?>
							>
								<?php echo esc_html( $archive->year ) ?>
							</option>
							<?php endforeach; ?>
						</select>
					</form>
				</div>
				<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<div class="p-news-refine__cat">
					<span class="p-news-refine__cat-text">カテゴリーを選択：</span>
					<ul class="p-news-refine__cat-list">
						<?php if( $current_year == 0 ): ?>
							<?php
								$lastarchives = get_archives_by_year();
								foreach( $lastarchives as $lastarchive ){
									break;
								}
							?>
							<li class="p-news-refine__cat-item <?php echo $current_term === '' ? esc_attr( 'p-news-refine__cat-item--current' ) : '' ?>">
								<a href="<?php echo esc_url( get_news_archive_link( $lastarchive->year ) ); ?>">
									すべて
								</a>
							</li>
							<?php
								$terms = get_terms( 'news_taxonomy', array(
									'hide_empty' => false,
								) );
								foreach( $terms as $term ):
							?>
							<li class="p-news-refine__cat-item
								<?php
									if ( strpos( $url, esc_html( $term->slug ) ) !== false ) {
										echo esc_attr( 'p-news-refine__cat-item--current' );
									} else {
										echo '';
									}
								?>
							">
								<a href="<?php echo esc_url( get_news_archive_link( $lastarchive->year, $term->slug ) ); ?>">
									<?php echo esc_html( $term->name ); ?>
								</a>
							</li>
							<?php endforeach; ?>
						<?php else: ?>
							<li class="p-news-refine__cat-item <?php echo $current_term === '' ? esc_attr( 'p-news-refine__cat-item--current' ) : '' ?>">
								<a href="<?php echo esc_url( get_news_archive_link( $current_year ) ); ?>">
									すべて
								</a>
							</li>
							<?php
								$terms = get_terms( 'news_taxonomy', array(
									'hide_empty' => false,
								) );
								foreach( $terms as $term ):
							?>
							<li class="p-news-refine__cat-item
								<?php
									if ( strpos( $url, esc_html( $term->slug ) ) !== false ) {
										echo esc_attr( 'p-news-refine__cat-item--current' );
									} else {
										echo '';
									}
								?>
							">
								<a href="<?php echo esc_url( get_news_archive_link( $current_year, $term->slug ) ); ?>">
									<?php echo esc_html( $term->name ); ?>
								</a>
							</li>
							<?php endforeach; ?>
						<?php endif; ?>
					</ul>
				</div>
				<?php endif; ?>
			</div>

			<div class="p-news-panel">
				<ul class="c-panel c-panel--col3">
					<?php if ( have_posts() ) : ?>
						<?php while ( have_posts() ) : ?>
							<?php the_post(); ?>
							<li class="c-panel__item">
								<a href="<?php the_permalink(); ?>">
									<div class="c-panel__inner">
										<div class="c-panel__image">
											<?php if( has_post_thumbnail() ): ?>
												<?php the_post_thumbnail( 'full' ); ?>
											<?php else: ?>
												<img src="<?php echo network_home_url(); ?>/assets/img/logo_ogp.png" alt="">
											<?php endif; ?>
										</div>
										<div class="c-panel__text">
											<p class="c-paragraph"><?php the_title(); ?></p>
										</div>
										<div class="p-news-panel__info">
											<span class="p-news-panel__date">
												<?php echo esc_html( get_the_date() ); ?>
											</span>
											<?php if( strpos( $url, 'jp' ) !== false ): ?>
											<span class="p-news-panel__cat">
												<?php
													if ( $terms = get_the_terms( $post->ID, 'news_taxonomy' ) ) {
														foreach ( $terms as $term ) {
															echo esc_html( $term->name );
														}
													}
												?>
											</span>
											<?php endif; ?>
										</div>
									</div>
								</a>
							</li>
						<?php endwhile; ?>
					<?php endif; ?>
				</ul>
			</div>
			<?php
				if ( function_exists ( "pagination" ) ) {
					pagination( $additional_loop->max_num_pages );
				} 
			?>
		</section>
	</div>
	<div class="l-breadcrumb">
		<div class="l-breadcrumb__content">
			<?php the_breadcrumbs(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>
