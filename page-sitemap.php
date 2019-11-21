<?php
/*
Template Name: page-sitemap
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<?php if( have_posts() ) : ?>
		<?php while( have_posts() ) : ?>
		<?php the_post(); ?>
		<h1 class="c-heading__text c-heading__text--lv1">
			<?php the_title(); ?>
		</h1>
		<?php the_content(); ?>
		<?php endwhile; ?>
		<?php endif; ?>
	</div>
</main>

<?php get_footer(); ?>
