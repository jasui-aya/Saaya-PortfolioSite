

// ハンバーガーメニュー
const ham = document.getElementById("js-hamburger");
const nav = document.getElementById("js-hamburger-nav");

    ham.addEventListener("click",() => {
        ham.classList.toggle("is-active");
        nav.classList.toggle("is-active");
    });

// メニュー内のリンクをクリックしたらメニュー閉じる
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    ham.classList.remove("is-active");
    nav.classList.remove("is-active");
  });
});
