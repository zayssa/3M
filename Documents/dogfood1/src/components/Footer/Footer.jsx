import "./index.css";
import telegram from './img/telegram.svg';
import whatsapp from './img/whatsapp.svg';
import vk from './img/vk.svg';
import viber from './img/viber.svg';
import instagram from './img/instagram.svg';
import { Logo } from '../Logo/Logo';



export function Footer() {
    return <footer className='footer'>
        <div className='container'>
            <div className='footer__wrapper'>
                <div className='footer__col'>
                    <Logo />
                    <p className='footer__copyright'>Интернет-магазин</p>
                </div>
                <div className='footer__col'>
                    <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Каталог</a>
                        <a href='/' className='menu-bottom__item'>Акции</a>
                        <a href='/' className='menu-bottom__item'>Новости</a>
                        <a href='/' className='menu-bottom__item'>Отзывы</a>
                    </nav>
                </div>
                <div className='footer__col'>
                <nav className='menu-bottom'>
                        <a href='/' className='menu-bottom__item'>Оплата и доставка</a>
                        <a href='/' className='menu-bottom__item'>Часто спрашивают</a>
                        <a href='/' className='menu-bottom__item'>Обратная связь</a>
                        <a href='/' className='menu-bottom__item'>Контакты</a>
                    </nav>
                </div>
                <div className='footer__col'>
                    <div className='contacts'>
                        8 999 00-00-00
                        <ul className='socials contacts_socials'>
                            <li className=''>
                                <a href='/'>
                                    <img src={telegram} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={instagram} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={vk} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={viber} alt="" />
                                </a>
                            </li>
                            <li className=''>
                                <a href='/'>
                                    <img src={whatsapp} alt="" />
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </footer>
  }