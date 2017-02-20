jQuery(document).ready(function($) {
  
$('.btnAddCart').on('click', function(event) {
    event.preventDefault();
  $( "#AddToCart-product-template" ).trigger( "click" );
});

// tabs pagew products
$('ul.tabs').each(function(){
      var active, content, links = $(this).find('a');
      active = links.first().addClass('active');
      content = $(active.attr('href'));
      links.not(':first').each(function () {
        $($(this).attr('href')).hide();
      });
      $(this).find('a').click(function(e){
        active.removeClass('active');
        content.hide();
        active = $(this);
        content = $($(this).attr('href'));
        active.addClass('active');
        content.show();
        return false;
      });
});

$('#add-review').on('click', function (event) { // если в href начинается с # или ., то ловим клик
    event.preventDefault();
$( "#box-reviews a" ).trigger( "click" );
var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
$('html, body').animate({
scrollTop: $(scroll_el).offset().top
}, 1100); // анимируем скроолинг к элементу scroll_el
}
return false; // выключаем стандартное действие
});


 // $('.site-nav--has-dropdown').hover(function () {
 //     $(this).addClass('active-menu').find('.site-nav__dropdown').stop(true, true).delay(300).fadeIn(200);
 // }, function() {
 //     $(this).removeClass('active-menu').find('.site-nav__dropdown').stop(true, true).delay(300).fadeOut(200);
 // });

    if($('body').hasClass('template-collection')){
        $('#collection-description').readmore({
            collapsedHeight: 110,
            speed: 200,
            lessLink: '<a href="#">Read less</a>',
        });
    }

    //first block menu(Holle)
    var link = document.querySelectorAll('#SiteNavLabel-holle ul li a');
    var newItem = $.map(link, function (item, idx) {

        if(idx == 0 || idx == 5){
            $(item).replaceWith($(item).text()).css('width', '100px');
            return item;
        }

    });

});


