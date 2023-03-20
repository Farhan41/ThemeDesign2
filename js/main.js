// alert('Assalamu Alaikum');

// navbar toggler icon
$(document).on("click",".navbar-toggler",function(e){
    $(this).parent().siblings().find('i').removeClass('fa-x')
  $(this).find('i').toggleClass('fa-x')
});