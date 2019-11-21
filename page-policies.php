<?php
/*
Template Name: page-policies
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
	<?php if ( have_posts() ) : ?>
	<?php while ( have_posts() ) : ?>
	<?php the_post(); ?>
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">
				<?php the_title(); ?>
			</h2>
		</div>
		<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
		<?php if( strpos( $url, 'jp' ) !== false ): ?>
		<p class="c-paragraph">サイトご利用に関する注意事項や、当社の情報セキュリティの方針は下記メニューからご確認ください。</p>
		<?php else: ?>
		<p class="c-paragraph">サイトご利用に関する注意事項や、当社の情報セキュリティの方針は下記メニューからご確認ください。</p>
		<?php endif; ?>
		<ul class="c-panel c-panel--col3 c-panel--textonly">
			<?php
				$policiesArr = array(
					'posts_per_page' => -1 ,
					'order' => 'ASC' ,
					'order_by' => 'post_title' ,
					'post_type' => 'page' ,
					'post_parent' => $post -> ID
				);
				$policyPageData = query_posts( $policiesArr );
			?>
			<?php foreach( $policyPageData as $policyPage ): ?>
				<?php
					$policyName =  $policyPage -> post_title;
					$policyPageId =  $policyPage -> post_name;
					$policyPageLink =  get_permalink( $policyPage->ID );
				?>
				<li class="c-panel__item">
					<a href="<?php echo esc_url( $policyPageLink ); ?>">
						<div class="c-panel__inner">
							<div class="c-panel__text">
								<?php echo esc_html( $policyName ); ?>
							</div>
						</div>
					</a>
				</li>
				<?php wp_reset_query(); ?>
			<?php endforeach; ?>
		</ul>
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
