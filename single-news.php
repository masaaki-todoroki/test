<?php
/*
Template Name: single-news
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content l-main__content--news-detail">
		<section>
			<div class="p-news-heading">
			<?php if (have_posts()) : ?>
			<?php while (have_posts()) : ?>
			<?php the_post(); ?>
				<h1 class="p-news-heading__text">
					<?php the_title(); ?>
					<span class="p-news-heading__shoulder">
					<?php if ( get_field( 'subtitle' ) ): ?>
						<?php echo get_field( 'subtitle' ) ; ?>
					<?php endif; ?>
					</span>
				</h1>
				<p class="p-news-heading__info">
					<span class="p-news-heading__date">
						<?php echo esc_html( get_the_date() ); ?>
					</span>
					<span class="p-news-heading__cat">
						<?php
							if ($terms = get_the_terms($post->ID, 'news_taxonomy')) {
								foreach ( $terms as $term ) {
									echo esc_html( $term->name );
								}
							}
						?>
					</span>
				</p>
				<div class="p-news-heading__share">
					<div class="p-news-heading__share-fb">
						<div class="fb-share-button" data-href="https://www.aoi-pro.com/" data-layout="button" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.aoi-pro.com%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">シェア</a></div>
					</div>
					<div class="p-news-heading__share-tw">
						<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
					</div>
				</div>
			</div>
			<div class="p-news-body">
				<?php 
					if( get_field( 'oldcontent' ) ): 
						echo '<div id="p-news-old">';
						echo esc_html( get_field( 'oldcontent' ) );
						echo '</div>' ;
					else:
						the_content(); 
					endif;
				?>
				<ul class="c-list c-list--link c-list--link-pdf">
					<?php $pdf_rows = get_field( 'news-pdf' ); ?>
					<?php if( $pdf_rows ): ?>
					<?php foreach ( $pdf_rows as $pdf_row ): ?>
					<?php $pdfurl = $pdf_row[ 'pdf-file' ]; ?>
					<li>
						<a href="<?php echo esc_url( $pdfurl ); ?>" target="_blank">
							<?php echo esc_html( $pdf_row[ 'pdf-text' ] ); ?>
							<span class="c-list--link-pdf__icon"><?php echo '[' . get_file_size( $pdfurl ) . ']' ; ?></span>
						</a>
					</li>
					<?php endforeach; ?>
					<?php endif; ?>
				</ul>
				<hr class="c-hr">
				<div>
					<h4 class="c-heading c-heading--lv2">本件に関するお問い合わせ先</h4>
					<p class="c-paragraph c-paragraph--left">
						<?php if ( get_field( 'news-contact-information' ) ): ?>
							<?php echo nl2br( esc_html( get_field( 'news-contact-information' ) ) ) ; ?>
						<?php endif; ?>
					</p>
				</div>
			</div>
			<?php endwhile; ?>
			<?php endif; ?>
		</section>
	</div>
	<div class="l-breadcrumb">
		<div class="l-breadcrumb__content">
			<?php the_breadcrumbs(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>
