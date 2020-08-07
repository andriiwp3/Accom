//FORMS
function forms() {
	//FIELDS
	$('input,textarea').focus(function () {
		removeError($(this));
	});


	//MASKS//
	$.each($('input.phone'), function (index, val) {
		$(this).attr('type', 'tel');
		$(this).focus(function () {
			$(this).inputmask('+(999) 999 9999', {
				clearIncomplete: false, clearMaskOnLostFocus: true,
				"onincomplete": function () { addError($(this)); }
			});
			$(this).addClass('focus');
			$(this).parent().addClass('focus');
			$(this).parent().removeClass('err');
			$(this).removeClass('err');
		});
	});

}
forms();

function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	return r;
}

//VALIDATE FORMS
$('form button[type=submit]').click(function () {
	var er = 0;
	var form = $(this).parents('form');
	var ms = form.data('ms');
	$.each(form.find('.req'), function (index, val) {
		er += formValidate($(this));
	});
	if (er == 0) {

		if (ms != null && ms != '') {
			showMessageByClass(ms);

			return false;
		}
	} else {
		return false;
	}
});
function formValidate(input) {
	var er = 0;
	var form = input.parents('form');

	if (input.val() == '' || input.val() == input.attr('data-value') || input.hasClass('err')) {
		er++;
		addError(input);
	} else {
		removeError(input);
	}

	if (input.hasClass('phone')) {
		if (!input.inputmask("isComplete")) {
			er++;
			addError(input);
		} else {
			removeError(input);
		}
	}
	return er;
}
function addError(input) {
	input.addClass('err');
	input.parent().addClass('err');
	input.parent().find('.form__error').remove();
	if (input.hasClass('email')) {
		var error = '';
		if (input.val() == '' || input.val() == input.attr('data-value')) {
			error = input.data('error');
		} else {
			error = input.data('error');
		}
		if (error != null) {
			input.parent().append('<div class="form__error">' + error + '</div>');
		}
	} else {
		if (input.data('error') != null && input.parent().find('.form__error').length == 0) {
			input.parent().append('<div class="form__error">' + input.data('error') + '</div>');
		}
	}
	if (input.parents('.select-block').length > 0) {
		input.parents('.select-block').parent().addClass('err');
		input.parents('.select-block').find('.select').addClass('err');
	}
}
function removeError(input) {
	input.removeClass('err');
	input.parent().removeClass('err');
	input.parent().find('.form__error').remove();
}