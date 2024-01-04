import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Hero() {
    const phrases = ["Development.", "Data Science.", ""];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < phrases[currentPhraseIndex].length) {
          setCurrentPhrase(phrases[currentPhraseIndex].slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentPhrase(phrases[currentPhraseIndex].slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsTyping(true);
          setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        }
      }
    }, 100); // Adjust the typing speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [currentPhraseIndex, currentIndex, isTyping]);

  // CSS class for the cursor
  const cursorClass = isTyping ? "cursor blink" : "cursor";
  return (
    <div className='hero'>
       <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        {`Hello, I'm `}
        </motion.h1>
        <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
      Ojas Balsotra.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
    Versatile with expertise in {currentPhrase}
    </motion.h3>
    <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}>My enthusiasm lies in conceiving and constructing groundbreaking solutions.
      Presently, my primary focus revolves around crafting inclusive and captivating educational experiences within the realm of <Link href="https://byjus.com/us/math/" target="_blank" className="link">
          BYJUS
        </Link>. Explore my work and projects to discover how i bring tech to life and craft engaging digital experiences. </motion.p>
       
    </div>
    
  )
}

export default Hero
