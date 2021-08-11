$(document).ready(function() {
    $('.drawer').drawer();
  });

  jQuery('a[href^="#"]').on('click', function() {
     
    var header = jQuery('.header').innerHeight();
    var id = jQuery(this).attr('href');
    var position = 0;
    if ( id != '#') {
      var position = jQuery(id).offset().top - header;

    }
    // console.log(id );
    // console.log(position);
    jQuery('html,body').animate({
      scrollTop: position
    },
    300);
});

$(".page-top").hide();

  $(window).scroll(function() {
    if($(this).scrollTop() > 80 ) {
      $(".page-top").fadeIn();
    }else {
      $(".page-top").fadeOut();
    }
  });

  $(".page-top").on('click', function(){
    $("body,html").animate({scrollTop: 0}, 500);
    return false;
  });