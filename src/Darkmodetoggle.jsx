import React, { useState, useEffect } from 'react';
import './Darkmodetoggle.css'; // We'll write CSS here

const Darkmodetoggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on the body
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button onClick={toggleTheme} className="toggle-btn">
      {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default Darkmodetoggle;
