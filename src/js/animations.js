const animItems = document.querySelectorAll(".anim-item");
console.log(animItems);

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

      if (window.scrollY > animItemOffset - animPoit && window.scrollY < animItemOffset + height) {
        animItem.classList.add("animations");
      } else {
        if (!animItem.classList.contains("anim-no-hide")) {
          animItem.classList.remove("animations");
        }
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect();
    return { top: rect.top + window.scrollX, left: rect.left + window.scrollY };
  }

  setTimeout(() => {
    animationOnScroll();
  }, 300);
}
