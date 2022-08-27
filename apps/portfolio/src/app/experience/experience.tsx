import './experience.css';
import { HiShieldCheck } from 'react-icons/hi';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (
    <section id="experience">
      <h5>What I Bring To The Table</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Nrwl Nx Monorepos</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Hybrid Mobile App Development</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Shared UI Component Libraries</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>UX</h3>
          <div className="experience__content">
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>UX Design</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Prototyping</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>User Testing</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Visual Design</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <HiShieldCheck className="experience__details-icon" />
              <div>
                <h4>Storybook</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
