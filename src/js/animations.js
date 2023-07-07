const animItems = document.querySelectorAll(".anim-item");

if (animItems.length > 0) {
  window.addEventListener("scroll", animationOnScroll);
  function animationOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const height = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animPoit = window.innerHeight - height / animStart;

      if (animPoit > window.innerHeight) {
        animPoit = window.innerHeight - window.innerHeight / animStart;
      }

      if (scrollY > animItemOffset - animPoit && scrollY < animItemOffset + height) {
        animItem.classList.add("animations");
      } else {
        animItem.classList.remove("animations");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    scrollTop = window.scrollX || document.documentElement.scrollTop;
    return { top: rect.top + screenTop, left: rect.left + screenLeft };
  }

  setTimeout(() => {
    animationOnScroll();
  }, 300);
}
