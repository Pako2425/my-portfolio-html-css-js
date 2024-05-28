function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryButtons);
document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryButtons);
document.getElementById('other-btn').addEventListener('click', handleProjectCategoryButtons);

function handleProjectCategoryButtons(event) {
    const buttons = document.querySelectorAll(".project-category-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
    
    console.log(buttons);
}