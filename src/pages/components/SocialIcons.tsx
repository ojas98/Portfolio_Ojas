import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
    FiInstagram,
  } from "react-icons/fi";

  import {BsLinkedin,BsGithub,BsWhatsapp} from "react-icons/bs"

  import {
    RiTwitterXLine, 
    
  } from "react-icons/ri"
import { motion } from "framer-motion";
  

function SocialIcons({ responsiveNavVisible }: { responsiveNavVisible: boolean }) {
  
        const socialLinks = [
            {
                name: "LinkedIn",
                icon: <BsLinkedin />,
                link: "https://www.linkedin.com/in/ojasbalsotra/",
              },
              {
                name: "Instagram",
                icon: <FiInstagram />,
                link: "https://instagram.com/ojas_320",
              },
              {
                name: "Twitter",
                icon: <RiTwitterXLine />,
                link: "https://x.com/BalsotraOjas",
              },
          { name: "Github", icon: <BsGithub />, link: "https://github.com/ojas98" },
          // { name: "WhatsApp", icon: <BsWhatsapp />, link: "https://github.com/ojas98" },
        ];
    
   
        
  return (
    <motion.div
    className={`social-icons ${responsiveNavVisible ? 'responsive' : ''}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      ease: 'easeInOut',
      delay: 0.3,
    }}
  >
    
        <ul className="social-icons-list">
          {socialLinks.map(({ name, icon, link }) => (
            <li key={name} title={name} className="social-icons-list-item">
              <Link
                href={link}
                className="social-icons-list-item-link"
                target="_blank"
              >
                {icon}
              </Link>
            </li>
          ))}
        </ul>
      
    </motion.div>
  );
}

export default SocialIcons
