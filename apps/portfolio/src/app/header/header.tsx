import { CTA } from '@in-which-ilearn-react/ui-kit';
import styles from './header.module.css';

// import { CTA } from 'libs/ui-kit';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tim Morris</h1>
        <h5 className="text-light">UI Architect</h5>
        <CTA />
      </div>
    </header>
  );
}

export default Header;
