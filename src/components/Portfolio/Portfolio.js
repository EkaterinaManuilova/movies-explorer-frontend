import './Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://github.com/EkaterinaManuilova/how-to-learn/tree/master"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Статичный сайт
                        <span className="portfolio__link-arrow">&#8599;</span>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://ekaterinamanuilova.github.io/russian-travel/index.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Адаптивный сайт
                        <span className="portfolio__link-arrow">&#8599;</span>
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a
                        className="portfolio__link"
                        href="https://mestofront.students.nomoredomains.xyz/"
                    >
                        Одностраничное приложение
                        <span className="portfolio__link-arrow">&#8599;</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio
