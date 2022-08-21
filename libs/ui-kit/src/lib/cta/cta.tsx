import './cta.css';

/* eslint-disable-next-line */
export interface CTAProps {}

export function CTA(props: CTAProps) {
  return (
    <div className="cta">
      <a
        className="btn"
        href="https://www.linkedin.com/in/timdmorris/"
        target="_blank"
        rel="noreferrer"
      >
        Resume
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

export default CTA;
