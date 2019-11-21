import $ from 'jquery';

$(document).ready(function () {

	var option = {
		pages: [
		{
			'path': ['/jp/contact/neworder/'],
			'button': {
			'areaClassName': 'submit-button', // <p class="submit-button">[submit "送信する"]</p>
			'confirm': '<div id="to-confirm" class="p-form__button-wrap p-form__button-text--arrowright"><input class="button-confirm p-form__button p-form__button-text" type="button" value="確認画面へ" /></div>', // html
						'rewrite': '<div id="to-rewrite" class="p-form__button-wrap p-form__button-text--arrowleft"><input class="button-rewrite p-form__button p-form__button-text" type="button" value="入力内容を修正する" /></div>' // html
			}
		}
		],
		validates: {
			required: {
				before: '',
				after: 'は必須項目です。'
			},
			email: {
				match: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
				before: '',
				after: 'が正しい形式ではありません（メールアドレスに「.」を使用することはできません）'
			},
			tel: {
				match: /^(0[5-9]0[0-9]{8}|0[1-9][1-9][0-9]{7})$/,
				before: '',
				after: 'が正しい形式ではありません'
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
					if( $(this).hasClass('your-tel') ) {
						var telnumber = $('input[name="your-tel"]').val().replace(/[━.*‐.*―.*－.*\-.*ー.*\-]/gi,'');
					}
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
						if( $(this).hasClass('your-name') ) {
							$(this).parent().append('<p class="error-message">お名前は必須項目です。</p>');
						} else if ( $(this).hasClass('your-email') ) {
							$(this).parent().append('<p class="error-message">メールアドレスは必須項目です。</p>');
						} else if ( $(this).hasClass('your-company') ) {
							$(this).parent().append('<p class="error-message">社名・所属は必須項目です。</p>');
						} else if ( $(this).hasClass('your-tel') ) {
							$(this).parent().append('<p class="error-message">電話番号は必須項目です。</p>');
						}
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('エラーの項目があります。確認して下さい。'));
						}
						$(this).addClass('error');
					} else if (child.hasClass('wpcf7-validates-as-email') && (!child.val().match(option.validates.email.match))) {
						if( $(this).hasClass('your-email') ) {
							$(this).parent().append('<p class="error-message">メールアドレスが正しい形式ではありません。</p>');
						} 
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('エラーの項目があります。確認して下さい。'));
						}
						$(this).addClass('error');
					} else if (child.hasClass('wpcf7-validates-as-tel') && (!telnumber.match(option.validates.tel.match))) {
						if( $(this).hasClass('your-tel') ) {
							$(this).parent().append('<p class="error-message">電話番号が正しい形式ではありません。半角数字で入力して下さい。</p>');
						} 
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('エラーの項目があります。確認して下さい。'));
						}
						$(this).addClass('error');
					}
				} else if (child.get(0).tagName.toLowerCase() == 'textarea') {
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
						if( $(this).hasClass('your-message') ) {
							$(this).parent().append('<p class="error-message">ご依頼内容は必須項目です。</p>');
						}
						if( error.children().length == 0) {
							error.append($('<li class="error-summary">').text('エラーの項目があります。確認して下さい。'));
						}
						$(this).addClass('error');
					}
				}
			});

			if( $('input[type="submit"]').prop('disabled') ) {
				$('#consent-confirmation').after('<p class="error-message c-paragraph--center">個人情報保護方針への同意は必須となります。</p>');
				if( error.children().length == 0) {
					error.append($('<li class="error-summary">').text('エラーの項目があります。確認して下さい。'));
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
