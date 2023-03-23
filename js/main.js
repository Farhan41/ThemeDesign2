// alert('Assalamu Alaikum');

(function() {

  'use strict';

  // preloader
  $(window).on('load', function() {
      $('.loader').fadeOut('slow');
  });


  // navbar toggler icon
$(document).on("click",".navbar-toggler",function(e){
  $(this).parent().siblings().find('i').removeClass('fa-x')
$(this).find('i').toggleClass('fa-x')
});

})();
  