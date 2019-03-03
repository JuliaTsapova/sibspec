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

if(toElem){
self.scroll({
 top: toElem.offset().top,
 left: 0,
  behavior: 'smooth'
});
}

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

