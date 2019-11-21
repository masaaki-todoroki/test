<?php
/*
Template Name: page
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<?php if (have_posts()) : ?>
			<?php while (have_posts()) : ?>
				<?php the_post(); ?>
				<?php the_content(); ?>
			<?php endwhile; ?>
		<?php endif; ?>
	</div>
</main>

<div class="local-navigation">
	<?php the_breadcrumbs(); ?>
</div>

<?php if ( is_active_sidebar( 'primary-sidebar' ) ) : ?>
	<div class="o-row__column o-row__column--span-12 o-row__column--span-4@medium">
		<?php get_sidebar(); ?>
	</div>
<?php endif; ?>

<?php get_footer(); ?>
