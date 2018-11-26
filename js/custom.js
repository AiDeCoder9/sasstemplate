$('.mynavbar-search-icon').click(function(){
  $('.mynavbar-search-icon').addClass('text-primary');
  $('.mynavbar-search-input').toggle().addClass('d-block');
});
$('.mynavbar-activator').click(function(){
  $('.mynavbar-back').addClass('d-block');
});
$('.mynavbar-back-close').click(function(){
  $('.mynavbar-back').removeClass('d-block');
});

$(function() {
    // Smooth Scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    $('.nav-activator').click(function(){
      $('.nav-side').addClass('d-block');
    });
    $('#nav-dismiss').click(function(){
      $('.nav-side').removeClass('d-block');
    });
  });


  window.onscroll = function() {myFunction()};

var nav = document.getElementById("navbar-example2");
var sticky = nav.offsetTop;



window.sr=ScrollReveal();
// sr.reveal('.header',{
//     duration:2000,
//     origin:'top',
//     distance:'300px',
//     viewFactor:0.2
// }
// );



 

  

