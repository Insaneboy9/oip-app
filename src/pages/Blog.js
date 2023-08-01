import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Nav } from 'react-bootstrap';

const Blog = () => {
  useEffect(() => {
    // Dynamically import the Bootstrap CSS
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Remove the Bootstrap CSS when the component is unmounted
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center"
    >
      <div className="h-screen w-1/5 bg-gray-800 text-white p-3">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Poster</Nav.Link>
          <Nav.Link href="/home">Dailies</Nav.Link>
          <Nav.Link href="/home">Reflection</Nav.Link>
        </Nav>
      </div>
    </motion.div>
  );
};

export default Blog;