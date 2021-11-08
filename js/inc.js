var count = 0;
var counter = document.querySelector(".number");

counter.innerHTML = count;

document.querySelector("#plus").addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
});

document.querySelector("#minuse").addEventListener("click", () => {
    count--;
    count = (count < 0) ? 0 : count;
    counter.innerHTML = count;
});