//jQuery begin
$(document).ready(function() {

});
$(window).load(function() {
  //выпадающее меню формы
  $("input#select").on("click", function(){
    $(this).siblings(".order__list").toggle();
  });
  //выбранный пункт выпадающего меню
  $(".order__item").on("click", function(){
    $(this).closest('.order__input-wrap').find('input#select').val($(this).text());
    $(this).closest('.order__list').hide();
  });

  //trigger main-nav
  $(".main-nav__trigger").on("click", function(){
    $(this).closest('.main-nav').toggleClass('main-nav--open');
  });

});
//jQuery end
// (function($){
// })(jQuery);