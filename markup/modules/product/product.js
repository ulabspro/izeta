$(document).ready(function () {
  $('.product-small-images img').click(function () {
    var position = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');

    $('.product-big-image img').eq(position).addClass('active').siblings().removeClass('active');
  });
});
  