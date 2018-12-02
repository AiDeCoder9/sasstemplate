

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$('#theme-active').hover(
  function(){
  $('.theme-setter').addClass('d-block');
}
);

$('.theme-setter').hover(function(){
  $('.theme-setter').addClass('d-block');
},function(){
  $('.theme-setter').removeClass('d-block');
});
$('.bar-task-dropdown').mouseleave(function(){
  $('.theme-setter').removeClass('d-block');
})





window.sr=ScrollReveal();
// sr.reveal('.header',{
//     duration:2000,
//     origin:'top',
//     distance:'300px',
//     viewFactor:0.2
// }
// );



 

  

