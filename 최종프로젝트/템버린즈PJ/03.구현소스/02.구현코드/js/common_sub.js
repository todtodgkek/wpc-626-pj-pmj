//// 템버린즈 전체 공통 JS /////////////////////
// 1. 메뉴 클릭시 변경하기 ////////

// 링크주소 객체 /////
const getUrl = {
    'TAMBURINS' : 'index.html',
    'SUNSHINE': 'sunshine-all.html',
    'PERFUME': 'perfume-oil.html',
    'HAND&LIP': 'shell-perfume-hand.html',
    'BODY': 'shower-body.html',
    'HOME FRAGRANCE': 'home-fragrance.html',
    'STORE': 'store-korea.html',
}

// 대상선정 :  .sub-menu-box a
$('.sub-menu-box a').click(function(e){
    e.preventDefault();
    let atxt = $(this).text()
    console.log(atxt);

    // 페이지 이동하기
    location.href = getUrl[atxt];
    
});
