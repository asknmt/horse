/*スクロールで色変更*/
jQuery(window).on('scroll', function () {
  var imgHeight = $('.contents').outerHeight();

  /*色変更*/
  if (imgHeight < jQuery(this).scrollTop()) { /*背景の下に来たとき*/
    $('.menu').removeClass('color');/*menuを黒に*/
    $('.menu').css('color','#222')
    $('.drawer-open').addClass('change');/*ハンバーガーメニューを黒に*/
  } else {
     jQuery('.menu').addClass('color'); /*menuを白に*/
     $('.drawer-open').removeClass('change');/*ハンバーガーメニューを白に*/
    }  
})

$(function(){
  var imgHeight = $('.contents').outerHeight();
   $('.drawer-open').on('click',function(){
     if($(window).scrollTop()<imgHeight-50){/*ハンバーガーメニューが黒より上*/
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('nonscroll');/*ハンバーガーメニュー開いたときスクロールしない*/
    }else {/*ハンバーガーメニューが黒より下*/
       $(this).toggleClass('change');/*メニューを黒白に変化*/
       $('.burger-musk').fadeToggle(300);
       $('body').toggleClass('nonscroll');/*ハンバーガーメニュー開いたときスクロールしない*/
       $('.menu').toggleClass('color');
      }
   })
  })
  if($('.drawer-open p').hasClass('color')){
    $('.menu').css('color','#fff');
  }

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