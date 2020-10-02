const burger = document.querySelector("#user_action_menu");
const exitBtn = document.querySelector(".exit_btn");
const menuArea = document.querySelector(".top_menu_area");

burger.addEventListener("click", () => {
  menuArea.classList.remove("navbar_hide");
  menuArea.classList.add("navbar_open");
});
exitBtn.addEventListener("click", () => {
  menuArea.classList.add("navbar_hide");
  menuArea.classList.remove("navbar_open");
});

const searchArea = document.querySelector(".top_search_area");
const search = document.querySelector("#user_action_search");
const searchExit = document.querySelector("#searchExit");

search.addEventListener("click", () => {
    searchArea.classList.remove("navbar_hide")
    searchArea.classList.add("navbar_open")
});
searchExit.addEventListener("click", () => {
    searchArea.classList.remove("navbar_open")
    searchArea.classList.add("navbar_hide")
});
