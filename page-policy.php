<?php
/*
Template Name: page-policy
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<?php if( have_posts() ) : ?>
		<?php while( have_posts() ) : ?>
		<?php the_post(); ?>
			<div class="c-heading c-heading--page-title">
				<h2 class="c-heading__text">
					<?php the_title(); ?>
				</h2>
			</div>
			<?php the_content(); ?>
		<?php endwhile; ?>
		<?php endif; ?>
	</div>
	<div class="l-breadcrumb">
		<div class="l-breadcrumb__content">
			<?php the_breadcrumbs(); ?>
		</div>
	</div>
</main>

<?php get_footer(); ?>
