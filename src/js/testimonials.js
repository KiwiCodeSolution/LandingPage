import datas from "../data/testimonials.json";

const section = document.querySelector(".testimonials__list");
const cardElement = document.querySelector(".testimonials__card");

const element = datas
  .map(
    (data) =>
      `<li class=testimonials__list--item><div class=testimonials__list--imgwrapper id=${data.id}><img src="${data.photo}" alt="${data.name}" class=testimonials__list--img${data.id} /></div><span class=testimonials__list--name>${data.name}</span><span class=testimonials__list--company>${data.company}</span><p class=testimonials__list--text>${data.text}</p></li>`
  )
  .join("");

section.insertAdjacentHTML("afterbegin", element);

const imgwrapper = section.querySelectorAll(".testimonials__list--imgwrapper");

function firstRender() {
  const randomId = Math.floor(Math.random() * imgwrapper.length) - 1;

  if (datas[randomId]) {
    cardElement.innerHTML = `<div class=card--imgwrapper >
    <img src="${datas[randomId].photo}" alt="${datas[randomId].name}" class=card--img />
    </div>
    <p class=card--name >${datas[randomId].name}</p>
    <p class=card--company >${datas[randomId].company}</p>
    <p class=card--text >${datas[randomId].text}</p>`;
  }
}

imgwrapper.forEach(function (wrapp) {
  wrapp.addEventListener("click", function (e) {
    const result = datas.find((el) => el.id === wrapp.id);

    if (result) {
      cardElement.innerHTML = `<div class=card--imgwrapper ><img src="${result.photo}" alt="${result.name}" class=card--img /></div><p class=card--name>${result.name}</p><p class=card--company>${result.company}</p><p class=card--text>${result.text}</p>`;
    }
  });
});

firstRender();
