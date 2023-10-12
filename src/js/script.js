const navbarItems = document.querySelectorAll('.navbar li');
const contentDivs = document.querySelectorAll('#content > div');

navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        // Hide all content divs
        contentDivs.forEach(div => {
            div.classList.add('hidden');
        });

        const contentId = `${item.id}Content`;
        const contentToDisplay = document.getElementById(contentId);

        if (contentToDisplay) {
            contentToDisplay.classList.remove('hidden');
        }
    });
});
