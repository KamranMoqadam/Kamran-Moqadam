document.addEventListener("DOMContentLoaded", function () {
    var contentDivs = document.querySelectorAll(".content");
    contentDivs.forEach(function (div) {
        div.style.display = "none";
    });

    var homeDiv = document.getElementById("home");
    homeDiv.style.display = "block";
});

var menuItems = document.querySelectorAll("nav a");
menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
        e.preventDefault();

        contentDivs.forEach(function (div) {
            div.style.display = "none";
        });

        var targetId = menuItem.getAttribute("href").substring(1);
        var targetDiv = document.getElementById(targetId);
        targetDiv.style.display = "block";
    });
});
