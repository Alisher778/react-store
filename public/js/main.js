$(document).ready(function(){

  $('.pagination li:nth-child(2)').attr('class', 'active');
  
  // Search bar -------------------------------------------
  $('.fa-search').click(function(){
    $(this).hide();
    $('.search-wrapper').show();
    $('.search-wrapper input').focus();
    $('.search-wrapper').focusout(function(){
      $(this).hide();
      $('.fa-search').show()
    })
  })

  // -------- Navbar on hover media-query--------------------
  $('#menu-bar').hover(function(){
    $('.nav-list, .user-bar').show(function(e){
      $('nav').on('click mouseleave', function(){
        $('.nav-list, .user-bar').hide()
      })
    });
  })
});