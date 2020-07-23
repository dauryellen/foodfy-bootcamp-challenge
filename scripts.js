const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const recipes = document.querySelectorAll(".card");

for (let recipe of recipes) {
  recipe.addEventListener("click", () => {
    modalOverlay.classList.add("active");
  });
}

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});
