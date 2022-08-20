import styles from './testimonials.module.css';

/* eslint-disable-next-line */
export interface TestimonialsProps {}

export function Testimonials(props: TestimonialsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testimonials!</h1>
    </div>
  );
}

export default Testimonials;
