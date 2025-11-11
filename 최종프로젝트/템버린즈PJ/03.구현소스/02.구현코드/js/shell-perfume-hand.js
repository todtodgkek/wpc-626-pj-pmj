// shell-perfume-hand 페이지 전용 JS - shell-perfume-hand.js

// 데이터 가져오기
import handLipData from '../data/handnlip.json' with { type: 'json' };
console.log(handLipData);

// 선택 데이터
const selData = handLipData.products;

// 리스트 페이지에 데이터 연결하여 출력하기
// 대상 : .product-grid
const productGrid = document.querySelector('.product-grid');

/* 표시형식
<div class="product">
    <img src="./images/쉘 퍼퓸 핸드.01.png" alt="쉘 퍼퓸 핸드 제품1" />
    <h3>쉘 퍼퓸 핸드 선샤인</h3>
    <p>안젤리카ㅣ뮤게ㅣ클라우드 아머</p>
    <p>카카오 구매</p>
</div>
*/
productGrid.innerHTML = selData.map(item => `
    <div class="product">
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>${
            // 가격 데이터가 있으면 출력!
            item.price?
            // 앞에 ₩ 붙이고 3자리마다 , 찍기
            `₩ ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
            // 가격 데이터 없으면 별도의 설명 데이터 출력
            :item.purchaseNote
        }</p>
    </div>
`).join('');
