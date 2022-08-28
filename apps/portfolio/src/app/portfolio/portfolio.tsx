import './portfolio.css';

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio_item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
