import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Byjus",
      role: "Senior Application Developer",
      url: "https://byjus.com/us/math/",
      start: "April 2022",
      end: "Present",
      shortDescription: [
        'I took the lead in developing an innovative web application for the BYJUs US website, skillfully leveraging the capabilities of ReactJS and the Geogebra API to deliver an unparalleled educational resource. I collaborated closely with cross-functional teams to create dynamic and interactive concept applets, ensuring an exceptional learning experience for students.',
        `I oversaw the entire lifecycle of applet development, from conceptualization and wire-framing to asset design, applet development, quality assurance testing, and platform publication. This comprehensive approach streamlined the process and fostered collaboration among various teams.`,
        `I also implemented and rolled out enhanced development practices for the team, with a focus on boosting productivity and product quality. This included guidelines for code readability, timeline estimates, adoption of Agile development methodologies, Git version control, and the integration of Product Management tools.`,
        `My primary goal was to maintain a product that was completely free of bugs. To achieve this, I devised and executed improvements in the applet creation and testing processes, resulting in a remarkable 70% reduction in QA failures, a 60% decrease in production failures, and an 80% reduction in error tickets compared to other performance grades.`,
       ]
    },
    {
      name: "WhiteHat Jr",
      role: "Application Developer",
      url: "https://www.whitehatjr.com/",
      start: "December 2020",
      end: "March 2022",
      shortDescription: [
      'I developed and rigorously tested meticulously crafted educational applets for the Create with Math Product using the GeoGebra and Cocos2D (Game Engine) Platform, all of which involved extensive use of the Typescript programming language',
      `Furthermore, I undertook the task of diagnosing, enhancing, and expanding the existing 'Create with Math' platform applets. This process involved pinpointing opportunities for code optimization and incorporating fresh and captivating features to improve the overall user experience.`,
      `In addition, I actively identified key breakpoints and ensured regular updates for the applets. I collaborated closely with illustrators and designers to seamlessly translate intricate UI designs into a flawlessly responsive web-based user interface, maintaining pixel-perfect precision throughout.`,
       ]
    },
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;