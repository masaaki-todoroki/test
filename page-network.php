<?php
/*
Template Name: page-network
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
	<?php if( have_posts() ) : ?>
	<?php while( have_posts() ) : ?>
	<?php the_post(); ?>
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">NETWORK</h2>
		</div>
	</div>
	<div class="l-main__content l-main__content--full">
		<div class="c-lead">
			<div class="c-lead__image">
				<img src="<?php echo esc_attr( get_field( 'lead-image-pc' ) ); ?>" alt="">
				<img src="<?php echo esc_attr( get_field( 'lead-image-sp' ) ); ?>" alt="">
			</div>
			<div class="c-lead__content">
				<p class="c-lead__text"><?php echo nl2br( esc_html( get_field( 'lead-title' ) ) ); ?></p>
			</div>
		</div>
	</div>
	<div class="l-main__content">
		<p class="c-paragraph c-paragraph--center">
			<?php echo nl2br( esc_html( get_field( 'lead-text' ) ) ); ?>
		</p>
		<div class="p-network">
			<ul class="p-network__tablist" role="tablist">
				<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="p-network__tabitem" aria-controls="tab-01" aria-selected="true" role="tab"><span class="p-network__tabtext">国内ネットワーク</span></li>
				<li class="p-network__tabitem" aria-controls="tab-02" aria-selected="false" role="tab"><span class="p-network__tabtext">海外ネットワーク</span></li>
				<li class="p-network__tabitem" aria-controls="tab-03" aria-selected="false" role="tab"><span class="p-network__tabtext">すべて</span></li>
				<?php else: ?>
				<li class="p-network__tabitem" aria-controls="tab-01" aria-selected="true" role="tab"><span class="p-network__tabtext">Domestic Network</span></li>
				<li class="p-network__tabitem" aria-controls="tab-02" aria-selected="false" role="tab"><span class="p-network__tabtext">Overseas Network</span></li>
				<li class="p-network__tabitem" aria-controls="tab-03" aria-selected="false" role="tab"><span class="p-network__tabtext">All</span></li>
				<?php endif; ?>
			</ul>
			<div class="p-network__content" aria-hidden="false" id="tab-01" role="tabpanel">
				<ul class="p-network__list">
					<?php $domestic_group_company_rows = get_field( 'network-domestic-group-company' ); ?>
					<?php if( $domestic_group_company_rows ): ?>
					<?php foreach( $domestic_group_company_rows as $domestic_group_company_row ): ?>
					<li class="p-network__list-item">
						<div class="p-network__image">
							<img src="<?php echo $domestic_group_company_row[ 'logo' ]; ?>" alt="">
						</div>
						<div class="p-network__name">
							<a href="<?php echo $domestic_group_company_row[ 'url' ]; ?>" target="_blank">
								<?php echo $domestic_group_company_row[ 'name' ]; ?>
							</a>
						</div>
						<p class="p-network__overview"><?php echo $domestic_group_company_row[ 'overview' ]; ?></p>
						<p class="p-network__description"><?php echo $domestic_group_company_row[ 'description' ]; ?></p>
						<figure class="p-network__work">
							<img src="<?php echo esc_attr( $domestic_group_company_row[ 'service-image' ] ); ?>" alt="" class="p-network__work-image">
							<figcaption class="p-network__work-caption"><?php echo esc_html( $domestic_group_company_row[ 'service-text' ] ); ?></figcaption>
						</figure>
					</li>
					<?php endforeach; ?>
					<?php endif; ?>
				</ul>
			</div>
			<div class="p-network__content" aria-hidden="true" id="tab-02" role="tabpanel">
				<ul class="p-network__list">
					<?php $overseas_group_company_rows = get_field( 'network-overseas-group-company' ); ?>
					<?php if( $overseas_group_company_rows ): ?>
					<?php foreach( $overseas_group_company_rows as $overseas_group_company_row ): ?>
					<li class="p-network__list-item">
						<div class="p-network__image">
							<img src="<?php echo esc_attr( $overseas_group_company_row[ 'logo' ] ); ?>" alt="">
						</div>
						<div class="p-network__name">
							<a href="<?php echo esc_url( $overseas_group_company_row[ 'url' ] ); ?>" target="_blank">
								<?php echo esc_html( $overseas_group_company_row[ 'name' ] ); ?>
							</a>
						</div>
						<p class="p-network__overview"><?php echo esc_html( $overseas_group_company_row[ 'overview' ] ); ?></p>
						<p class="p-network__description"><?php echo esc_html( $overseas_group_company_row[ 'description' ] ); ?></p>
						<figure class="p-network__work">
							<img src="<?php echo esc_attr( $overseas_group_company_row[ 'service-image' ] ); ?>" alt="" class="p-network__work-image">
							<figcaption class="p-network__work-caption"><?php echo esc_html( $overseas_group_company_row[ 'service-text' ] ); ?></figcaption>
						</figure>
					</li>
					<?php endforeach; ?>
					<?php endif; ?>
				</ul>
			</div>
			<div class="p-network__content" aria-hidden="true" id="tab-03" role="tabpanel">
				<ul class="p-network__list">
					<?php $domestic_group_company_rows = get_field( 'network-domestic-group-company' ); ?>
					<?php if( $domestic_group_company_rows ): ?>
						<?php foreach( $domestic_group_company_rows as $domestic_group_company_row ): ?>
						<li class="p-network__list-item">
							<div class="p-network__image">
								<img src="<?php echo esc_attr( $domestic_group_company_row[ 'logo' ] ); ?>" alt="">
							</div>
							<div class="p-network__name">
								<a href="<?php echo esc_url( $domestic_group_company_row[ 'url' ] ); ?>" target="_blank">
									<?php echo esc_html( $domestic_group_company_row[ 'name' ] ); ?>
								</a>
							</div>
							<p class="p-network__overview"><?php echo esc_html( $domestic_group_company_row[ 'overview' ] ); ?></p>
							<p class="p-network__description"><?php echo esc_html( $domestic_group_company_row[ 'description' ] ); ?></p>
							<figure class="p-network__work">
								<img src="<?php echo esc_attr( $domestic_group_company_row[ 'service-image' ] ); ?>" alt="" class="p-network__work-image">
								<figcaption class="p-network__work-caption"><?php echo esc_html( $domestic_group_company_row[ 'service-text' ] ); ?></figcaption>
							</figure>
						</li>
						<?php endforeach; ?>
					<?php endif; ?>
					<?php $overseas_group_company_rows = get_field( 'network-overseas-group-company' ); ?>
					<?php if( $overseas_group_company_rows ): ?>
						<?php foreach( $overseas_group_company_rows as $overseas_group_company_row ): ?>
						<li class="p-network__list-item">
							<div class="p-network__image">
								<img src="<?php echo esc_attr( $overseas_group_company_row[ 'logo' ] ); ?>" alt="">
							</div>
							<div class="p-network__name">
								<a href="<?php echo esc_url( $overseas_group_company_row[ 'url' ] ); ?>" target="_blank">
									<?php echo esc_html( $overseas_group_company_row[ 'name' ] ); ?>
								</a>
							</div>
							<p class="p-network__overview"><?php echo esc_html( $overseas_group_company_row[ 'overview' ] ); ?></p>
							<p class="p-network__description"><?php echo esc_html( $overseas_group_company_row[ 'description' ] ); ?></p>
							<figure class="p-network__work">
								<img src="<?php echo esc_attr( $overseas_group_company_row[ 'service-image' ] ); ?>" alt="" class="p-network__work-image">
								<figcaption class="p-network__work-caption"><?php echo esc_html( $overseas_group_company_row[ 'service-text' ] ); ?></figcaption>
							</figure>
						</li>
						<?php endforeach; ?>
					<?php endif; ?>
				</ul>
			</div>
		</div>
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
