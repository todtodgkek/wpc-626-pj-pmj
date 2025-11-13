// 메인 페이지 JS - main.js

$(".gnb-menu>ul>li>a").click(function (e) {
  e.preventDefault();
  $("#top-area").addClass("on");
  $(this)
    .next(".sub-menu")
    .css({
      "max-height": "700px",
    })
    .parent()
    .siblings()
    .find(".sub-menu")
    .css({
      "max-height": "0",
    });
});

$("#top-area").mouseleave(function () {
  $(this).removeClass("on");
  $(".sub-menu").css({
    "max-height": "0",
  });
});

/* 햄버거 버튼 클릭시 메뉴 나오기 */
$(".btn-ham-close").click(function () {
  // 자신에게 클래스 on 넣기
  $(this).toggleClass("on");
  // 메뉴박스가 화면에 나오게 하기
  $(".menu-box").toggleClass("on");
});
// 검색 오버레이 열기
document.getElementById("searchBtn").addEventListener("click", function () {
  document.getElementById("searchOverlay").classList.add("active");
  setTimeout(() => {
    document.getElementById("searchInput").focus();
  }, 300);
});

// 검색 오버레이 닫기
document.getElementById("searchClose").addEventListener("click", function () {
  document.getElementById("searchOverlay").classList.remove("active");
});

// 오버레이 배경 클릭시 닫기
document
  .getElementById("searchOverlay")
  .addEventListener("click", function (e) {
    if (e.target === this) {
      this.classList.remove("active");
    }
  });

// ESC 키로 닫기
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("searchOverlay").classList.remove("active");
  }
});
// 로그인 오버레이 열기
document.getElementById("loginBtn").addEventListener("click", function () {
  document.getElementById("loginOverlay").classList.add("active");
});

// 로그인 X 버튼으로 닫기
document.getElementById("loginClose").addEventListener("click", function () {
  document.getElementById("loginOverlay").classList.remove("active");
});

// 로그인 오버레이 닫기 (배경 클릭시)
document.getElementById("loginOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("active");
  }
});

// ESC 키로 로그인 닫기
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.getElementById("loginOverlay").classList.remove("active");
  }
});

// 로그인 탭 전환
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-content")
      .forEach((c) => c.classList.remove("active"));

    this.classList.add("active");
    const tabId = this.getAttribute("data-tab") + "-tab";
    document.getElementById(tabId).classList.add("active");
  });
});
// 슬라이더 데이터
const sliderData = [
  {
    img: "./images/검색.jpg",
    text: "11/3 - 11/17<br>7만원 이상 구매 시 '퍼퓸 본 오브제' 증정",
  },
  {
    img: "./images/검색.2.jpg",
    text: "11/3 - 11/17<br>퍼퓸 50mL구매 시 '퍼피 키링' 증정",
  },
  {
    img: "./images/검색.3.jpg",
    text: "11/3 - 11/17<br>전 제품 구매 시 '퍼퓸 이브닝글로우 2mL' 증정",
  },
];

let currentSlide = 0;

// 다음 버튼
document.getElementById("nextBtn").addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % sliderData.length;
  updateSlider();
});

// 이전 버튼
document.getElementById("prevBtn").addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + sliderData.length) % sliderData.length;
  updateSlider();
});

// 슬라이더 업데이트
function updateSlider() {
  document.getElementById("sliderImg").src = sliderData[currentSlide].img;
  document.getElementById("sliderText").innerHTML =
    sliderData[currentSlide].text;
}
// 장바구니 오버레이 열기
document.getElementById("cartBtn").addEventListener("click", function () {
  document.getElementById("cartOverlay").classList.add("active");
});

// 장바구니 오버레이 닫기
document.getElementById("cartClose").addEventListener("click", function () {
  document.getElementById("cartOverlay").classList.remove("active");
});

