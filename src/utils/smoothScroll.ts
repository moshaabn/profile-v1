// Smooth scroll utility for navigation links
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const navHeight = 80; // Adjust based on your navigation height
    const elementPosition = element.offsetTop - navHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

// Add smooth scroll event listeners to navigation links
export const initSmoothScroll = () => {
  // Get all anchor links that point to sections
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.substring(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
};
