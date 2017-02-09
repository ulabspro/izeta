$(document).ready(function() {
	$('.modalMinus').click(function () {
		var count = parseInt($(this).parents('.modal-basket-card-count').find('.modalCount').val());
		if (count != 1) {
			count--;
			$(this).parents('.modal-basket-card-count').find('.modalCount').val(count);
		}
	});
	$('.modalPlus').click(function () {
		var count = parseInt($(this).parents('.modal-basket-card-count').find('.modalCount').val());
		count++;
		$(this).parents('.modal-basket-card-count').find('.modalCount').val(count);
	});
});