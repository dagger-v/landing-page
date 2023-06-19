const lefts = document.querySelectorAll(".left");
const rights = document.querySelectorAll(".right");

window.addEventListener("scroll", checkLefts);
window.addEventListener("scroll", checkRights);

function checkLefts() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  lefts.forEach((left) => {
    const leftTop = left.getBoundingClientRect().top;

    if (leftTop < triggerBottom) {
      left.classList.add("show");
    } else {
      left.classList.remove("show");
    }
  });
}

function checkRights() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  rights.forEach((right) => {
    const rightTop = right.getBoundingClientRect().top;

    if (rightTop < triggerBottom) {
      right.classList.add("show");
    } else {
      right.classList.remove("show");
    }
  });
}
