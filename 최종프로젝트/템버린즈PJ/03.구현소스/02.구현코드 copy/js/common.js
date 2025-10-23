//// 템버린즈 전체 공통 JS /////////////////////
// 1. 메뉴 클릭시 변경하기 ////////

// 링크주소 객체 /////
const getUrl = {
    'SUNSHINE': 'sunshine-all.html',
    'PERFUME': 'perfume-oil.html',
    'HAND&LIP': 'shell-perfume-hand.html',
    'BODY': 'shower-body.html',
    'HOME FRAGRANCE': 'home-fragrance.html',
    'STORE': 'store-korea.html',
}

// 대상선정 :  .product-images li
$('.sub-menu li').click(function(e){
    e.preventDefault();
    let atxt = $(this).parents('.sub-menu').prev('a').text()
    console.log(atxt);

    // 페이지 이동하기
    location.href = getUrl[atxt];
    
});
