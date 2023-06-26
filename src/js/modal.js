const refs = {
  openModalBtnHero: document.querySelector("[data-modal-open-hero]"),
  openModalBtnHeader: document.querySelector("[data-modal-open-header]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  backdrop: document.querySelector(`.backdrop`),
  body: document.querySelector("body"),
};

refs.openModalBtnHero.addEventListener("click", onOpenModal);
refs.openModalBtnHeader.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener(`click`, onClickBackdrop);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.body.classList.toggle("disable-scroll");
}

function onOpenModal() {
  toggleModal();
  window.addEventListener("keydown", escClose);
}

function onCloseModal() {
  toggleModal();
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
