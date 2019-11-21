<?php
/*
Template Name: single-access
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">ACCESS</h2>
		</div>
	</div>
	<div class="l-local-nav">
		<div class="l-local-nav__content">
			<ul class="l-local-nav__list">
				<?php
				$current_page_id = $wp_query->get_queried_object_id();
				$args = array(
					'post_type' => 'access',
				);
				$access_posts = get_posts( $args );
				foreach ( $access_posts as $post ) {
					setup_postdata( $post );
					$current_class = null;
					$listed_page_id = null;
					$listed_page_id = $post->ID;
					if ( $listed_page_id == $current_page_id ) {
						$current_class = 'l-local-nav__list-item--current';
					}
				?>
					<li class="l-local-nav__list-item <?php echo esc_attr( $current_class ); ?>"><a href="<?php the_permalink() ?>"><?php the_title() ?></a></li>
				<?php
				}	
				?>
			</ul>
		</div>
	</div>
	<div class="l-main__content">
	<?php if( have_posts() ) : ?>
	<?php while( have_posts() ) : ?>
	<?php the_post(); ?>
		<table class="c-table c-table--1to3">
			<tbody>
				<tr>
					<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
					<td>所在地</td>
					<?php else: ?>
					<td>Address</td>
					<?php endif; ?>
					<td><?php echo nl2br( esc_html( get_field( 'address' ) ) ); ?>（<a href="<?php echo esc_url( get_field( 'google-map-url' ) ); ?>" target="_blank" rel="noopener">Google Map</a>）</td>
				</tr>
				<tr>
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
					<td>電話</td>
					<?php else: ?>
					<td>Tel</td>
					<?php endif; ?>
					<td><?php echo esc_html( get_field( 'tel' ) ); ?></td>
				</tr>
				<tr>
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
					<td>アクセス</td>
					<?php else: ?>
					<td>Access</td>
					<?php endif; ?>
					<td><?php echo nl2br( esc_html( get_field( 'location' ) ) ); ?></td>
				</tr>
				<tr>
					<?php if( strpos( $url, 'jp' ) !== false ): ?>
					<td>駐車場</td>
					<?php else: ?>
					<td>Parking</td>
					<?php endif; ?>
					<td><?php echo nl2br( esc_html( get_field( 'parking' ) ) ); ?></td>
				</tr>
			</tbody>
		</table>
		<div style="margin-top: 40px;">
			<?php if( get_field( 'map' ) ): ?>
				<img src="<?php the_field( 'map' ); ?>" />
			<?php endif; ?>
		</div>
		<div style="margin-top: 40px;">
			<?php the_content(); ?>
		</div>
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
