import './AboutMe.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import photo from "../../images/profile-photo.jpeg";
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <SectionTitle title="Студент" />
      <div className="about-me__content">
        <article className="about-me__article">
          <div className="about-me__article-content">
            <h2 className="about-me__article-title">Екатерина</h2>
            <p className="about-me__article-subtitle">Фронтенд-разработчик, 40 лет</p>
            <p className="about-me__article-text">
              Я родилась и живу в Санкт-Петербурге. Закончила факультет математики и информатики РГПУ им. А.И.Герцена. 14 лет прожила на Дальнем Востоке. У меня две дочери и сын. Люблю кататься на сноуборде, заниматься дайвингом, ходить в спортзал. Работаю контент-менеджером в семейной фирме. Пошла курс по веб-разработке. Планирую развиваться в данном направлении.
            </p>
            <ul className="about-me__article-links">
              <li className ="about-me__article-link">
                <a className ="about-me__article-link about-me__article-link-vk" href="https://vk.com/ekaterinamanuylova" target="_blank" rel="noreferrer">ВКОНТАКТЕ</a>
              </li>
              <li className ="about-me__article-link">
                <a className ="about-me__article-link about-me__article-link-gh" href="https://github.com/EkaterinaManuilova" target="_blank" rel="noreferrer">Github</a>
              </li>
            </ul>
          </div>
          <div className="about-me__article-photo">
            <img className="about-me__article-pfoto-img" src={photo} alt="мое фото"></img>
          </div>
        </article>
        <Portfolio />
      </div>
    </section>
  )
}

export default AboutMe;