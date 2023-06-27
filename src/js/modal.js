const refs = {
  openModalBtnHero: document.querySelector("[data-modal-open-hero]"),
  openModalBtnHeader: document.querySelector("[data-modal-open-header]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdropModal: document.querySelector(`.backdrop`),
  backdropConsultation: document.querySelector(`.notification__backdrop`),
  body: document.querySelector("body"),
  formModal: document.querySelector(".modal__form"),
  formConsultation: document.querySelector(".consultation__form"),
  notification: document.querySelector(".notification__backdrop"),
};

const TOKEN = `6059572944:AAFIAVFRWlrThlRrh6oUfrSpjMderaigpYk`;
const CHAT_ID = `-1001980715262`;

const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

refs.openModalBtnHero.addEventListener("click", onOpenModal);
refs.openModalBtnHeader.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdropModal.addEventListener(`click`, onClickBackdrop);
refs.backdropConsultation.addEventListener(`click`, onCloseNotifacation);
refs.formModal.addEventListener("submit", onSendInformation);
refs.formConsultation.addEventListener("submit", onSendInformation);

function onOpenModal() {
  refs.modal.classList.remove("is-hidden");
  refs.body.classList.add("disable-scroll");
  window.addEventListener("keydown", escClose);
}

function onCloseModal() {
  refs.modal.classList.add("is-hidden");
  refs.body.classList.remove("disable-scroll");
  window.removeEventListener("keydown", escClose);
}

function onCloseNotifacation() {
  refs.notification.classList.add("is-hidden");
  refs.body.classList.remove("disable-scroll");
  window.removeEventListener("keydown", escClose);
}

function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function escClose(e) {
  if (e.code === `Escape`) {
    onCloseModal();
  }
}

function onSendInformation(e) {
  e.preventDefault();
  const {
    elements: { phone, email },
  } = e.currentTarget;

  const message = `<b>New contact!</b> %0A<b>Phone:</b> ${phone.value} %0A<b>Email:</b> ${email.value}`;

  fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
    .then((res) => {
      notification();
      refs.notification.classList.remove("is-hidden");
      refs.body.classList.add("disable-scroll");
    })
    .catch((error) => console.log("Error:", error));
  refs.formModal.reset();
  refs.formConsultation.reset();
}

function notification() {
  setTimeout(() => {
    onCloseModal();
    refs.notification.classList.add("is-hidden");
  }, 3000);
}
