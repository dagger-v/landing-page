const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkboxes);

function checkboxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function changeImage(imageSrc) {
  let image = document.getElementById("main-image");
  image.style.opacity = 0;

  image.addEventListener("transitionend", function () {
    image.src = imageSrc;
    image.removeEventListener("transitionend", arguments.callee);
  });

  setTimeout(function () {
    image.style.opacity = 0;
  }, 50);
}

function handleImageLoad() {
  let image = document.getElementById("main-image");
  image.style.opacity = 1;
}
