if(screen.width >= 1024) {
  $('.more-hidden').addClass('desktop-more');
  $('.kran .desktop-more').css('border-radius', '0');
  $('.gruz-evakuator .desktop-more').css('border-radius', '0');
  $('.gruz-evakuator .desktop-more').css('background-color', '#fff');
}

$('.more').click(function(event) {
  // event.preventDefault();
  // console.log($(event.target).parent().find('.more-hidden'))
  
  $(this).next().slideDown(1000);
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