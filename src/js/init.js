window.onload = function () {

    document.getElementById("Preloader").style.display = "none";
    document.getElementById("About").style.display = "none";
    document.getElementById("Contact").style.display = "none";
};
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerButton = document.querySelector("[data-collapse-toggle='navbar-hamburger']");
    const navbarMenu = document.getElementById("navbar-hamburger");

    hamburgerButton.addEventListener("click", function () {
        navbarMenu.classList.toggle("hidden");
        const expanded = navbarMenu.getAttribute("aria-expanded") === "true" || false;
        navbarMenu.setAttribute("aria-expanded", !expanded);
    });
});