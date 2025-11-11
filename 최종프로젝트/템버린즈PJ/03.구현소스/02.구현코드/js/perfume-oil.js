// perfume-oil 페이지 전용 JS - perfume-oil.js

// 데이터 가져오기
import perfumeData from '../data/perfume.json' with { type: 'json' };
console.log(perfumeData);

// 선택 데이터
const selData = perfumeData.products;

// 리스트 페이지에 데이터 연결하여 출력하기
// 대상 : .product-grid
const productGrid = document.querySelector('.product-grid');

/* 표시형식
<div class="product">
    <img src="./images/퍼퓸오일.02.png" alt="퍼퓸 오일 제품2" />
    <h3>퍼퓸 오일 블루히노키</h3>
    <p>시원한 아키갈라우드 | 부드러운 이끼와 버섯 | 앰버 머스크</p>
    <p>₩ 43,500</p>
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
