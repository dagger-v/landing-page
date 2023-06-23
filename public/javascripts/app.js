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
  image.src = imageSrc;
}
