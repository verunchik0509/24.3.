const imageCon = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
let timer = null;
prevEl.addEventListener("click", () => {
    x += 45;
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    }
    updateImage();
});
nextEl.addEventListener("click", () => {
    x -= 45;
    if (timer !== null) {
        clearTimeout(timer);
        timer = null;
    }
    updateImage();
});
function updateImage() {
    imageCon.style.transform = perspective(1000px) rotateY(${x}deg);
    timer = setTimeout(() => {
        x -= 45;
        updateImage();
    }, 3000);
}
updateImage();
