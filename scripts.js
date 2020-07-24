const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const recipes = document.querySelectorAll(".card");

for (let recipe of recipes) {
  recipe.addEventListener("click", () => {
    const image = recipe.querySelector("img").getAttribute("src");
    const alt = recipe.querySelector("img").getAttribute("alt");
    const h3Title = recipe.querySelector("h3").innerText;
    const pAuthor = recipe.querySelector("p").innerText;

    modalOverlay.classList.add("active");
    modalOverlay.querySelector("img").src = image;
    modalOverlay.querySelector("img").alt = alt;
    modalOverlay.querySelector("h3").innerHTML = h3Title;
    modalOverlay.querySelector("p").innerHTML = pAuthor;
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
