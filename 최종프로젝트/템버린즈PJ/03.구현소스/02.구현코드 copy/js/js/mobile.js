$(function() {
  
  // 모바일 여부 체크
  function isMobile() {
    return window.innerWidth <= 1200;
  }
  
  // 햄버거 메뉴 토글
  $('.btn-ham-close').click(function(e) {
    e.stopPropagation();
    $('.menu-box').toggleClass('active');
    
    // 메뉴 열릴 때 body 스크롤 방지
    if($('.menu-box').hasClass('active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'auto');
      // 메뉴 닫을 때 서브메뉴도 모두 닫기
      $('.sub-menu').removeClass('active');
    }
  });
  
  // GNB 메뉴 클릭 (모바일에서는 서브메뉴 토글, PC에서는 호버)
  $('.gnb-menu > ul > li > a').click(function(e) {
    if (isMobile()) {
      e.preventDefault();
      const $subMenu = $(this).next('.sub-menu');
      
      if($subMenu.length > 0) {
        // 다른 서브메뉴 닫기
        $('.sub-menu').not($subMenu).removeClass('active');
        // 현재 서브메뉴 토글
        $subMenu.toggleClass('active');
      }
    }
  });
  
  // 메뉴 외부 클릭 시 메뉴 닫기
  $(document).click(function(e) {
    if(isMobile()) {
      if(!$(e.target).closest('.menu-box, .btn-ham-close').length) {
        if($('.menu-box').hasClass('active')) {
          $('.menu-box').removeClass('active');
          $('body').css('overflow', 'auto');
          $('.sub-menu').removeClass('active');
        }
      }
    }
  });
  
  // 화면 크기 변경 감지
  $(window).resize(function() {
    if (!isMobile()) {
      // PC 크기로 변경되면 모바일 메뉴 상태 초기화
      $('.menu-box').removeClass('active');
      $('.sub-menu').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
  
  // 서브메뉴 제품 클릭 시 메뉴 닫기 (모바일)
  $('.product-images ol li').click(function() {
    if(isMobile()) {
      $('.menu-box').removeClass('active');
      $('body').css('overflow', 'auto');
    }
  });
  
});