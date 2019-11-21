		</div>

		<footer class="l-footer">
			<div class="l-footer__content">
				<div class="l-footer__item">
					<ul class="l-footer__info">
					<li class="l-footer__info-item"><a href="<?php echo esc_url( get_page_link( 323 ) ); ?>">POLICIES</a></li>
					<li class="l-footer__info-item"><a href="<?php echo esc_url( get_page_link( 139 ) ); ?>">SITE MAP</a></li>
					<li class="l-footer__info-item"><a href="<?php echo esc_url( get_page_link( 353 ) ); ?>">CONTACT</a></li>
					</ul>
				</div>
				<div class="l-footer__item">
					<ul class="l-footer__sns">
					<li class="l-footer__sns-item"><a href="http://www.facebook.com/AOIPro.Inc" target="_blank" rel="noopener"><img src="<?php echo network_home_url(); ?>/assets/img/icons/icon_sns_fb.svg" alt="facebook"></a></li>
					<li class="l-footer__sns-item"><a href="https://twitter.com/aoipro" target="_blank" rel="noopener"><img src="<?php echo network_home_url(); ?>/assets/img/icons/icon_sns_twitter.svg" alt="Twitter"></a></li>
					<li class="l-footer__sns-item"><a href="https://www.instagram.com/aoipro/" target="_blank" rel="noopener"><img src="<?php echo network_home_url(); ?>/assets/img/icons/icon_sns_ig.svg" alt="Instagram"></a></li>
					<li class="l-footer__sns-item"><a href="https://www.youtube.com/channel/UCRFyB6laqhaL6Dq9--Vkf7A" target="_blank" rel="noopener"><img src="<?php echo network_home_url(); ?>/assets/img/icons/icon_sns_youtube.svg" alt="YouTube"></a></li>
					</ul>
				</div>
				<div class="l-footer__item">
					<ul class="l-footer__link">
					<li class="l-footer__link-item"><a href="http://aoityo.com/ja/index.html" target="_blank" rel="noopener"><img src="<?php echo network_home_url(); ?>/assets/img/logo_aoityo.svg" alt="AOI TYO Holdings" class="l-footer__link-image l-footer__link-image--tyo"></a></li>
					</ul>
				</div>
				<div class="l-footer__copyright">
					<small class="l-footer__copyright-text">© AOI Pro. Inc. All rights reserved.</small>
				</div>
			</div>
		</footer>
		<div id="cookie-law-info-bar" style="background-color: rgb(255, 255, 255); color: rgb(34, 34, 34); font-family: Helvetica, sans-serif; bottom: 0px; position: fixed; display: block;">
			<span>This website uses cookies to improve your experience.  <a href="<?php echo esc_url( get_page_link( 333 ) ); ?>" id="CONSTANT_OPEN_URL" class="cli-plugin-main-link" style="display: inline-block; color: rgb(34, 34, 34);">Read More</a> <a data-cli_action="accept" id="cookie_action_close_header" class="medium cli-plugin-button cli-plugin-main-button cookie_action_close_header cli_action_button" style="display: inline-block; margin: 5px; color: rgb(255, 255, 255); background-color: rgb(34, 34, 34);">Accept</a> </span>
		</div>
		<?php if( is_single() ): ?>
			<div id="fb-root"></div>
			<script async defer crossorigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v4.0"></script>
		<?php endif; ?>
		<?php wp_footer(); ?>
	</body>
</html>
