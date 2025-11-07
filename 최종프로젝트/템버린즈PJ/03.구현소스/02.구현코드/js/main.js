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
document.getElementById('loginBtn').addEventListener('click', function() {
  document.getElementById('loginOverlay').classList.add('active');
});

// 로그인 X 버튼으로 닫기
document.getElementById('loginClose').addEventListener('click', function() {
  document.getElementById('loginOverlay').classList.remove('active');
});

// 로그인 오버레이 닫기 (배경 클릭시)
document.getElementById('loginOverlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.remove('active');
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
