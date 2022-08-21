import './socials.css';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface SocialsProps {}

export function Socials(props: SocialsProps) {
  //TO DO: Can we refactor accessible icon to a component?

  return (
    <div className="socials">
      <a
        href="https://www.linkedin.com/in/timdmorris/"
        title="LinkedIn"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin aria-hidden="true" focusable="false" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href="https://github.com/TimDMorris"
        title="Github"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithubSquare aria-hidden="true" focusable="false" />
        <span className="sr-only">Github</span>
      </a>
      <a
        href="https://twitter.com/TimDMorris"
        title="Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare aria-hidden="true" focusable="false" />
        <span className="sr-only">Twitter</span>
      </a>
    </div>
  );
}

export default Socials;
