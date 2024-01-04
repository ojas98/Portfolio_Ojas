import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import Lottie from 'lottie-react';
import ContactAnimation from '@/pages/assets/animation.json';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_nk3yhwl', 'template_sippghr', form.current, 'SbtX2iFBO5kRT53f4')
        .then((result) => {
          console.log(result.text);
          console.log("Message Sent")
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="contact" id="contact">
      <motion.div
        className="title"
        initial="hidden"
        animate="visible"
        variants={{ visible: { opacity: 1, y: -50 }, hidden: { opacity: 0, y: 0 } }}
        transition={{ duration: 0.8 }}
      >
        <h2>Lets Connect</h2>
      </motion.div>

      <div className="contact-box">
        <p className="contact-text">
          {`Your thoughts, questions, and ideas matter to me. Whether you have a project in mind or just want to say 'hello,' I'm always delighted to connect with new people. Feel free to send me a message, and I'll be sure to respond promptly. Let's start a conversation today!`}
        </p>
      </div>

      <div className="lottie-animation">
        <Lottie
          animationData={ContactAnimation}
          loop
          autoplay
        />
      </div>

      <div className="form-container">
        <form className="form" onSubmit={sendEmail} ref={form}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input required name="name" id="name" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input required name="email" id="email" type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">How Can I Help You?</label>
            <textarea required cols={50} rows={10} id="textarea" name="textarea"></textarea>
          </div>
          <button type="submit" className="form-submit-btn">Connect</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
