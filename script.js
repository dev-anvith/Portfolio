const projects = [
    {
        title: "TrustNet",
        description: "TrustNet is a backend project that provides real-time social proofing services, such as displaying live viewers and recent purchase records. It helps businesses build credibility and boost conversions by showcasing user activity transparently.",
        url:"https://github.com/dev-anvith/TrustNet"
    },
    {
        title: "Multi KeyWord Spotting",
        description: "Multi-KWS Voice Activation Model with RoPE Transformers achieves 99.3% SOTA accuracy. It delivers precise, low-latency keyword spotting for multiple wake words, perfect for voice-controlled and edge devices.",
        url:"#"
    },
    {
        title: "Scatch",
        description: "Scatch is a backend-focused e-commerce platform for designer bags. It manages user authentication, orders, inventory, and payments securely. The system provides fast, reliable APIs to power a smooth shopping experience.",
         url:"https://github.com/dev-anvith/scatch"
    }
];

const projectsContainer = document.getElementById('projects-container');

function addProject(title, description, url) {
    const projectBlock = document.createElement('div');
    projectBlock.classList.add('project-block');
    projectBlock.setAttribute('style', 'height: fit-content;');

    // projectBlock.style.backgroundImage = backgroundImage;

 projectBlock.innerHTML = `
  <h3>${title}</h3>
  <p>${description}</p>
  <button class="read-more-btn">
    <a href="${url}" >Check it out</a>
  </button>
`;



    projectsContainer.appendChild(projectBlock);
}

// Add initial projects with background images
projects.forEach(project => addProject(project.title, project.description, project.url));
