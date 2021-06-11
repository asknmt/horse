/*アコーディオンメニュー*/
$(function(){
  $('.list-color').click(function(){
    $(this).next().slideToggle();
  })
})
$('.list-color').on('click', function () {
  $(this).find('.plus').toggleClass('open');
});

/*ページ内リンク*/
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 1000;
    var href= $(this).attr('href');
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate(
        {scrollTop: target.offset().top}, speed, "swing");
    return false;
  });
});
  /*ページ内リンク*/  
  $('#humber a[href]').on('click', function(event) {
    $('.drawer-open').trigger('click');
  });
/*スクロールでハンバーガーメニューの背景色変更*/
jQuery(window).on('scroll', function () {
 
  if (jQuery('header-img').height() < jQuery(this).scrollTop()) { 
 jQuery('drawer-open').addClass('change'); }
  else {
  jQuery('drawer-open').removeClass('change'); 
} 
});

$('.drawer-open').on('click',function(){
  $('body').toggleClass('nonscroll');/*ハンバーガーメニュー開いたときスクロールしない*/
  $('.drawer-open').toggleClass('change');/*ハンバーガーメニューを白に*/
})