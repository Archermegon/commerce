

// top-js
$('.top3-part').mouseenter(function () { 
  $(this).find('ul').css('display','block')
 })
$('.top3-part').mouseleave(function () {
  $(this).find('ul').css('display', 'none')
})

var c = 1
$('.top5>ul>li:nth-child(2)').click(function () {
  if(c===1){
    $(this).find('div').addClass('search-active')
    c = 0
  }else{
    $(this).find('div').removeClass('search-active')
    c = 1
  }
})

var ind = 0
var w = $('.fea-pro>ul>li').width() + 11
var ml 
$('.controller>ul>li').click(function () { 
  ind = $(this).index()
  ml = -ind * w
  $('.fea-pro>ul').css('margin-left',ml)
  $(this).addClass('active-con')
  $(this).siblings().removeClass('active-con')
 })
$('.controller>a:nth-child(1)').click(function () { 
    if(ind === 0){
      ind = 7
    }else{
      ind --
    }
   ml = -ind * w
  $('.fea-pro>ul').css('margin-left', ml)
  $('.controller>ul>li').eq(ind).addClass('active-con')
  $('.controller>ul>li').eq(ind).siblings().removeClass('active-con')
 })
$('.controller>a:nth-child(2)').click(function () {
  if (ind == 7) {
    ind = 0
  }else{
    ind ++
  }
  ml = -ind * w
  $('.fea-pro>ul').css('margin-left', ml)
  $('.controller>ul>li').eq(ind).addClass('active-con')
  $('.controller>ul>li').eq(ind).siblings().removeClass('active-con')
})

var lan = 0
$('.lan>ul h3').click(function () {
  if(lan === 0){
    $(this).siblings().css('display','block')
    lan = 1
  }else{
    $(this).siblings().css('display', 'none')
    lan = 0
  }
  return false;
})
$('body').click(function () { 
  $('.text-lan').css('display', 'none')
 })
$(window).scroll(function () {
  var top = $(window).scrollTop()
  if(top >300){
    $('.topTo').stop().show(500)
  }
  if (top < 300) {
    $('.topTo').stop().hide(500)
  }
})


$('.topTo').click(function () { 
    $('body,html').stop().animate({ 'scrollTop': 0 }, 1000)
 })








