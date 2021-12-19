function Header() {


    return (
        <header className="header">
            <div className="header__left">
                <a href="main.html" className="main__page__btn btn active__page">Главная</a>
                <a href="indexes/vacation__page.html" className="vacation__page__btn btn">Вакансии</a>
                <a href="indexes/announcements__page.html" className="announcements__page__btn btn">Мероприятия</a>
                <a href="indexes/companies__page.html" className="companies__page__btn btn">Компании</a>
            </div>
            <div className="header__right">

                <a href="indexes/personal__area.html"><img src="pictures/personal area 3.png" width="100" className="personal__area-picture"/></a>
            </div>
        </header>

);
}

export default Header