jQuery(function($){

  // add-open-class
  $('.burger-menu').click(function(){
   if($(this).parent().is('.menu-burger--opened')){
     $(this).parent().removeClass('menu-burger--opened');
     $('body').removeClass('menu-open-wrapper-page');
   }else{
     $(this).parent().addClass('menu-burger--opened');
     $('body').addClass('menu-open-wrapper-page');
   }
  });

  // add-open-class
  $('.menu-item__link_dd-open').click(function(){
   if($(this).parent().is('.menu-item_dd-opened')){
    $(this).parent().removeClass('menu-item_dd-opened');
   }else{
    $(this).parent().addClass('menu-item_dd-opened');
   }
  });

  // add-open-class
  $('.accordion-item__tt_click').click(function(){
   if($(this).parent().is('.accordion-item_opened')){
    $(this).parent().removeClass('accordion-item_opened');
   }else{
    $('.accordion-item').removeClass('accordion-item_opened');
    $(this).parent().addClass('accordion-item_opened');
   }
  });

  //scroll to slow
  $("a.scrollto").click(function () {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
      return false;
  });

});

//particlesJS
particlesJS('.particles-js');

particlesJS('.particles-js-step2');

particlesJS(".particles-js-step3", {
  "particles": {
    "number": {
      "value": 80
    },
    "color": {
      "value": "#e9f4fd"
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 12,
      "random": true
    },
    "line_linked": {
      "color": "#e9f4fd",
      "width": 2
    }
  }

});