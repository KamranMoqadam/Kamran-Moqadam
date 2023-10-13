const LSItems = document.querySelectorAll('#LeftSidebar li');
const navbarItems = document.querySelectorAll('#Navbar li');

const contentDivs = document.querySelectorAll('#main > div');
let arr =Array.from(contentDivs)
let contentDiv =arr.slice(2)


LSItems.forEach(item => {
    item.addEventListener('click', function () {
        // Hide all content divs
        contentDiv.forEach(div => {
            div.style.display = "none";
        });

        const contentId = item.id.slice(3);
        const contentToDisplay = document.getElementById(contentId);

        if (contentToDisplay) {
            contentToDisplay.style.display = "flex";
        }
    });
});

navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        // Hide all content divs
        contentDiv.forEach(div => {
            div.style.display = "none";
        });

        const contentId = item.id.slice(3);
        const contentToDisplay = document.getElementById(contentId);

        if (contentToDisplay) {
            contentToDisplay.style.display = "flex";
        }
    });
});
