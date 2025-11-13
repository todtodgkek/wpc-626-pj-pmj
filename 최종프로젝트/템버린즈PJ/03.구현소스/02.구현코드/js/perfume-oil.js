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

// 장바구니 데이터 로드
function loadCart() {
  const cart = localStorage.getItem('tamburins_cart');
  return cart ? JSON.parse(cart) : [];
}

// 장바구니 데이터 저장
function saveCart(cart) {
  localStorage.setItem('tamburins_cart', JSON.stringify(cart));
}

// 장바구니에 제품 추가
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const cart = loadCart();
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart(cart);
  updateCartButtons();
  showNotification('장바구니에 담겼습니다');
}

// 장바구니에서 제품 제거
function removeFromCart(productId) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  updateCartButtons();
  showNotification('장바구니에서 삭제되었습니다');
}

// 장바구니 버튼 상태 업데이트
function updateCartButtons() {
  const cart = loadCart();
  const cartIds = cart.map(item => item.id);
  
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    const productId = parseInt(btn.dataset.id);
    const isInCart = cartIds.includes(productId);
    
    if (isInCart) {
      btn.classList.add('in-cart');
      btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
      btn.title = '장바구니에 담김';
    } else {
      btn.classList.remove('in-cart');
      btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
      btn.title = '장바구니에 담기';
    }
  });
}

// 알림 표시
function showNotification(message) {
  const existing = document.querySelector('.cart-notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'cart-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 30px;
    background: #000;
    color: #fff;
    padding: 15px 30px;
    border-radius: 4px;
    z-index: 10000;
    font-size: 14px;
    animation: slideIn 0.3s ease;
  `;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideIn 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// 제품 그리드에 버튼 추가
function addCartButtons() {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;

  const productElements = grid.querySelectorAll('.product');
  
  productElements.forEach((productEl, index) => {
    // 이미 버튼이 있으면 스킵
    if (productEl.querySelector('.add-to-cart-btn')) return;
    
    const productId = index + 1;
    const imgWrapper = productEl.querySelector('img')?.parentElement;
    
    if (imgWrapper) {
      // wrapper에 relative 포지션 추가
      imgWrapper.style.position = 'relative';
      
      // 버튼 생성
      const btn = document.createElement('button');
      btn.className = 'add-to-cart-btn';
      btn.dataset.id = productId;
      btn.title = '장바구니에 담기';
      btn.innerHTML = '<i class="fa-solid fa-cart-plus"></i>';
      
      // 버튼 이벤트
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const cart = loadCart();
        const isInCart = cart.find(item => item.id === productId);
        
        if (isInCart) {
          removeFromCart(productId);
        } else {
          addToCart(productId);
        }
      });
      
      imgWrapper.appendChild(btn);
    }
  });

  updateCartButtons();
}

// 스타일 추가 (버튼만)
const style = document.createElement('style');
style.textContent = `
  .add-to-cart-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.95);
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    z-index: 10;
  }

  .add-to-cart-btn i {
    font-size: 16px;
    color: #000;
    transition: all 0.3s ease;
  }

  .add-to-cart-btn:hover {
    background: #000;
    transform: scale(1.05);
  }

  .add-to-cart-btn:hover i {
    color: #fff;
  }

  .add-to-cart-btn.in-cart {
    background: #000;
  }

  .add-to-cart-btn.in-cart i {
    color: #fff;
  }

  .add-to-cart-btn.in-cart:hover {
    background: #e74c3c;
  }

  .add-to-cart-btn:active {
    transform: scale(0.95);
  }
`;
document.head.appendChild(style);

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', addCartButtons);