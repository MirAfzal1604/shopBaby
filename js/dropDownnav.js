document.querySelector("#btn_dropdown_li").onclick = function() {
    dropDownLi()
};

document.querySelector("#btn_dropdown_li2").onclick = function() {
    dropDownLiSecond()
};

document.querySelector(".burger").onclick = function() {
    apper()
    toggleBurger()
};

function dropDownLi() {
    document.querySelector(".dropdown_li").classList.toggle("dropdown_li_show");
    document.querySelector(".li_arrow").classList.toggle("arrow_anime");
}

function dropDownLiSecond() {
    document.querySelector(".dropdown_li2").classList.toggle("dropdown_li2_show");
    document.querySelector(".li_arrow2").classList.toggle("arrow_anime2");
}

function apper() {
    document.querySelector(".category").classList.toggle("category_disapper");
}

function toggleBurger() {
    document.querySelector(".burger").classList.toggle("change");
    document.querySelector(".burger").classList.toggle("burgerColor");
}