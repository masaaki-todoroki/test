<?php
/*
Template Name: page-contact
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
		<?php if( strpos( $url, 'jp' ) !== false ): ?>
		<p class="c-paragraph">下記メニューからお問い合せの内容をお選びください。お問い合せの内容によっては、返信に時間がかかる場合や、お答えできない場合があることをご了承ください。</p>
		<?php else: ?>
		<p class="c-paragraph">下記メニューからお問い合せの内容をお選びください。お問い合せの内容によっては、返信に時間がかかる場合や、お答えできない場合があることをご了承ください。</p>
		<?php endif; ?>
		<ul class="c-panel c-panel--col3">
			<?php
				$contactsArr = array(
					'posts_per_page' => -1 ,
					'order' => 'ASC' ,
					'order_by' => 'post_title' ,
					'post_type' => 'page' ,
					'post_parent' => $post -> ID
				);
				$contactPageData = query_posts( $contactsArr );
			?>
			<?php foreach( $contactPageData as $contactPage ): ?>
				<?php
					$contactName = $contactPage -> post_title;
					$contactPageId = $contactPage -> post_name;
					$contactPageLink = get_permalink( $contactPage->ID );
				?>
				<?php if( $contactPageId == 'ecd' ) {
					break;
				} ?>
				<li class="c-panel__item">
					<a href="<?php echo esc_url( $contactPageLink ); ?>">
						<div class="c-panel__inner">
							<div class="c-panel__text">
								<p class="c-panel__title">
									<?php echo $contactName ?>
								</p>
								<?php if( $contactPageId == 'neworder' ): ?>
								<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'neworder-intended-purpose' ) ) ); ?></p>
								<?php elseif( $contactPageId == 'production' ): ?>
								<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'production-intended-purpose' ) ) ); ?></p>
								<?php elseif( $contactPageId == 'recruit' ): ?>
								<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'recruit-intended-purpose' ) ) ); ?></p>
								<?php elseif( $contactPageId == 'mynumber' ): ?>
								<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'mynumber-intended-purpose' ) ) ); ?></p>
								<?php elseif( $contactPageId == 'inquiry' ): ?>
								<p class="c-paragraph"><?php echo nl2br( esc_html( get_field( 'inquiry-intended-purpose' ) ) ); ?></p>
								<?php endif; ?>
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
