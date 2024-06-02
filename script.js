document.addEventListener("DOMContentLoaded", function() {

    const projectsPath = "./assets/projects/";

    document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('other-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('webapp-btn').classList.add('active');
    document.getElementById('webapp-project').style.display="flex";
    document.getElementById('mobileapp-project').style.display="none";
    document.getElementById('other-project').style.display="none";

    document.getElementById('memes-webapp').addEventListener('click', openDetailsWindow);
    document.getElementById('close-window').addEventListener('click', closeDetailsWindow);

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
    }

    function openDetailsWindow(event) {
        const blockingLayer = document.getElementById("project-details-window-background");
        const detailsWindow = document.getElementById("project-details-window");

        blockingLayer.style.display="flex";
        detailsWindow.style.display="flex";
        
        //blockingLayer.addEventListener('click', (event) => {
        //    event.stopPropagation();
        //});
    }

    function closeDetailsWindow(event) {
        const blockingLayer = document.getElementById("project-details-window-background");
        const detailsWindow = document.getElementById("project-details-window");

        blockingLayer.style.display="none";
        detailsWindow.style.display="none";
    }

});