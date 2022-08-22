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
      <a href="#home" title="Home">
        <FaHome />
      </a>
      <a href="#about" title="About">
        <FaUserAlt />
      </a>
      <a href="#experience" title="Experience">
        <FaBook />
      </a>
      <a href="#services" title="Services">
        <FaBriefcase />
      </a>
      <a href="#contact" title="Contact">
        <FaEnvelope />
      </a>
    </nav>
  );
}

export default Nav;
