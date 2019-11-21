<?php
/*
Template Name: page-inquiries
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">CONTACT</h2>
		</div>
	</div>
	<div class="l-main__content">
		<section>
			<?php if( have_posts() ) : ?>
			<?php while( have_posts() ) : ?>
			<?php the_post(); ?>
			<h3 class="c-heading c-heading--lv3"><?php the_title(); ?></h3>
			<?php the_content(); ?>
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
