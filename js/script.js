if(screen.width >= 1024) {
  $('.more-hidden').addClass('desktop-more');
  $('.kran .desktop-more').css('border-radius', '0');
  $('.gruz-evakuator .desktop-more').css('border-radius', '0');
  $('.gruz-evakuator .desktop-more').css('background-color', '#fff');
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      nav: false,
      items: 3,
      loop: true,
      margin: 10,
      video: true
      // autoWidth: true
    });
  });
}

$('.more').click(function(event) {
    $(this).next().slideToggle("slow");
});

$('.close-mh').click(function(event) {
  $(this).parent().slideToggle("slow");
});

var scrollToElem = function(fromElem, toElem) {
  fromElem.on( 'click touch', function(){ 
    goToElement(toElem.offset().top)
  


    /*var dest = toElem; // получаем направление
    if(dest !== undefined && dest !== '') { // проверяем существование
        $('html').animate({ 
            scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
        }, 1000 // скорость прокрутки
        );
    }//*/
    return false;
});
};

scrollToElem($('.scroll-kran'), $('.kran'));
scrollToElem($('.scroll-evakuator'), $('.gruz-evakuator'));
scrollToElem($('.scroll-samogruz'), $('.samogruz'));

function goToElement(Y) {

  var direction = 20;
  if(window.scrollY > Y){
    direction = -20;
  }

  if(Math.abs(window.scrollY - Y) > 50){
    window.scrollTo(0, window.scrollY + direction);
    setTimeout("goToElement("+Y+")", 10);
  }else{
    window.scroll({
      top: Y,
      left: 0,
       behavior: 'smooth'
     });
  }

}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    margin: 10,
    video: true
    // autoWidth: true
  });
});