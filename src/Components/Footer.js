import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash'; // Import debounce from lodash
import '../styles/Footer.css';

const socialMediaLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/atishay23/',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/atishay2305-hub',
  }
];

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = debounce(() => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  }, 200);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll, checkScrollTop]);

  return (
    <div className='footer'>
      {/* Connect with Me and Social Media Links */}
      <div className='social-media'>
        <div className='social-links'>
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target='_blank' rel='noopener noreferrer'>
              <button className='social-button' style={{ fontFamily: 'monospace', minWidth: 120 }}>{link.name}</button>
            </a>
          ))}
        </div>
      </div>

      {/* Gif Images */}

      {/* Scroll-to-top button */}
      {showScroll && (
        <div className='scroll-to-top' onClick={scrollTop}>
          <button className='scroll-button' style={{ fontFamily: 'monospace' }}>▲</button>
        </div>
      )}
    </div>
  );
}

export default Footer;