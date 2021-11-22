var count = 1;
var counter = document.querySelector(".number");

counter.innerHTML = count;

document.querySelector("#plus").addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
});

document.querySelector("#minuse").addEventListener("click", () => {
    count--;
    count = (count < 1) ? 1 : count;
    counter.innerHTML = count;
});