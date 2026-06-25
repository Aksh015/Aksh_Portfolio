import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";

const resumeSrc = new URL("./assets/Aksh_Resume.pdf", import.meta.url).href;

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Aksh here...";
  const typingSpeed = 100; // milliseconds per character

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeSrc;
    link.download = "Aksh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Home">
      <div className="Home-content">
        {/* Text Section */}
        <motion.div
          className="Home-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>
            {displayedText}
            <span className="typing-cursor">|</span>
          </h1>
          <h2>
            "A curious developer learning to build solutions that matter.
            Growing as a developer by creating meaningful and practical projects."
          </h2>
          <div className="buttons-container">
            <motion.button
              className="download-resume-btn"
              onClick={handleDownloadResume}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
            <motion.button
              className="know-about-me-btn"
              onClick={() => {
                document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Know about me
            </motion.button>
          </div>

          <motion.div
            className="home-contact"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="https://www.linkedin.com/in/aksh-patel158/" target="_blank" rel="noopener noreferrer" className="home-contact-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.06-.93-2.06-2.06 0-1.14.92-2.07 2.06-2.07s2.06.93 2.06 2.07c0 1.13-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/Aksh015" target="_blank" rel="noopener noreferrer" className="home-contact-link" aria-label="GitHub">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.38 6.84 9.74.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.42 9.42 0 0 1 12 6.95c.85 0 1.71.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.95.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a href="https://leetcode.com/u/aksh_158/" target="_blank" rel="noopener noreferrer" className="home-contact-link" aria-label="LeetCode">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.2 3.2 6.4 11c-.9.9-.9 2.3 0 3.2l5.6 5.6c.9.9 2.3.9 3.2 0l1.2-1.2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.8 8.4 11 12.2l3.8 3.8" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11.2 12.2h8.4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              <span>LeetCode</span>
            </a>
            <a href="https://codeforces.com/profile/Aksh15" target="_blank" rel="noopener noreferrer" className="home-contact-link" aria-label="Codeforces">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 19V9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M12 19V5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M19 19v-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M3 19h18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              <span>Codeforces</span>
            </a>
            <a href="mailto:patelaksh1508@gmail.com" className="home-contact-link" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 5h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="m22 7-10 7L2 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
