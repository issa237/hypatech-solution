import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the screen
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the route path changes

  return null; // This component doesn't render anything visually
}