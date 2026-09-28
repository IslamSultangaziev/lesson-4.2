//1//
let count = 0;

const counter = document.querySelector("#counter");
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");

increment.addEventListener("click", function () {
    count = count + 1;

    counter.textContent = count;
    counter.style.color = "green";
});

decrement.addEventListener("click", function () {
    if (count > 0) {
        count = count - 1;

        counter.textContent = count;
        counter.style.color = "red";
    }
});

//2//
const box = document.querySelector("#box");

box.addEventListener("mousemove", function (event) {
    const x = event.offsetX;
    const y = event.offsetY;

    box.textContent = `x: ${x} y: ${y}`;
});
//3//
const colorInput = document.querySelector("#colorInput");

colorInput.addEventListener("input", function () {
    document.body.style.backgroundColor = colorInput.value;
});