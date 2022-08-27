import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FaIndustry } from 'react-icons/fa';
import { FaSwatchbook } from 'react-icons/fa';

/* eslint-disable-next-line */
export interface AboutProps {}

export function About(props: AboutProps) {
  return (
    <section id="about">
      <h5>Getting To Know Me, Getting To Know All...</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>20+ Years Working</h5>
            </article>
            <article className="about__card">
              <FaIndustry className="about__icon" />
              <h5>Experience of Multiple Industries</h5>
            </article>
            <article className="about__card">
              <FaSwatchbook className="about__icon" />
              <h5>UI & UX</h5>
            </article>
          </div>
          <div>
            <p>
              I build modern UI for the web, using Typescript, mono-repo
              patterns and modern web tooling to deliver robust and scalable
              solutions that deliver value for customers.
            </p>
            <p>
              With a background in both Development and Cognitive Science I
              specialize in delivering ergonomic, user-centric products for
              large scale use.
            </p>
            <p>
              I've worked across multiple industries and roles accumulating a
              breadth of skills and depth of knowledge in UI development, UX
              design, and application delivery.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
