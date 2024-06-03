document.addEventListener("DOMContentLoaded", function() {

    const projectsPath = "./assets/projects/";

    const myProjects = {
        memes: {
            images: ["memes-p1.png", "memes-p2.png", "memes-p3.png", "memes-p4.png"], 
            projectLink: "https://github.com/Pako2425/App_for_memes"
        },

        reelinsight: {
            images: ["reelinsight-p1.png", "reelinsight-p2.png", "reelinsight-p3.png", "reelinsight-p4.png", "reelinsight-p5.png", "reelinsight-p6.png", "reelinsight-p7.png"],
            projectLink: "https://github.com/Pako2425/Reel-Insight-Movie-Details-at-Your-Fingertips"
        },

        calculator: {
            images: ["currency-calculator-p1.png", "currency-calculator-p2.png"],
            projectLink: "https://github.com/Pako2425/currency-calculator"
        },

        others: {
            images: ["others-p1.png"],
            projectLink: "https://github.com/Pako2425/"
        }
    };                         

    document.getElementById('webapp-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('mobileapp-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('other-btn').addEventListener('click', handleProjectCategoryEvents);
    document.getElementById('webapp-btn').classList.add('active');
    document.getElementById('webapp-project').style.display="flex";
    document.getElementById('mobileapp-project').style.display="none";
    document.getElementById('other-project').style.display="none";

    const projectContainers = document.querySelectorAll('.project-container');
    projectContainers.forEach((project) => {
        project.addEventListener('click', (event) => {
            handleDetails(event);
        });
    });

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
        
        blockingLayer.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    }

    function closeDetailsWindow(event) {
        const blockingLayer = document.getElementById("project-details-window-background");
        const detailsWindow = document.getElementById("project-details-window");
        blockingLayer.style.display="none";
        detailsWindow.style.display="none";
    }

    function loadSmallProjectImages(projectName) {
        const smallImagesContainer = document.querySelector('.details-window-small-images-container');
        smallImagesContainer.innerHTML = "";
        myProjects[projectName].images.forEach((image) => {
            const path = projectsPath + projectName + "/" + image;
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('details-window-small-image-container');
            imageContainer.setAttribute('id', image);
            imageContainer.addEventListener('click', (event) => handleSmallImages(event));
            const img = document.createElement('img');
            img.src = path;
            img.classList.add('small-photo');
            imageContainer.appendChild(img);
            smallImagesContainer.appendChild(imageContainer);
        });
    }

    function loadMainProjectImage(projectName) {
        const imageContainer = document.querySelector('.details-window-main-image-container');
        imageContainer.innerHTML = "";
        const imageLink = document.createElement('a');
        imageLink.href = myProjects[projectName].projectLink;
        
        const mainImage = document.createElement('img');
        mainImage.src=document.querySelector('.small-photo').src;
        mainImage.alt="image";
        mainImage.setAttribute('class', 'details-window-main-image');
        imageLink.appendChild(mainImage);
        imageContainer.appendChild(imageLink);
        console.log("done")
    }

    function loadProjectImages(projectName) {
        loadSmallProjectImages(projectName);
        loadMainProjectImage(projectName);
    }

    function handleDetails(event) {
        openDetailsWindow(event);
        loadProjectImages(event.currentTarget.id);
    }

    function handleSmallImages(event) {
        const mainImage = document.querySelector('.details-window-main-image');
        const path = mainImage.src;
        const ar = path.split('/');
        ar[ar.length - 1] = event.currentTarget.id;
        const newPath = ar.join('/');
        mainImage.src = newPath;
    }

});
