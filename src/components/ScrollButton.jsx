import React, { useState, useEffect } from 'react';
import { GoArrowUp } from 'react-icons/go';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300); // Show button after scrolling 300px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 flex items-center gap-2 right-8 px-3 py-3 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-700"
      >
        <GoArrowUp size={27} /> 
      </button>
    )
  );
};

export default ScrollToTopButton;
