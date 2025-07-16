const projectData = [
  {
    id: 1,
    title: "Yummyano - Recipe Manager",
    url: "", //
    description:
      "A recipe management application built with the MERN stack. Yummyano features a fully functional admin panel to manage recipes, ingredients, and categories. The project is currently in development with more advanced features being added. All views are fully responsive.",
    video: "",
    screenshots: [""], // Add URLs to screenshots
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    clientProject: false,
    status: "In Progress",
    imgUrl: "./Yummyano.PNG",
  },
  {
    id: 2,
    title: "CamCrew - Production Company Landing Page",
    url: "https://mariam1432.github.io/camcrew/",
    description:
      "A modern and animated landing page for a production company named CamCrew. Built using HTML, CSS, JavaScript, and GSAP to deliver smooth animations and an engaging user experience. The website is fully responsive across all screen sizes.",
    video: "",
    screenshots: [""],
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./Camcrew.PNG",
  },
  {
    id: 3,
    title: "Gourmet Haven - Restaurant Landing Page",
    url: "https://mariam1432.github.io/gourment-haven/",
    description:
      "Landing page for a restaurant called Gourmet Haven. Designed using HTML, CSS, JavaScript, and jQuery for subtle animations. Fully responsive and optimized for all devices.",
    video: "",
    screenshots: [""],
    techStack: ["HTML", "CSS", "JavaScript", "jQuery"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./Gourmenthaven.PNG",
  },
  {
    id: 4,
    title: "Luxury Homes - Real Estate Landing Page",
    url: "https://mariam1432.github.io/luxury-homes/",
    description:
      "A clean and elegant landing page for a real estate agency called Luxury Homes. Created using HTML, CSS, JavaScript, and GSAP animations. The site is fully responsive and visually polished.",
    video: "",
    screenshots: [""],
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./LuxuryHomes.PNG",
  },
  {
    id: 5,
    title: "Blogify - Blogging Platform",
    url: "",
    description:
      "A full-stack blogging platform built with HTML, CSS, and PHP. Includes a fully functional admin panel to manage blogs and categories. Users can create accounts, publish blogs, and browse content. The layout is fully responsive.",
    video: "",
    screenshots: [""],
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./Blogify.PNG",
  },
  {
    id: 6,
    title: "RotanaStar - Car Rental Website",
    url: "",
    description:
      "A car rental platform built for a real client using React.js, Tailwind CSS, and Strapi CMS for the backend. Users can browse and filter cars by brand, category, and subcategory. Fully responsive with pagination enabled where necessary.",
    video: "",
    screenshots: [""],
    techStack: ["React.js", "Tailwind CSS", "Strapi"],
    clientProject: true,
    status: "Completed",
    imgUrl: "./Rotanastar.PNG",
  },
];
const skillsData = [
  "HTML",
  "CSS",
  "Responsive Web Design",
  "JavaScript",
  "TypeScript",
  "Jquery",
  "ReactJs",
  "NextJs",
  "React Native",
  "GSAP",
  "TailwindCSS",
  "Material UI",
  "Git & GitHub",
  "PHP (Basics)",
  "MySQL",
  "REST APIs",
  "RTKQuery",
  "MongoDB",
  "Node.js / Express",
  "Figma (Basics)",
];
document.addEventListener("DOMContentLoaded", function () {
  const bentoGrid = document.querySelector(".bento-grid");
  if (!bentoGrid) {
    console.error("Could not find bento-grid element");
    return;
  }
  // Clear existing content (optional)
  bentoGrid.innerHTML = "";
  // Generate project cards from data
  projectData.forEach((project) => {
    const projectCard = createProjectCard(project);
    projectCard.addEventListener("click", () => {
      project.url && project.url.length > 0
        ? window.open(project.url, "_blank")
        : alert("Coming soon!");
    });
    bentoGrid.appendChild(projectCard);
  });
  const skillTags = document.querySelector(".skill-tags");
  if (!skillTags) {
    console.log("could not find skill tags element");
    return;
  }
  skillTags.innerHTML = "";
  skillsData.forEach((skill) => {
    const skillTag = createSkillTag(skill);
    skillTags.appendChild(skillTag);
  });
});

function createSkillTag(skill) {
  const tag = document.createElement("span");
  tag.className = "skill-tag";
  tag.innerHTML = `${skill}`;
  return tag;
}
function createProjectCard(project) {
  const card = document.createElement("div");
  card.className = "project-card"; // Only one class
  card.innerHTML = `
    <img
      src="${project.imgUrl}"
      alt="${project.title}"
      class="project-image"
    />
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">
        ${project.description}
      </p>
      ${
        project.techStack && project.techStack.length > 0
          ? `
        <div class="project-tags">${project.techStack
          .map((tech) => `<span class="project-tag">${tech}</span>`)
          .join("")}
        </div>
      `
          : ""
      }
    </div>
  `;
  return card;
}
