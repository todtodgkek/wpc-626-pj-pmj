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