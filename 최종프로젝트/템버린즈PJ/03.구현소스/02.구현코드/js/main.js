// 메인 페이지 JS - main.js

$('.gnb-menu>ul>li>a').click(function(e){
    e.preventDefault();
    $('#top-area').addClass('on');
    $(this).next('.sub-menu').css({
        'max-height': '700px'
    }).parent().siblings().find('.sub-menu').css({
        'max-height': '0'
    });
});

$('#top-area').mouseleave(function(){
    $(this).removeClass('on');
    $('.sub-menu').css({
        'max-height': '0'
    })
});

/* 햄버거 버튼 클릭시 메뉴 나오기 */
$('.btn-ham-close').click(function(){
    // 자신에게 클래스 on 넣기
    $(this).toggleClass('on');
    // 메뉴박스가 화면에 나오게 하기
    $('.menu-box').toggleClass('on');
});
// 검색 오버레이 열기
document.getElementById('searchBtn').addEventListener('click', function() {
  document.getElementById('searchOverlay').classList.add('active');
  setTimeout(() => {
    document.getElementById('searchInput').focus();
  }, 300);
});

// 검색 오버레이 닫기
document.getElementById('searchClose').addEventListener('click', function() {
  document.getElementById('searchOverlay').classList.remove('active');
});

// 오버레이 배경 클릭시 닫기
document.getElementById('searchOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
  }
});

// ESC 키로 닫기
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.getElementById('searchOverlay').classList.remove('active');
  }
});