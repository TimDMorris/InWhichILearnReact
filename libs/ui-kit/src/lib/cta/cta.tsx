import styles from './cta.module.css';

/* eslint-disable-next-line */
export interface CTAProps {}

export function CTA(props: CTAProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CTA!</h1>
    </div>
  );
}

export default CTA;
