const projects = [
    {
        title: "Project 1",
        description: "coming soon.",
        // backgroundImage: "url('https://picsum.photos/200')"
    },
    {
        title: "Project 2",
        description: "coming soon.",
        // backgroundImage: "url('https://picsum.photos/200')"
    },
    {
        title: "Project 3",
        description: "coming soon.",
        // backgroundImage: "url('https://picsum.photos/200')"
    }
];

const projectsContainer = document.getElementById('projects-container');

function addProject(title, description, backgroundImage) {
    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project-block');
    // projectBlock.style.backgroundImage = backgroundImage;
    
    projectBlock.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <button>Check it out</button>
    `;
    
    projectsContainer.appendChild(projectBlock);
}

// Add initial projects with background images
projects.forEach(project => addProject(project.title, project.description, project.backgroundImage));
