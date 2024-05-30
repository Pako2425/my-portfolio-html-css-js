const projectsPath = "./assets/projects/";

//document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryButtons);
//document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryButtons);
//document.getElementById('other-btn').addEventListener('click', handleProjectCategoryButtons);
//document.getElementById('webapp-btn').classList.add('active');

document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryEvents);
document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryEvents);
document.getElementById('other-btn').addEventListener('click', handleProjectCategoryEvents);
document.getElementById('webapp-btn').classList.add('active');
document.getElementById('webapp-project').style.display="flex";
document.getElementById('mobileapp-project').style.display="none";
document.getElementById('other-project').style.display="none";

function handleProjectCategoryEvents(event) {
    handleProjectCategoryButtons(event);
    const webappCategory = document.getElementById('webapp-project');
    const mobileappCategory = document.getElementById('mobileapp-project');
    const otherCategory = document.getElementById('other-project');

    webappCategory.style.display="none";
    mobileappCategory.style.display="none";
    otherCategory.style.display="none";
    
    if(event.target.id == "webapp-btn") {
        webappCategory.style.display="flex";
    }
    else if(event.target.id == "mobileapp-btn") {
        mobileappCategory.style.display="flex";
    }
    else if(event.target.id == "other-btn") {
        otherCategory.style.display="flex";
    }
}

function handleProjectCategoryButtons(event) {
    const buttons = document.querySelectorAll(".project-category-btn");

    buttons.forEach(button => {
        button.classList.remove("active");
    });

    event.target.classList.add("active");
    console.log("dfsdfds");
}

function handleProjectDetailsWindow(event) {

}
