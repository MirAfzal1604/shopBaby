"use static";

document.querySelector(".addWish").addEventListener("click", () => {
    var x = document.querySelector(".addWish");
    document.querySelector(".addheart").classList.toggle("added");
    x.classList.toggle("addHidden");
    document.querySelector("#heart").classList.toggle("fas");
    document.querySelector("#heart").classList.toggle("heart_clicked");

    if (x.innerHTML === "💛 добавить в список желаний") {
        x.innerHTML = "Добавлено в список желаний";
    } else {
        x.innerHTML = "💛 добавить в список желаний";
    }
});