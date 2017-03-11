$(document).ready(function(){

  // For Pagination color change
  
  var prevBtnindex1 = $('.pagination li:nth-child(2)').attr('data-index1')
  var prevBtnindex2 = $('.pagination li:nth-child(2)').attr('data-index2')
  var lastBtnindex1 = $('.pagination li:nth-child(2)').attr('data-index1')
  var lastBtnindex2 = $('.pagination li:nth-child(2)').attr('data-index2')

  console.log(prevBtnindex1)

  $('.pagination li').click(function(){
      $('.pagination li').removeClass('active') 
    $(this).addClass('active')
  })

});