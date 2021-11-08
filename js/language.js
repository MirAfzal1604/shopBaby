document.querySelector("#btnlanguage").onclick = function() {
    dropDown()
};

function dropDown() {
    document.querySelector(".dropdown_content").classList.toggle("show");
}