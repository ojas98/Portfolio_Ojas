import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { League_Spartan } from "next/font/google";

function Projects() {
    const [currentCategory, setCurrentCategory] = useState("ALL");
    const [visibleProjects, setVisibleProjects] = useState(2);
   
      
  const projectsData = [
    {
      image: "/pls.png",
      projectName: "LeadScore Pro",
      projectLink: "https://netlify.com",
      projectDescription:
        "Predictive Lead Scoring for Enhanced Conversion Rates.",
      projectTech: [
        "Python",
        "Seaborn",
        "Matplotlib ",
        "Pandas",
      ],
      projectExternalLinks: {
        github: "https://github.com/ojas98/Lead_Scoring_Case_Study",
        externalLink: "",
      },
      projectCategory: "Data Science",
    },

    {
      image: "/mmm.png",
      projectName: "MarketMix Master",
      projectLink: "https://netlify.com",
      projectDescription: "Optimizing Marketing Budget Allocation for ElecKart's <br /> Product Categories.",

      projectTech: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Seaborn",
        "SciPy",
      ],
      projectExternalLinks: {
        github: "https://github.com/ojas98/Market-Mix-Master",
        externalLink: "",
      },
      projectCategory: "Data Science",
    },

    {
        image: "/mmm.png",
        projectName: "MarketMix Master",
        projectLink: "https://netlify.com",
        projectDescription: "Optimizing Marketing Budget Allocation for ElecKart's <br /> Product Categories.",
  
        projectTech: [
          "Python",
          "Pandas",
          "Matplotlib",
          "Seaborn",
          "SciPy",
        ],
        projectExternalLinks: {
          github: "https://github.com/ojas98/Market-Mix-Master",
          externalLink: "",
        },
        projectCategory: "Development",
      },
   
  ];
  const filteredProjects = projectsData.filter((project) => {
    return currentCategory === "ALL" || project.projectCategory === currentCategory;
  });

  const loadMoreProjects = () => {
    setVisibleProjects(visibleProjects + 1); // Adjust the number as needed
  };

 return (
  <div className="projects" id="work">
    <motion.div className="title" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ visible: { opacity: 1, y: -50 }, hidden: { opacity: 0, y: 0 } }}>
      <h2>Some Things I’ve Built</h2>
      <div className="category-buttons">
        <label className="radio">
          <input type="radio" name="category" checked={currentCategory === "ALL"} onChange={() => setCurrentCategory("ALL")} />
          <span className="name">All</span>
        </label>
        <label className="radio">
          <input type="radio" name="category" checked={currentCategory === "Data Science"} onChange={() => setCurrentCategory("Data Science")} />
          <span className="name">Data Science</span>
        </label>
        <label className="radio">
          <input type="radio" name="category" checked={currentCategory === "Development"} onChange={() => setCurrentCategory("Development")} />
          <span className="name">Development</span>
        </label>
      </div>
      </motion.div>

    <div className="projects-container">
      {filteredProjects.slice(0, visibleProjects).map(({ image, projectDescription, projectLink, projectExternalLinks, projectName, projectTech }) => {
        return (
          <motion.div key={projectName} className="project" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.6 }} variants={{ visible: { opacity: 1, y: -50 }, hidden: { opacity: 0, y: 0 } }}>
            <div className="project-image">
              <div className="project-image-overlay"></div>
              <div className="project-image-container">
                <Image src={image} fill alt={projectName} quality={100} />
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-info-title">{projectName}</h3>
              <div className="project-info-description">
                <p dangerouslySetInnerHTML={{ __html: projectDescription }}></p>
              </div>
              <ul className="project-info-tech-list">
                {projectTech.map((tech) => (
                  <li className="project-info-tech-list-item" key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
              <ul className="project-info-links">
                <li className="project-info-links-item">
                  <Link href={projectExternalLinks.github} className="project-info-links-item-link">
                    <FiGithub />
                  </Link>
                </li>
                <li className="project-info-links-item">
                  <Link href={projectExternalLinks.externalLink} className="project-info-links-item-link">
                    <FiExternalLink />
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
        );
      })}

{filteredProjects.length <= visibleProjects ? (
  <div className="construction-message">
    <p>More Projects are under Construction, Stay Tuned!!</p>
  </div>
) : (
  <div className="load-more-button">
  <button className="button" onClick={loadMoreProjects}>
    <svg className="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
    </svg>
    Explore More
  </button>
</div>
)}


    </div>
  
  </div>

);

}

export default Projects;