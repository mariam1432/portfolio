const projectData = [
  {
    id: 1,
    title: "Yummyano - Recipe Manager",
    description:
      "A MERN stack recipe management app with an admin panel to create, update, and organize recipes, ingredients, and categories. Includes image uploads, category filtering, and responsive layouts for all devices. Currently adding advanced features like user authentication and personalized recipe collections.",
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
      "An animated, modern landing page for a production company using HTML, CSS, JavaScript, and GSAP. Features smooth scroll-triggered animations, layered image effects, and mobile-friendly design for an engaging user experience.",
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
      "Restaurant landing page with a stylish menu section, image gallery, and smooth fade animations via jQuery. Optimized for performance and fully responsive to work on phones, tablets, and desktops.",
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
      "A clean real estate landing page with GSAP-based scroll animations, property showcase sections, and a responsive grid layout. Built for elegant presentation and mobile-friendly browsing.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./LuxuryHomes.PNG",
  },
  {
    id: 5,
    title: "Blogify - Blogging Platform",
    url: "https://blogify.kesug.com/",
    description:
      "Full-stack blogging platform with user authentication, blog creation/editing, category management, and a searchable blog list. Features an admin panel for content moderation and a fully responsive front-end.",
    techStack: ["HTML", "CSS", "PHP", "MySQL"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./Blogify.PNG",
  },
  {
    id: 6,
    title: "ArabStar - Car Rental Website",
    url: "https://arabstarcarrentals.com/",
    description:
      "A production-ready car rental platform with dynamic filtering by brand, category, and subcategory. Built with React.js, Tailwind CSS, and Strapi CMS for easy content management. Includes responsive layouts, API integration, and optimized load performance.",
    techStack: ["React.js", "Tailwind CSS", "Strapi"],
    clientProject: true,
    status: "Completed",
    imgUrl: "./Rotanastar.PNG",
  },
  {
    id: 7,
    title: "Urban Store - E-commerce Website",
    url: "https://urban-store-seven.vercel.app/",
    description:
      "A fully responsive e-commerce store built with React, TypeScript, and Context API. Implements cart functionality, checkout logic, and dynamic product rendering. Optimized for performance and mobile-first shopping experiences.",
    techStack: ["React", "TypeScript", "Context API", "Tailwind CSS"],
    clientProject: false,
    status: "Completed",
    imgUrl: "./urbanstore.PNG",
  },
];

const skillsData = [
  "HTML, CSS & Responsive Design",
  "JavaScript (ES6+), TypeScript",
  "React.js (Web & Native), Next.js",
  "TailwindCSS, Material UI, GSAP",
  "Node.js, Express, REST APIs",
  "MongoDB, MySQL",
  "Git & GitHub",
  "Figma",
  "PHP (Basics)",
  "jQuery",
];
document.addEventListener("DOMContentLoaded", function () {
  const bentoGrid = document.querySelector(".bento-grid");
  if (!bentoGrid) {
    console.error("Could not find bento-grid element");
    return;
  }
  bentoGrid.innerHTML = "";
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
