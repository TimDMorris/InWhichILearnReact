import './nav.css';

import { FaUserAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaBriefcase } from 'react-icons/fa';

import { FaEnvelope } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface NavProps {}

export function Nav(props: NavProps) {
  return (
    <nav>
      <a href="#home" className="active" title="Home">
        <FaHome aria-hidden="true" focusable="false" />
        <span className="sr-only">Home</span>
      </a>
      <a href="#about" title="About">
        <FaUserAlt aria-hidden="true" focusable="false" />
        <span className="sr-only">About</span>
      </a>
      <a href="#experience" title="Experience">
        <FaBook aria-hidden="true" focusable="false" />
        <span className="sr-only">Experience</span>
      </a>
      <a href="#services" title="Services">
        <FaBriefcase aria-hidden="true" focusable="false" />
        <span className="sr-only">Services</span>
      </a>
      <a href="#contact" title="Contact">
        <FaEnvelope aria-hidden="true" focusable="false" />
        <span className="sr-only">Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
