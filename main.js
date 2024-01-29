


const menu_Icon = document.querySelector(".menu-icon-two");
const close_Icon = document.querySelector(".close-icon-two");
const smallMenuContainer = document.querySelector(".small-menu-container");

menu_Icon.addEventListener("click", () => {
    smallMenuContainer.classList.add("active");
});

close_Icon.addEventListener("click", () => {
    smallMenuContainer.classList.remove("active");
});
