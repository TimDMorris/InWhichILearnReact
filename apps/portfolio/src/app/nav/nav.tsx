import './nav.css';

import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

import { useState } from 'react';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav>
      <a
        className={activeNav === '#home' ? 'active' : ''}
        href="#home"
        onClick={() => setActiveNav('#home')}
        title="Home"
      >
        <FaHome aria-hidden="true" focusable="false" />
        <span className="sr-only">Home</span>
      </a>
      <a
        className={activeNav === '#about' ? 'active' : ''}
        href="#about"
        onClick={() => setActiveNav('#about')}
        title="About"
      >
        <FaUserAlt aria-hidden="true" focusable="false" />
        <span className="sr-only">About</span>
      </a>
      <a
        className={activeNav === '#experience' ? 'active' : ''}
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        title="Experience"
      >
        <FaBook aria-hidden="true" focusable="false" />
        <span className="sr-only">Experience</span>
      </a>
      <a
        className={activeNav === '#services' ? 'active' : ''}
        href="#services"
        onClick={() => setActiveNav('#services')}
        title="Services"
      >
        <FaBriefcase aria-hidden="true" focusable="false" />
        <span className="sr-only">Services</span>
      </a>
      <a
        className={activeNav === '#contact' ? 'active' : ''}
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        title="Contact"
      >
        <FaEnvelope aria-hidden="true" focusable="false" />
        <span className="sr-only">Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
