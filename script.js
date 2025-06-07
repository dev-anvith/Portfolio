const projects = [
    {
        title: "TrustNet",
        description: "TrustNet is a backend project that provides real-time social proofing services, such as displaying live viewers and recent purchase records. It helps businesses build credibility and boost conversions by showcasing user activity transparently.",
        // backgroundImage: "url('https://picsum.photos/200')"
    },
    {
        title: "Multi KeyWord Spotting",
        description: "Multi-KWS Voice Activation Model with RoPE Transformers achieves 99.3% SOTA accuracy. It delivers precise, low-latency keyword spotting for multiple wake words, perfect for voice-controlled and edge devices.",
        // backgroundImage: "url('https://picsum.photos/200')"
    },
    {
        title: "Scatch",
        description: "Scatch is a backend-focused e-commerce platform for designer bags. It manages user authentication, orders, inventory, and payments securely. The system provides fast, reliable APIs to power a smooth shopping experience.",
        // backgroundImage: "url('https://picsum.photos/200')"
    }
];

const projectsContainer = document.getElementById('projects-container');

function addProject(title, description, backgroundImage) {
    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project-block');
    projectBlock.setAttribute('style', 'height: fit-content;');

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
