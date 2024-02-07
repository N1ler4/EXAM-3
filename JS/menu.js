let menu = document.querySelectorAll(".burger-menu");
let menuTwo = document.querySelector(".menu");

menu.forEach(item => {
  item.addEventListener("click", () => {
    if (menuTwo.classList.contains("menu-none")) {
      menuTwo.classList.remove("menu-none");
    } else {
      menuTwo.classList.add("menu-none");
    }
  });
});

