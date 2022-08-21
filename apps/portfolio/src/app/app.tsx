import styles from './app.module.css';

import Header from './header/header';
import Nav from './nav/nav';
import About from './about/about';
import Experience from './experience/experience';
import Services from './services/services';
import Portfolio from './portfolio/portfolio';
import Testimonials from './testimonials/testimonials';
import Contact from './contact/contact';
import Footer from './footer/footer';

export function App() {
  return (
    <div className={styles['container']}>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
