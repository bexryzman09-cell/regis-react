import { Link } from 'react-router-dom';

export default function     WelcomePages() {
    return (
   
            <main className="main">
                <section className="welcome">

                    <div className="welcome_content">

                        <span className="welcome_label">
                            WELCOME TO OUR WEBSITE
                        </span>

                        <h1 className="welcome_title">
                            Добро пожаловать!
                        </h1>

                        <p className="welcome_text">
                            Создай свой аккаунт и открой для себя новые возможности.
                            Зарегистрируйся или войди в свой аккаунт,
                            чтобы продолжить пользоваться нашим сайтом.
                        </p>

                        <div className="welcome_info">

                            <div className="info_item">
                                <h3 className="info_title">01</h3>
                                <p className="info_text">Быстрая регистрация</p>
                            </div>

                            <div className="info_item">
                                <h3 className="info_title">02</h3>
                                <p className="info_text">Простой вход</p>
                            </div>

                            <div className="info_item">
                                <h3 className="info_title">03</h3>
                                <p className="info_text">Удобный интерфейс</p>
                            </div>

                        </div>

                        <div className="welcome_buttons">

                            <Link to="/register" className="welcome_register">
                                Зарегистрироваться
                            </Link>

                            <Link to="/login" className="welcome_login">
                                Войти
                            </Link>

                        </div>

                        <p className="welcome_footer">
                            Присоединяйся к нам и начни прямо сейчас!
                        </p>

                    </div>

                </section>
            </main>
        );
    }
  

