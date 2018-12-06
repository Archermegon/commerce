
var n = 0
$('.pic-small>li').click(function () { 
   n = $(this).index()
  $(this).find('a>div').addClass('active-white')
  $(this).siblings().find('a>div').removeClass('active-white')
  $('.pro-big>img').eq(n).siblings('img').css('opacity', 0)
  $('.pro-big>img').eq(n).css('opacity',1)
 })

 $('.btu>.pre').click(function () { 
     if(n===0){
       n = 2       
     }else{
       n --
     }
   $('.pic-small>li').eq(n).find('a>div').addClass('active-white')
   $('.pic-small>li').eq(n).siblings().find('a>div').removeClass('active-white')
   $('.pro-big>img').eq(n).siblings('img').css('opacity', 0)
   $('.pro-big>img').eq(n).css('opacity', 1)
})
$('.btu>.after').click(function () {
  if (n > 1) {
    n = 0
  } else {
    n ++
  }
  $('.pic-small>li').eq(n).find('a>div').addClass('active-white')
  $('.pic-small>li').eq(n).siblings().find('a>div').removeClass('active-white')
  $('.pro-big>img').eq(n).siblings('img').css('opacity', 0)
  $('.pro-big>img').eq(n).css('opacity', 1)
})

$('.pro-detail>a').click(function () { 
  $('.de-slide').stop().slideToggle(500)  
 })

$('.pro-color>ul>li').click(function () { 
  $(this).addClass('active-color')
  $(this).siblings().removeClass('active-color')
 })

$('.pro-attr>ul>li').click(function () { 
  $(this).addClass('active-size')
  $(this).siblings().removeClass('active-size')
 })

var num = $('.num-p>p').text()
$('.num-p>a:nth-child(2)').click(function () {
    num ++
  $('.num-p>p').text(num)
 })
$('.num-p>a:nth-child(3)').click(function () {
  if(num>1){
    num --
  }
  $('.num-p>p').text(num)
})

$('.de-slogan>li').click(function () { 
  var m = $(this).index()
  $('.corespond>li').eq(m).addClass('active-slo')
  $('.corespond>li').eq(m).siblings().removeClass('active-slo')
 })


$('.color>li').click(function () { 
  $(this).addClass('active-c')
  $(this).siblings().removeClass('active-c')
  $(this).parent().parent().parent().siblings().find('.position-trend>.color>li').removeClass('active-c')
 })

 var len
 var indImg = 0
 $('.btu-trend>.pre').click(function () { 
   var indTrend = len = $(this).parent().parent().parent().index()
    len = $(this).parent().parent().parent().find('.trend-img>img').length
    if(indImg == 0){
      indImg = len - 1
    }else{
      indImg --
    }
   $('.trend-pro>.trend-pro1').eq(indTrend).find('.trend-img>img').eq(indImg).css('opacity',1)
   $('.trend-pro>.trend-pro1').eq(indTrend).find('.trend-img>img').eq(indImg).siblings().css('opacity', 0)
  })
$('.btu-trend>.after').click(function () {
  var indTrend = len = $(this).parent().parent().parent().index()
  len = $(this).parent().parent().parent().find('.trend-img>img').length
  if (indImg == len - 1) {
    indImg = 0
  } else {
    indImg ++
  }
  $('.trend-pro>.trend-pro1').eq(indTrend).find('.trend-img>img').eq(indImg).css('opacity', 1)
  $('.trend-pro>.trend-pro1').eq(indTrend).find('.trend-img>img').eq(indImg).siblings().css('opacity', 0)
})

var indAuto = []
var i = -1
var j = -1

$('.trend-pro>.autoplay').each(function () { 
  var len2 = $(this).find('.trend-img>img').length
  indAuto.push(len2)
 })

var auto = setInterval(function () { myTimer() }, 1500); 
function myTimer(){
    if(j > 1){
      j = 0
    }else{
      j ++
    }
    $('.trend-pro>.autoplay>.trend-img>img').eq(j).css('opacity', 1)
    $('.trend-pro>.autoplay>.trend-img>img').eq(j).siblings().css('opacity', 0)
}
var auto2 = setInterval(function () { myTimer1() }, 1500); 
    function myTimer1() {
      if (i > 0) {
        i = 0
      } else {
        i++
      }
      $('.trend-pro>.autoplay:nth-child(3)>.trend-img>img').eq(i).css('opacity', 1)
      $('.trend-pro>.autoplay:nth-child(3)>.trend-img>img').eq(i).siblings().css('opacity', 0)
    }

$('.realSize a').click(function () {
  $(this).addClass('active-a')
  $(this).parent().siblings().find('a').removeClass('active-a')
})










