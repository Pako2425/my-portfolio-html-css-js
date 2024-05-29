const projectsPath = "./assets/projects/";

document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryButtons);
document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryButtons);
document.getElementById('other-btn').addEventListener('click', handleProjectCategoryButtons);
document.getElementById('webapp-btn').classList.add('active');

function handleProjectCategoryButtons(event) {
    const buttons = document.querySelectorAll(".project-category-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
    
    console.log(buttons);
}