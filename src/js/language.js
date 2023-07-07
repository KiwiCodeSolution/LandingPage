import languagesArray from "./languagesArray";

const refs = {
  uaBtns: document.querySelector("[data-language-ua]"),
  enBtns: document.querySelector("[data-language-en]"),
  btns: document.querySelectorAll(".header__language--button"),
};

const languages = ["en", "ua"];

refs.btns.forEach((el) => {
  el.addEventListener("click", () => {
    location.href = window.location.pathname + "#" + el.value;
    location.reload();
  });
});

function changeLanguage(e) {
  let hash = window.location.hash.slice(1);

  if (!languages.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }

  if (hash === "ua") {
    refs.uaBtns.classList.add("active-language");
    refs.enBtns.classList.remove("active-language");
  }
  if (hash === "en") {
    refs.uaBtns.classList.remove("active-language");
    refs.enBtns.classList.add("active-language");
  }

  for (let key in languagesArray) {
    document.querySelector(".lng-" + key).innerHTML = languagesArray[key][hash];
  }
}
changeLanguage();
