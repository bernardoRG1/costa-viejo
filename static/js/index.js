const navToggle = document.querySelector(".nav-toggle")
const navToggleicon = document.querySelector(".nav-toggle i")
const dropDownMenu = document.querySelector(".dropdown_menu")

navToggle.onclick = function (){
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    navToggleicon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"

}