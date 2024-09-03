import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Link from "next/link";
import Button from '../components/Button';
import SocialIcons from '../components/SocialIcons';
import ReactGA from 'react-ga4';

import { CgMenuRound } from "react-icons/cg";
import { SlClose } from "react-icons/sl";
import { motion } from "framer-motion";

function Navbar() {

  const [navbarVisible, setNavbarVisible] = useState(false);
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false);


  const handleLogoClick = () => {
    window.location.reload();
  };

  const sectionLinks = [
    { name: "Who I Am", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];


  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100
        ? setNavbarVisible(true)
        : setNavbarVisible(false);
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll(".nav-items-list-item-link");
    links.forEach((link) => {
      link.addEventListener("click", () => setResponsiveNavVisible(false));
    });
    const nav = document.querySelector(".nav-items");
    nav?.addEventListener("click", (e) => {
      e.stopPropagation();
    });
    const html = document.querySelector("html");
    html?.addEventListener("click", (e) => {
      setResponsiveNavVisible(false);
    });
  }, []);

  useEffect(() => {
    const main = document.querySelector("main");

    if (responsiveNavVisible) {
      main?.classList.add("blur");
    } else {
      main?.classList.remove("blur");
    }
  }, [responsiveNavVisible]);

  const handleButtonClickResume = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'Clicked on Resume Button',
    });
    console.log('Analytics Event Sent 2');
  };

  const handleButtonClicknavbutton = () => {
    ReactGA.event({
      category: 'About',
      action: 'Clicked on About Button',
    });
    console.log('Analytics Event Sent 1');
  };


  useEffect(() => {
    ReactGA.initialize('G-V4772H1PHH');
    ReactGA.send('pageview');
  }, []);


  return (
    <nav>
      <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
        <motion.div
          className="brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="brand" onClick={handleLogoClick}>
            <a> <Logo /> </a>
          </div>
        </motion.div>
        <motion.div
          className="nav-responsive-toggle"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {responsiveNavVisible ? (
            <SlClose style={{ fontSize: '35px' }}
              onClick={(e: { stopPropagation: () => void; }) => {
                e.stopPropagation();
                setResponsiveNavVisible(false);
              }}
            />
          ) : (
            <CgMenuRound style={{ fontSize: '35px' }}
              onClick={(e: { stopPropagation: () => void; }) => {
                e.stopPropagation();
                setResponsiveNavVisible(true);
              }}
            />
          )}
        </motion.div>

        <div
          className={`${responsiveNavVisible && "nav-responsive"} nav-items`}
        >

          <ul className="nav-items-list" onClick={handleButtonClicknavbutton}>
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="nav-items-list-item"
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.3 + index * 0.1,
                }}
              >
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
          <motion.div
            className="nav-items-button"
            initial={{ opacity: 0, y: -125 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.6,
            }}
          >
            <button className="button" type="button" onClick={handleButtonClickResume}>
              <span className="button__text">Resume</span>
              <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
            </button>
          </motion.div>
          {responsiveNavVisible && <SocialIcons responsiveNavVisible={responsiveNavVisible} />}

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
