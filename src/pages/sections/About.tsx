"use client"
import Link from 'next/link'
import React, { ReactNode, useState } from 'react'

import ImageNext from "next/image";
import { motion } from 'framer-motion';


function About() {
  const [selectedSection, setSelectedSection] = useState('Skills');

  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
  };


const renderContent = (): ReactNode => {
  switch (selectedSection) {

    case 'Skills':
      return (
        <div>
          <p>➼ Programming languages :- Python, Typescript.</p>
          <br/>
          <p>➼ Web Development :- HTML, CSS.</p>
          <br/>
          <p>➼ Framework & Libraries :- Next, React, Seaborn, Matplotlib, Plotly. </p>
          <br/>
          <p>➼ DataBase Management :- SQL.</p>
          <br/>
          <p>➼ Data analysis and visualization:- Tableau, Microsoft Excel, Power BI </p>
          <br/>
        </div>
      );
    case 'Education':
      return (
        <div>
          <p>
            <span style={{ fontSize: 'large' }}>➼ Masters of Science</span>
            <br />
            <span style={{ fontSize: 'medium' }}>{`Liverpool John Moore's University,United Kingdom.`}</span>
            <br />
            <br />
          </p>
          <p>
            <span style={{ fontSize: 'large' }}>➼ Executive Post Graduate Program.</span>
            <br />
            <span style={{ fontSize: 'medium' }}> {`International Institute of Information Technology, Bangalore.`} </span>
            <br />
            <br />
          </p>
          <p>
            <span style={{ fontSize: 'large' }}>➼Bachelors of Engineering</span>
            <br />
            <span style={{ fontSize: 'medium' }}>{`MGM's College of Engineering & Technology, Mumbai.`}</span>
            <br />
            <br />
          </p>
        </div>
      );
    case 'Certification':
      return (
        <div>
          <p>Actively pursuing certifications in my known skills to further enhance my expertise.
          </p>
        </div>
      );
    default:

      return null;
  }
};



  return (
<motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6}}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
 <div className='title'>
 <h2>
  Who I Am 
 </h2>
 </div>
 <div className='about-grid'>
    <div className='about-grid-info'>
    <div className="about-grid">
        <div className="about-grid-info">
        <p className="about-grid-info-text">
  {`Greetings!`}
  <br />
  <br />
  {`I'm Ojas Balsotra, a versatile professional with 4 years of experience spanning front-end development, product management, data analysis, and business analysis.
  In my career, I've spent over 2 years crafting engaging web applications as a front-end developer and have driven projects to success in product management. My data analysis experience includes creating insightful dashboards and deriving actionable insights for BYJUS and WhiteHat Jr. Additionally, I've been involved in requirement gathering, a key aspect of business analysis and taking care of end to end lifecycle of a project.`}
    <br />
    <br />
  {`I’m currently exploring new opportunities where I can leverage my diverse skill set to drive innovation and deliver impactful results. Let’s connect to discuss how I can contribute to your team and help achieve your goals.`}
</p>

          {/* <p className="about-grid-info-text">
          Fast-forward to today, my specialization lies in creating and delivering top-notch Learning solutions that not only meet the understanding of students but also consistently surpass their expectations at {" "}
            <Link href="https://byjus.com/us/math/" className="link" target="_blank">
            BYJUS.            
            </Link>
          </p> */}
          <div className="section-buttons">
  <label className="radio">
    <input
      type="radio"
      name="section"
      checked={selectedSection === 'Skills'}
      onChange={() => handleSectionChange('Skills')}
    />
    <span className="name">Skills</span>
  </label>
  <label className="radio">
    <input
      type="radio"
      name="section"
      checked={selectedSection === 'Education'}
      onChange={() => handleSectionChange('Education')}
    />
    <span className="name">Education</span>
  </label>
  <label className="radio">
    <input
      type="radio"
      name="section"
      checked={selectedSection === 'Certification'}
      onChange={() => handleSectionChange('Certification')}
    />
    <span className="name">Certifications</span>
  </label>
</div>

 <div>{renderContent()}</div>
 </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
          <ImageNext src={"/pic.jpeg"} alt="profile"  fill  />  
          </div>
        </div>
      </div>
    </div>
    </div>
   
     </motion.div>
    
  );
}

export default About;