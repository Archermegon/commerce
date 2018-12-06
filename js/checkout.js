

$('.sum-txt>a>span').click(function () { 
  $('.a-txt').stop().slideToggle(1000)
 })

 $('.apply').click(function () { 
   $('.txt-slide').stop().slideToggle(500)
  })



$('.sum-txt>a>span').click(function () {
  $('.order-txt').stop().slideToggle(1000)
})



  var arrPri = []
  var arrNum = []
$('.price-c>.text-pri').each(function () { 
  var c = $(this).find('.num-add>p').text()
  arrNum.push(c)
 })
$('.price-c>.text-pri').each(function () {
  var p = $(this).find('.text-mon>p>span').text()
  arrPri.push(p)
})
  var total
$('.add').click(function () { 
  var ind = $(this).parent().parent().index() - 1
  arrNum[ind] ++
  total = (arrNum[ind] * arrPri[ind]).toFixed(2)
  $(this).parent().find('p').text(arrNum[ind])
  $(this).parent().parent().find('.total>p>span').text(total)
 })
$('.minus').click(function () {
  var ind = $(this).parent().parent().index() - 1
  if (arrNum[ind] > 1){
    arrNum[ind] --
  }else{
    arrNum[ind] = 1
  }
  total = (arrNum[ind] * arrPri[ind]).toFixed(2)
  $(this).parent().find('p').text(arrNum[ind])
  $('.num-add>p').text(arrNum[ind])
  console.log($(this).parent().parent().find('.total>p>span'))
  $(this).parent().parent().find('.total>p>span').text(total)
})

$('.total>a').click(function () {
  console.log($(this).parent().parent());
  $(this).parent().parent().remove()
})

$('.pro').click(function () { 
  $('.c-nav li:nth-child(1)>.text-check>p:nth-child(2)').css('display','block')
  $('.c-nav li:nth-child(1)>.text-check>p:nth-child(1)').css('display', 'none')
  $('.c-nav li:nth-child(2)>.text-check').addClass('active-check')
  $('.form-check>ul>li:nth-child(1)').css('display','none')
  $('.form-check>ul>li:nth-child(2)').css('display', 'flex')
 })

$('.payment').click(function () {
  $('.c-nav li:nth-child(2)>.text-check>p:nth-child(2)').css('display', 'block')
  $('.c-nav li:nth-child(2)>.text-check>p:nth-child(1)').css('display', 'none')
  $('.c-nav li:nth-child(2)>.text-check').addClass('active-check')
  $('.c-nav li:nth-child(3)>.text-check').addClass('active-check')
  $('.form-check>ul>li:nth-child(2)').css('display', 'none')
  $('.form-check>ul>li:nth-child(3)').css('display', 'flex')
})



