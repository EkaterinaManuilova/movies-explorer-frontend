import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Main() {
  return (
      <main className="main-content">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
  )
}

export default Main;