<?php
/*
Template Name: page-profile
*/
?>

<?php get_header(); ?>

<main role="main" class="l-main">
	<div class="l-main__content">
		<div class="c-heading c-heading--page-title">
			<h2 class="c-heading__text">ABOUT</h2>
		</div>
	</div>
	<div class="l-local-nav">
		<div class="l-local-nav__content">
			<ul class="l-local-nav__list">
				<?php $url = $_SERVER[ 'REQUEST_URI' ]; ?>
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<li class="l-local-nav__list-item"><a href="<?php echo esc_url( get_page_link( 297 ) ); ?>">事業紹介</a></li>
				<li class="l-local-nav__list-item <?php if( is_page( 'profile' ) ) echo esc_attr( 'l-local-nav__list-item--current' ); ?>"><a href="<?php echo esc_url( get_page_link( 300 ) ); ?>">会社情報</a></li>
				<?php else: ?>
				<li class="l-local-nav__list-item"><a href="<?php echo esc_url( get_page_link( 15 ) ); ?>">Business</a></li>
				<li class="l-local-nav__list-item <?php if( is_page( 'profile' ) ) echo esc_attr( 'l-local-nav__list-item--current' ); ?>"><a href="<?php echo esc_url( get_page_link( 20 ) ); ?>">Corporate Information</a></li>
				<?php endif; ?>
			</ul>
		</div>
	</div>
	<div class="l-main__content">
		<?php if ( have_posts() ) : ?>
		<?php while ( have_posts() ) : ?>
		<?php the_post(); ?>
		<section>
			<?php if( strpos( $url, 'jp' ) !== false ): ?>
			<h3 class="c-heading c-heading--lv3">概要</h3>
			<?php else: ?>
			<h3 class="c-heading c-heading--lv3">Outline</h3>
			<?php endif; ?>
			<div class="p-about__overview">
				<div class="p-about__overview-column">
					<dl class="p-about__overview-item">
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">社名</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Corporate name</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'company-name' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">設立</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Established</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'establishment' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">代表者</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Representative Director & President</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'president' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">役員</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Board Members</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<?php $rows = get_field( 'board-member' ); ?>
							<?php if( $rows ): ?>
							<?php foreach( $rows as $row ): ?>
							<dl class="p-about__overview-definition">
								<dt class="p-about__overview-definition-team">
									<?php echo esc_html( $row[ 'position' ] ); ?>
								</dt>
								<dd class="p-about__overview-definition-description">
									<?php if( strpos( $url, 'jp' ) !== false ): ?>
									<?php echo esc_html( $row[ 'chinese-characters-name' ] ); ?>（<?php echo esc_html( $row[ 'furigana-name' ] ); ?>）
									<?php else: ?>
									<?php echo esc_html( $row[ 'name' ] ); ?>
									<?php endif; ?>
								</dd>
							</dl>
							<?php endforeach; ?>
							<?php endif; ?>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">資本金</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Capital</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html ( get_field( 'capital' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">売上高</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Sales</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'amount-of-sales' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">社員数</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Employees</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
							<?php echo nl2br( esc_html( get_field( 'number-of-employees' ) ) ); ?>
							</p>
						</dd>
					</dl>
				</div>
				<div class="p-about__overview-column">
					<dl class="p-about__overview-item">
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">事業内容</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Production</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'business-description' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">部門</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Departments</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'department' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">所在地</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Location</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<?php $rows = get_field( 'location' ); ?>
							<?php if( $rows ): ?>
							<?php foreach( $rows as $row ): ?>
							<dl class="p-about__overview-definition p-about__overview-definition--small">
								<dt class="p-about__overview-definition-team"><?php echo esc_html( $row[ 'town-name' ] ); ?></dt>
								<dd class="p-about__overview-definition-description">
									<?php if( strpos( $url, 'jp' ) !== false ): ?>
									<?php echo esc_html( $row[ 'postal-code' ] ); ?>　<?php echo esc_html( $row[ 'detail-address' ] ); ?><br>
									<a href="<?php echo esc_url( $row[ 'url' ] ) ?>">（アクセス）</a>
									<?php else: ?>
									<?php echo esc_html( $row[ 'detail-address' ] ); ?><br>
									Tel. <?php echo esc_html( $row[ 'tel' ] ); ?><br>
									<a href="<?php echo esc_url( $row[ 'url' ] ); ?>" target="_blank">Access details</a>
									<?php endif; ?>
								</dd>
							</dl>
							<?php endforeach; ?>
							<?php endif; ?>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">主要取引先</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Main Customer</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'main-customer' ) ) ); ?>
							</p>
						</dd>
						<?php if( strpos( $url, 'jp' ) !== false ): ?>
						<dt class="p-about__overview-heading">株主</dt>
						<?php else: ?>
						<dt class="p-about__overview-heading">Shareholder</dt>
						<?php endif; ?>
						<dd class="p-about__overview-body">
							<p class="p-about__overview-text">
								<?php echo nl2br( esc_html( get_field( 'shareholder' ) ) ); ?>
							</p>
						</dd>
					</dl>
				</div>
			</div>
		</section>
	</div>
	<div class="l-main__content l-main__content--full">
		<section>
			<div class="l-main__content">
				<?php if( strpos( $url, 'jp' ) !== false ): ?>
				<h3 class="c-heading c-heading--lv3">沿革</h3>
				<?php else: ?>
				<h3 class="c-heading c-heading--lv3">History</h3>
				<?php endif; ?>
			</div>
			<div class="p-about__history" id="js-about-history">
				<div class="p-about__history-wrap" style="left: 0px;">
					<?php $rows = get_field( 'history' ); ?>
					<?php if( $rows ): ?>
						<?php $rows = array_reverse( $rows ); ?>
						<?php
						$yearsKeyData = [];
						foreach( $rows as $row ) {
							$year = $row['year'];
							$yearsKeyData[$year][] = $row;
						}
						?>
						<?php foreach ( $yearsKeyData as $year => $rows ): ?>
							<section class="p-about__history-item">
								<div class="p-about__history-heading">
									<h4 class="p-about__history-year">
									<?php echo esc_html( $year ); ?>
									</h4>
								</div>
								<ul class="p-about__history-episode-list">
									<?php foreach ( $rows as $row ): ?>
									<li class="p-about__history-episode">
										<p class="p-about__history-month">
											<?php echo esc_html( $row['month'] ) ?>
										</p>
										<p class="p-about__history-text">
											<?php echo nl2br( esc_html( $row['event'] ) ) ?>
										</p>
									</li>
									<?php endforeach; ?>
								</ul>
							</section>
						<?php endforeach; ?>
					<?php endif; ?>
				</div>
			</div>
		</section>
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
