function rate(e) {
    const stars = document.querySelectorAll(".star");
    [...stars].map((star) => star.classList.remove("hoverd"));
    e.classList.add("hoverd");
    e.getAttribute("date-value") - 1;
}