// 장바구니 오버레이 배경 클릭시 닫기
document.getElementById("cartOverlay").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("active");
  }
});
// jQuery 사용 여부 확인
(function () {
  "use strict";

  // 전체 제품 데이터 (페이지 링크 포함)
  const productsData = {
    sunshine: [
      {
        id: 1,
        name: "퍼퓸 리미티드 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 215000,
        category: "SUNSHINE",
        image: "./images/전체보기.01.png",
        link: "sunshine-all.html",
      },
      {
        id: 2,
        name: "퍼퓸 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 265000,
        category: "SUNSHINE",
        image: "./images/전체보기.02.png",
        link: "sunshine-all.html",
      },
      {
        id: 3,
        name: "퍼퓸 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 45000,
        category: "SUNSHINE",
        image: "./images/전체보기.03.png",
        link: "sunshine-all.html",
      },
      {
        id: 4,
        name: "퍼퓸 오일 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 43500,
        category: "SUNSHINE",
        image: "./images/전체보기.04.png",
        link: "sunshine-all.html",
      },
      {
        id: 5,
        name: "쉘 퍼퓸 핸드 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: null,
        status: "카카오 구매",
        category: "SUNSHINE",
        image: "./images/전체보기.05.png",
        link: "sunshine-all.html",
      },
      {
        id: 7,
        name: "퍼퓸 본 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 58000,
        category: "SUNSHINE",
        image: "./images/전체보기.07.png",
        link: "sunshine-all.html",
      },
      {
        id: 8,
        name: "퍼퓸 캔들 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: null,
        status: "오프라인 한정 판매",
        category: "SUNSHINE",
        image: "./images/전체보기.08.png",
        link: "sunshine-all.html",
      },
    ],
    perfume_oil: [
      {
        id: 1,
        name: "퍼퓸 오일 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 43500,
        category: "PERFUME",
        image: "./images/전체보기.04.png",
        link: "perfume-oil.html",
      },
      {
        id: 2,
        name: "퍼퓸 오일 블루히노키",
        description: "시원한 아키갈라우드 | 부드러운 이끼와 버섯 | 앰버 머스크",
        price: 43500,
        category: "PERFUME",
        image: "./images/퍼퓸오일.02.png",
        link: "perfume-oil.html",
      },
      {
        id: 3,
        name: "퍼퓸 오일 보타리",
        description: "너티 우드ㅣ블루 카모마일ㅣ루미너스 알데하이드",
        price: 43500,
        category: "PERFUME",
        image: "./images/퍼퓸오일.03.png",
        link: "perfume-oil.html",
      },
      {
        id: 4,
        name: "레더 웨어 퍼퓸 오일 화이트",
        description: "레더 웨어 퍼퓸 오일 화이트 케이스",
        price: 55000,
        category: "PERFUME",
        image: "./images/퍼퓸오일.04.png",
        link: "perfume-oil.html",
      },
      {
        id: 5,
        name: "레더 웨어 퍼퓸 오일 블랙",
        description: "레더 웨어 퍼퓸 오일 블랙 케이스",
        price: 55000,
        category: "PERFUME",
        image: "./images/퍼퓸오일.05.png",
        link: "perfume-oil.html",
      },
    ],
    hand: [
      {
        id: 1,
        name: "쉘 퍼퓸 핸드 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: null,
        status: "카카오 구매",
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.01.png",
        link: "shell-perfume-hand.html",
      },
      {
        id: 2,
        name: "쉘 퍼퓸 핸드 이브닝글로우",
        description: "노을에 물든 장미 | 라즈베리 | 머스크",
        price: 32000,
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.02.png",
        link: "shell-perfume-hand.html",
      },
      {
        id: 3,
        name: "쉘 퍼퓸 핸드 카모",
        description: "진득한 카모마일 | 부드러운 나무결 | 머스크",
        price: 32000,
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.03.png",
        link: "shell-perfume-hand.html",
      },
      {
        id: 5,
        name: "쉘 퍼퓸 핸드 퍼피",
        description: "너티 우드ㅣ블루 카모마일ㅣ루미너스 알데하이드",
        price: null,
        status: "품절",
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.05.png",
        link: "shell-perfume-hand.html",
      },
      {
        id: 7,
        name: "쉘 퍼퓸 핸드 이브닝글로우",
        description: "노을에 물든 장미 | 라즈베리 | 머스크",
        price: 18500,
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.07.png",
        link: "shell-perfume-hand.html",
      },
      {
        id: 8,
        name: "쉘 퍼퓸 핸드 카모",
        description: "진득한 카모마일ㅣ부드러운 나무결ㅣ머스크",
        price: 18500,
        category: "HAND&LIP",
        image: "./images/쉘 퍼퓸 핸드.08.png",
        link: "shell-perfume-hand.html",
      },
    ],
    body: [
      {
        id: 1,
        name: "샤워리바디워시 얼리모닝듀",
        description: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
        price: 34500,
        category: "BODY",
        image: "./images/샤워리바디.01.png",
        link: "shower-body.html",
      },
      {
        id: 2,
        name: "샤워리바디워시 비가리코",
        description: "씁쓸한 오렌지 | 시더우드 | 달콤한 리코라이스",
        price: 34500,
        category: "BODY",
        image: "./images/샤워리바디.02.png",
        link: "shower-body.html",
      },
      {
        id: 3,
        name: "샤워리바디워시 포그",
        description: "물안개 낀 숲 | 젖은 나무 | 캐시미어 우드",
        price: 34500,
        category: "BODY",
        image: "./images/샤워리바디.03.png",
        link: "shower-body.html",
      },
      {
        id: 4,
        name: "샤워리바디워시 님버스",
        description: "도넛피치 | 어린 코코넛의 풋내음 | 포근한 머스크",
        price: 34500,
        category: "BODY",
        image: "./images/샤워리바디.04.png",
        link: "shower-body.html",
      },
      {
        id: 9,
        name: "샤워리바디로션 블루히노키",
        description: "상쾌한 파인오일ㅣ푸른 히노키ㅣ드리프트우드",
        price: 39000,
        category: "BODY",
        image: "./images/샤워리바디.09.png",
        link: "shower-body.html",
      },
      {
        id: 10,
        name: "샤워리바디로션 얼리모닝듀",
        description: "애플민트ㅣ신선한 월계수ㅣ이른 아침의 청량함",
        price: 39000,
        category: "BODY",
        image: "./images/샤워리바디.10.png",
        link: "shower-body.html",
      },
    ],
    home: [
      {
        id: 1,
        name: "퍼퓸 본 선샤인",
        description: "안젤리카ㅣ뮤게ㅣ클라우드 아머",
        price: 58000,
        category: "HOME FRAGRANCE",
        image: "./images/룸 프래그런스.01.png",
        link: "room-fragrance.html",
      },
      {
        id: 2,
        name: "퍼퓸 본 퍼피",
        description: "너티우드ㅣ블루 카모마일ㅣ루미너스 알데하이드",
        price: null,
        status: "품절",
        category: "HOME FRAGRANCE",
        image: "./images/룸프래그런스.02.png",
        link: "room-fragrance.html",
      },
      {
        id: 3,
        name: "디퓨저 파피루스",
        description: "파피루스ㅣ그린트ㅣ샌달우드",
        price: 120000,
        category: "HOME FRAGRANCE",
        image: "./images/룸프래그런스.03.png",
        link: "room-fragrance.html",
      },
      {
        id: 4,
        name: "디퓨저 파인네스트",
        description: "유칼립투스ㅣ파인니들ㅣ히노키우드",
        price: 120000,
        category: "HOME FRAGRANCE",
        image: "./images/룸프래그런스.04.png",
        link: "room-fragrance.html",
      },
      {
        id: 5,
        name: "디퓨저 멈버드",
        description: "유자ㅣ국화ㅣ머스크",
        price: 120000,
        category: "HOME FRAGRANCE",
        image: "./images/룸프래그런스.05.png",
        link: "room-fragrance.html",
      },
      {
        id: 6,
        name: "디퓨저 먹",
        description: "그을린 소나무ㅣ먹물ㅣ패출리",
        price: 120000,
        category: "HOME FRAGRANCE",
        image: "./images/룸프래그런스.06.png",
        link: "room-fragrance.html",
      },
    ],
  };

  // 모든 제품을 하나의 배열로 합치기
  const allProducts = [
    ...productsData.sunshine,
    ...productsData.perfume_oil,
    ...productsData.hand,
    ...productsData.body,
    ...productsData.home,
  ];

  console.log("제품 데이터 로드 완료:", allProducts.length + "개");

  // 검색 함수
  function searchProducts(query) {
    if (!query || query.trim() === "") {
      return [];
    }

    const searchTerm = query.toLowerCase().trim();
    console.log("검색어:", searchTerm);

    const results = allProducts.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descMatch = product.description.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);

      return nameMatch || descMatch || categoryMatch;
    });

    console.log("검색 결과:", results.length + "개");
    return results;
  }

  // 검색 결과를 HTML로 렌더링 (클릭 가능하도록)
  function renderSearchResults(results) {
    if (results.length === 0) {
      return '<div class="no-results">검색 결과가 없습니다.</div>';
    }

    return results
      .map(
        (product) => `
      <a href="${product.link}" class="search-result-item">
        <img src="${product.image}" alt="${
          product.name
        }" onerror="this.style.display='none'">
        <div class="product-info">
          <h4>${product.name}</h4>
          <p class="category">${product.category}</p>
          <p class="description">${product.description}</p>
          <p class="price">${
            product.price
              ? "₩ " + product.price.toLocaleString()
              : product.status || "가격 문의"
          }</p>
        </div>
      </a>
    `
      )
      .join("");
  }

  // 자동완성 제안
  function getSuggestions(query) {
    if (!query || query.trim() === "") {
      return [
        "퍼퓸 리미티드 선샤인",
        "퍼퓸 선샤인",
        "퍼퓸 오일 선샤인",
        "쉘 퍼퓸 핸드",
        "샤워리바디",
      ];
    }

    const searchTerm = query.toLowerCase().trim();
    const suggestions = allProducts
      .filter((product) => product.name.toLowerCase().includes(searchTerm))
      .map((product) => product.name)
      .slice(0, 8); // 최대 8개까지 표시

    return suggestions.length > 0 ? suggestions : ["검색 결과가 없습니다"];
  }

  // 실시간 검색 처리
  function handleSearch() {
    const inputElement = document.getElementById("searchInput");
    const resultsContainer = document.querySelector(".search-results");
    const suggestionsContainer = document.querySelector(".search-suggestions");

    if (!inputElement) {
      console.error("검색 입력창을 찾을 수 없습니다.");
      return;
    }

    const query = inputElement.value;
    console.log("입력된 검색어:", query);

    // 제안 업데이트
    const suggestions = getSuggestions(query);
    if (suggestionsContainer) {
      suggestionsContainer.innerHTML = suggestions
        .map((s) => `<li data-search="${s}">${s}</li>`)
        .join("");

      // 제안 항목 클릭 이벤트
      suggestionsContainer.querySelectorAll("li").forEach((li) => {
        li.addEventListener("click", function () {
          const searchTerm = this.getAttribute("data-search");
          inputElement.value = searchTerm;
          handleSearch();
        });
      });
    }

    // 검색 결과 업데이트
    const results = searchProducts(query);
    if (resultsContainer) {
      resultsContainer.innerHTML = renderSearchResults(results);
    }
  }

  // 검색 시스템 초기화
  function initSearchSystem() {
    console.log("검색 시스템 초기화 시작...");

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");

    console.log("searchInput:", searchInput ? "찾음" : "없음");
    console.log("searchBtn:", searchBtn ? "찾음" : "없음");
    console.log("searchOverlay:", searchOverlay ? "찾음" : "없음");

    // 검색 결과 컨테이너 생성
    let resultsContainer = document.querySelector(".search-results");
    if (!resultsContainer) {
      resultsContainer = document.createElement("div");
      resultsContainer.className = "search-results";
      const searchContent = document.querySelector(".search-content");
      if (searchContent) {
        searchContent.appendChild(resultsContainer);
        console.log("검색 결과 컨테이너 생성 완료");
      }
    }

    // 검색 버튼 클릭
    if (searchBtn) {
      searchBtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("검색 버튼 클릭");
        if (searchOverlay) {
          searchOverlay.classList.add("active");
          searchOverlay.style.display = "flex";
          setTimeout(() => {
            if (searchInput) searchInput.focus();
          }, 100);
        }
      });
    }

    // 닫기 버튼
    if (searchClose) {
      searchClose.addEventListener("click", function (e) {
        e.preventDefault();
        console.log("검색 닫기 클릭");
        if (searchOverlay) {
          searchOverlay.classList.remove("active");
        }
      });
    }

    // 오버레이 배경 클릭
    if (searchOverlay) {
      searchOverlay.addEventListener("click", function (e) {
        if (e.target === searchOverlay) {
          searchOverlay.classList.remove("active");
        }
      });
    }

    // 실시간 검색
    if (searchInput) {
      searchInput.addEventListener("input", function () {
        handleSearch();
      });

      // Enter 키 검색
      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          e.preventDefault();
          handleSearch();
        }
      });
    }

    console.log("검색 시스템 초기화 완료 - 총 제품:", allProducts.length);
  }

  // 검색 결과 스타일
  const style = document.createElement("style");
  style.id = "search-results-style";
  style.textContent = `
    .search-results {
      margin-top: 30px;
      padding: 10px 0;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .search-result-item {
      display: flex;
      gap: 20px;
      padding: 15px;
      border: 1px solid #eee;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
      background: white;
    }
    
    .search-result-item:hover {
      background-color: #f9f9f9;
      border-color: #000;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .search-result-item img {
      width: 120px;
      min-width: 120px;
      height: auto;
      object-fit: cover;
      flex-shrink: 0;
      border-radius: 6px;
    }
    
    .search-result-item .product-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .search-result-item h4 {
      margin: 0 0 8px 0;
      font-size: 17px;
      font-weight: 600;
      color: #000;
    }
    
    .search-result-item .category {
      color: #999;
      font-size: 12px;
      margin: 0 0 10px 0;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .search-result-item .description {
      color: #666;
      font-size: 13px;
      margin: 5px 0;
      line-height: 1.5;
    }
    
    .search-result-item .price {
      font-weight: 600;
      color: #000;
      margin: 10px 0 0 0;
      font-size: 16px;
    }
    
    .no-results {
      text-align: center;
      padding: 60px 20px;
      color: #999;
      font-size: 16px;
    }
    
    .search-suggestions {
      list-style: none;
      padding: 0;
      margin: 20px 0;
    }
    
    .search-suggestions li {
      cursor: pointer;
      padding: 12px 15px;
      transition: background-color 0.2s;
      border-radius: 6px;
      margin: 5px 0;
    }
    
    .search-suggestions li:hover {
      background-color: #f5f5f5;
    }

    @media (max-width: 768px) {
      .search-result-item {
        flex-direction: column;
        padding: 12px;
      }
      
      .search-result-item img {
        width: 100%;
        height: 200px;
      }
    }
  `;

  if (!document.querySelector("#search-results-style")) {
    document.head.appendChild(style);
  }

  // 초기화 실행
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSearchSystem);
  } else {
    setTimeout(initSearchSystem, 100);
  }
})();
// ========== 장바구니 기능 추가 ==========

