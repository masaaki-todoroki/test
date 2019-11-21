import $ from 'jquery';

$(document).ready(function () {

	var option = {
		pages: [
			{
				'path': ['/jp/contact/ecd/'],
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

			if (child.hasClass('wpcf7-text')) {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().text($(this).val());
				}).change();
			} else if (child.get(0).tagName.toLowerCase() == 'textarea') {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().html($('<span>').text($(this).val()).html().replace(/\n/g, '<br />'));
				}).change();
			} else if (child.hasClass('wpcf7-number')) {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().text($(this).val());
				}).change();
			} else if (child.hasClass('wpcf7-select')) {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.change(function () {
					$(this).parent().next().text($(this).find('option[value="' + $(this).val() + '"]').text());
				}).change();
			} if (child.hasClass('wpcf7-radio')) {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.find('input[type="radio"]').change(function () {
					$(this).parents('.wpcf7-form-control-wrap').find('input[type="radio"]').each(function () {
						if (this.checked) {
							$(this).parents('.wpcf7-form-control-wrap').next().text($(this).parent().text());
						}
					});
				}).change();
			} if (child.hasClass('wpcf7-checkbox')) {
				$(this).after($('<span>').addClass('wpcf7-form-control-wrap-confirm'));
				child.find('input[type="checkbox"]').change(function () {
					var a = [];
					$(this).parents('.wpcf7-form-control-wrap').find('input[type="checkbox"]').each(function () {
						if (this.checked) {
							a.push($('<span>').text($(this).parent().text()).html());
						}
					});
					$(this).parents('.wpcf7-form-control-wrap').next().html(a.join('<br />'));
				}).change();
			}
		});

		$('.wrap_error').prepend($('<ul>').addClass('error-messages c-list c-list--disc').hide());

		$(this).find('.' + option.page.button.areaClassName).addClass('buttons-area');

		$(this).find('.buttons-area').prepend(option.page.button.rewrite).after(
			$('<p>').addClass('buttons-area-confirm').html(option.page.button.confirm)
		);

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
					error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
					$(this).addClass('error');
					} else if (child.hasClass('wpcf7-validates-as-email') && (!child.val().match(option.validates.email.match))) {
					error.append($('<li>').text(option.validates.email.before + title.replace('必須', '') + option.validates.email.after));
					$(this).addClass('error');
					}
				} else if (child.get(0).tagName.toLowerCase() == 'textarea') {
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
					error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
					$(this).addClass('error');
					}
				} else if (child.hasClass('wpcf7-number')) {
					if (child.hasClass('wpcf7-validates-as-required') && child.val().length == 0) {
					error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
					$(this).addClass('error');
					}
				} else if (child.hasClass('wpcf7-select')) {
					if (child.hasClass('wpcf7-validates-as-required') && ((!child.val()) || child.val().length == 0 || child.val() == '---')) {
					error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
					$(this).addClass('error');
					}
				} if (child.hasClass('wpcf7-radio')) {
					if (child.hasClass('wpcf7-validates-as-required')) {
					var flg = false;
					$(this).find('input[type="radio"]')
						.each(function () {
						if (this.checked) {
							flg = true;
							return;
						}
						});
					if (!flg) {
						error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
						$(this).addClass('error');
					}
					}
				} if (child.hasClass('wpcf7-checkbox')) {
					if (child.hasClass('wpcf7-validates-as-required')) {
					var flg = false;
					$(this).find('input[type="checkbox"]')
						.each(function () {
						if (this.checked) {
							flg = true;
							return;
						}
						});
					if (!flg) {
						error.append($('<li>').text(option.validates.required.before + title.replace('必須', '') + option.validates.required.after));
						$(this).addClass('error');
					}
					}
				}
				});
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

