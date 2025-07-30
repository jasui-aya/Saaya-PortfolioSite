

// ハンバーガーメニュー
const ham = document.getElementById("js-hamburger");
const nav = document.getElementById("js-hamburger-nav");

    ham.addEventListener("click",() => {
        ham.classList.toggle("is-active");
        nav.classList.toggle("is-active");
    });


// swiperとpagination
if (window.innerWidth < 768) {
  new Swiper(".top_skills_icon-box", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    // navigationはhtmlのnavボタンの読み込みを上のようにしないと動かない
    },
  pagination: {
    el: ".swiper-pagination", // ←このクラス名がHTMLと一致してる必要あり
    clickable: true, // 点ポチをクリックして切り替えられる
   },
  });
}