// 장바구니 데이터 로드
function loadCart() {
  const cart = localStorage.getItem('tamburins_cart');
  return cart ? JSON.parse(cart) : [];
}

// 장바구니 데이터 저장
function saveCart(cart) {
  localStorage.setItem('tamburins_cart', JSON.stringify(cart));
}

// 장바구니에서 제품 제거
function removeFromCart(productId) {
  let cart = loadCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  updateCartDisplay();
}

// 수량 변경
function updateQuantity(productId, change) {
  const cart = loadCart();
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart(cart);
      updateCartDisplay();
    }
  }
}

// 총 금액 계산
function calculateTotal(cart) {
  return cart.reduce((total, item) => {
    const price = parseInt(item.price.replace(/,/g, ''));
    return total + (price * item.quantity);
  }, 0);
}

// 장바구니 표시 업데이트
function updateCartDisplay() {
  const cart = loadCart();
  const cartContent = document.querySelector('.cart-content');
  const cartSubtitle = document.querySelector('.cart-subtitle');
  
  if (!cartContent) return;

  if (cart.length === 0) {
    cartSubtitle.textContent = '장바구니에 담긴 제품이 없습니다';
    cartContent.innerHTML = `
      <div class="empty-cart">
        <p>장바구니가 비어 있습니다</p>
      </div>
    `;
  } else {
    cartSubtitle.textContent = `장바구니에 ${cart.length}개의 제품이 있습니다`;
    
    const total = calculateTotal(cart);
    
    cartContent.innerHTML = `
      <div class="cart-items">
        ${cart.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
              <h4>${item.name}</h4>
              <p class="cart-item-price">${item.price}원</p>
              <div class="quantity-control">
                <button class="qty-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="qty-btn plus" data-id="${item.id}">+</button>
              </div>
            </div>
            <button class="remove-btn" data-id="${item.id}" title="삭제">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        `).join('')}
      </div>
      <div class="cart-summary">
        <div class="cart-total">
          <span>총 금액</span>
          <span class="total-price">${total.toLocaleString()}원</span>
        </div>
        <button class="checkout-btn">결제하기</button>
      </div>
    `;

    // 삭제 버튼 이벤트
    cartContent.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = parseInt(btn.dataset.id);
        removeFromCart(productId);
      });
    });

    // 수량 감소 버튼
    cartContent.querySelectorAll('.qty-btn.minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = parseInt(btn.dataset.id);
        updateQuantity(productId, -1);
      });
    });

    // 수량 증가 버튼
    cartContent.querySelectorAll('.qty-btn.plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const productId = parseInt(btn.dataset.id);
        updateQuantity(productId, 1);
      });
    });

    // 결제 버튼
    cartContent.querySelector('.checkout-btn')?.addEventListener('click', () => {
      alert('결제 기능은 준비 중입니다.');
    });
  }
}

// 장바구니 오버레이 이벤트
const cartBtnMain = document.getElementById('cartBtn');
const cartOverlayMain = document.getElementById('cartOverlay');
const cartCloseMain = document.getElementById('cartClose');

if (cartBtnMain) {
  cartBtnMain.addEventListener('click', function() {
    cartOverlayMain.classList.add('active');
    document.body.style.overflow = 'hidden';
    updateCartDisplay();
  });
}

if (cartCloseMain) {
  cartCloseMain.addEventListener('click', function() {
    cartOverlayMain.classList.remove('active');
    document.body.style.overflow = '';
  });
}

if (cartOverlayMain) {
  cartOverlayMain.addEventListener('click', function(e) {
    if (e.target === cartOverlayMain) {
      cartOverlayMain.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// 장바구니 스타일 추가
const cartStyleSheet = document.createElement('style');
cartStyleSheet.textContent = `
  .cart-items {
    max-height: calc(100vh - 300px);
    overflow-y: auto;
    padding: 20px 0;
  }

  .cart-item {
    display: flex;
    gap: 15px;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .cart-item img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 4px;
  }

  .cart-item-info {
    flex: 1;
  }

  .cart-item-info h4 {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 8px 0;
    color: #000;
  }

  .cart-item-price {
    font-size: 14px;
    color: #666;
    margin: 0 0 12px 0;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .qty-btn {
    width: 24px;
    height: 24px;
    border: 1px solid #ddd;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    transition: all 0.2s;
  }

  .qty-btn:hover {
    background: #f5f5f5;
    border-color: #999;
  }

  .quantity {
    font-size: 14px;
    min-width: 20px;
    text-align: center;
  }

  .remove-btn {
    position: absolute;
    top: 20px;
    right: 0;
    width: 30px;
    height: 30px;
    border: none;
    background: none;
    cursor: pointer;
    color: #999;
    font-size: 20px;
    transition: all 0.2s;
  }

  .remove-btn:hover {
    color: #e74c3c;
    transform: scale(1.1);
  }

  .cart-summary {
    padding: 20px 0;
    border-top: 2px solid #000;
    margin-top: 20px;
  }

  .cart-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .total-price {
    font-size: 20px;
    font-weight: 600;
    color: #000;
  }

  .checkout-btn {
    width: 100%;
    padding: 16px;
    background: #000;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
  }

  .checkout-btn:hover {
    background: #333;
  }

  .empty-cart {
    text-align: center;
    padding: 60px 20px;
    color: #999;
  }

  .empty-cart p {
    font-size: 16px;
  }
`;
document.head.appendChild(cartStyleSheet);