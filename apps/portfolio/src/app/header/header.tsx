import { CTA } from '@in-which-ilearn-react/ui-kit';
import { Socials } from '@in-which-ilearn-react/ui-kit';

import './header.css';

import profileImage from '../../assets/timdmorris_profile.png';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tim Morris</h1>
        <h5 className="text-light">UI Architect</h5>
        <CTA />
        <Socials />
        <div className="profile-image">
          <img src={profileImage} alt="TimDMorris Profile" />
        </div>
        <a className="scroll__down" href="#contact">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
