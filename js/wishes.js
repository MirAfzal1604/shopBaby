"use static";

document.querySelector(".addWish").addEventListener("click", () => {
    var x = document.querySelector(".addWish");
    document.querySelector(".addheart").classList.toggle("added");
    x.classList.toggle("addHidden");
    document.querySelector("#heart").classList.toggle("fas");
    document.querySelector("#heart").classList.toggle("heart_clicked");

    if (x.innerHTML === "💛 add to wishlist") {
        x.innerHTML = "Added to wishlist";
    } else {
        x.innerHTML = "💛 add to wishlist";
    }
});