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
// 제품 데이터
const products = [
  {
    id: 1,
    name: "선샤인 SPF50+ PA++++",
    price: "45,000",
    image: "./images/SUNSHINE.02.jpg"
  },
  {
    id: 2,
    name: "퍼피 선크림",
    price: "38,000",
    image: "./images/SUNSHINE.03.jpg"
  },
  {
    id: 3,
    name: "퍼퓸 웨어 선케어",
    price: "42,000",
    image: "./images/SUNSHINE.04.jpg"
  },
  {
    id: 4,
    name: "선샤인 쿨링 미스트",
    price: "35,000",
    image: "./images/SUNSHINE.01.jpg"
  },
  {
    id: 5,
    name: "선샤인 틴티드",
    price: "48,000",
    image: "./images/SUNSHINE.02.jpg"
  },
  {
    id: 6,
    name: "퍼피 선스틱",
    price: "32,000",
    image: "./images/SUNSHINE.03.jpg"
  },
  {
    id: 7,
    name: "선샤인 애프터 수딩",
    price: "40,000",
    image: "./images/SUNSHINE.01.jpg"
  },
  {
    id: 8,
    name: "퍼퓸 웨어 선쿠션",
    price: "52,000",
    image: "./images/SUNSHINE.04.jpg"
  }
];

