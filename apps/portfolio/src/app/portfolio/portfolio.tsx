import styles from './portfolio.module.css';

/* eslint-disable-next-line */
export interface PortfolioProps {}

export function Portfolio(props: PortfolioProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Portfolio!</h1>
    </div>
  );
}

export default Portfolio;
