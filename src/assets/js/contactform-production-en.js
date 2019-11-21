import $ from 'jquery';

$(document).ready(function () {

	var option = {
		pages: [
			{
				'path': ['/en/contact/production/'],
				'button': {
					'areaClassName': 'submit-button', // <p class="submit-button">[submit "送信する"]</p>
					'confirm': '<div id="to-confirm" class="p-form__button-wrap p-form__button-text--arrowright"><input class="button-confirm p-form__button p-form__button-text" type="button" value="To Confirmation Screen" /></div>', // html
					'rewrite': '<div id="to-rewrite" class="p-form__button-wrap p-form__button-text--arrowleft"><input class="button-rewrite p-form__button p-form__button-text" type="button" value="Correct Input" /></div>' // html
				}
			}
		],
		validates: {
			required: {
				before: '',
				after: ' is a required field'
			},
			email: {
				match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				before: '',
				after: ' is not in the correct format (You cannot use "." in the email address)'
			}
		}
	};

	var flg = false;
	for (var i in option.pages) {
		var page = option.pages[i];
		for (var j in page.path) {
			var path = page.path[j];
			if (path == document.location.pathname) {
				flg = true;
				option.page = page;
				break;
			}
		}
	}
	if (!flg) return;

	$('form.wpcf7-form').each(function () {
		$(this).find('.wpcf7-form-control-wrap').each(function () {

			var child = $(this).children(0);

			if (child.hasClass('wpcf7-text')) {$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().text($(this).val());
				}).change();
			} else if (child.get(0).tagName.toLowerCase() == 'textarea') {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().html($('<span>').text($(this).val()).html().replace(/\n/g, '<br />'));
				}).change();
			}
		});

		$('.wrap_error').prepend($('<ul>').addClass('error-messages p-form__error-box').hide());

		$(this).find('.' + option.page.button.areaClassName).addClass('buttons-area');

		$(this).find('.buttons-area').prepend(option.page.button.rewrite).after($('<p>').addClass('buttons-area-confirm').html(option.page.button.confirm));

		$(this).addClass('wpcf7-form-mode-edit');
		$(this).find('.wpcf7-form-control-wrap-confirm').hide();
		$(this).find('.wpcf7-form-control-wrap').show();
		$(this).find('.buttons-area').hide();
		$(this).find('.buttons-area-confirm').show();

		$(this).submit(function () {
			$(this).find('.buttons-area input[type="submit"]').hide();
		});

		$(this).find('.buttons-area .button-rewrite').click(function () {
			var form = $(this).parents('form.wpcf7-form');
			form.addClass('wpcf7-form-mode-edit').removeClass('wpcf7-form-mode-confirm');
			form.find('.buttons-area input[type="submit"]').show();
			form.find('.wpcf7-response-output').empty().removeClass('wpcf7-mail-sent-ok');
			form.find('.wpcf7-form-control-wrap-confirm').hide();
			form.find('.wpcf7-form-control-wrap').show();
			form.find('.buttons-area').hide();
			form.find('.buttons-area-confirm').show();
			$('html,body').animate({ scrollTop: form.offset().top - 30 }, 'slow', null);
			return false;
		});

		$(this).find('.buttons-area-confirm .button-confirm').click(function () {
			var form = $(this).parents('form.wpcf7-form')
				, error = form.find('ul.error-messages');
			$('.error-message').remove();
			error.empty();
			form.find('table tr').removeClass('error');
			form.find('.wpcf7-form-control-wrap').each(function () {
				var child = $(this).children(0)
					, title = child.parents('tr').find('th').text();
				if (title.length == 0) {
					title = child.parents('p').find('.title').text();
				}
				if (child.hasClass('wpcf7-text')) {
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
						if( $(this).hasClass('your-name') ) {
							$(this).parent().append('<p class="error-message">Name is a required field.</p>');
						} else if ( $(this).hasClass('your-email') ) {
							$(this).parent().append('<p class="error-message">E-mail is a required field.</p>');
						} else if ( $(this).hasClass('your-company') ) {
							$(this).parent().append('<p class="error-message">Company Name is a required field.</p>');
						} else if ( $(this).hasClass('your-country') ) {
							$(this).parent().append('<p class="error-message">Country is a required field.</p>');
						}
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('There is an error item. please check.'));
						}
						$(this).addClass('error');
					} else if (child.hasClass('wpcf7-validates-as-email') && (!child.val().match(option.validates.email.match))) {
						if( $(this).hasClass('your-email') ) {
							$(this).parent().append('<p class="error-message">The email address is not in the correct format.</p>');
						} 
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('There is an error item. please check.'));
						}
						$(this).addClass('error');
					}
				} else if (child.get(0).tagName.toLowerCase() == 'textarea') {
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
						if( $(this).hasClass('your-message') ) {
							$(this).parent().append('<p class="error-message">Message is a required field.</p>');
						}
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('There is an error item. please check.'));
						}
						$(this).addClass('error');
					}
				}
			});

			if( $('input[type="submit"]').prop('disabled') ) {
				$('#consent-confirmation').after('<p class="error-message c-paragraph--center">Consent to the privacy policy is mandatory.</p>');
				if( error.children().length == 0) {
					error.append($('<li class="error-summary">').text('There is an error item. please check.'));
				}
			}

			if (error.children().length > 0) {
				error.show();
			} else {
				form.addClass('wpcf7-form-mode-confirm').removeClass('wpcf7-form-mode-edit');
				form.find('.wpcf7-form-control-wrap').hide();
				form.find('.wpcf7-form-control-wrap-confirm').show();
				form.find('.buttons-area-confirm').hide();
				form.find('.buttons-area').show();
			}
			$('html,body').animate({ scrollTop: form.offset().top - 80 }, 'slow', null);
			return false;
		});
	});
});

$(document).ready(function () {
	$("form").submit(function () {
		var val = $("input[type=submit][clicked=true]").val();
		$('.button-rewrite').css('display', 'none');
	});
	$("form input[type=submit]").click(function () {
		$("input[type=submit]", $(this).parents("form")).removeAttr("clicked");
		$(this).attr("clicked", "true");
	});
});

$(document).ready(function () {
	$(".wpcf7-submit")
		.addClass('p-form__button p-form__button-text p-form__button--submit')
		.wrap( '<div id="to-submit" class="p-form__button-wrap p-form__button-text--arrowright"></div>' );
});
