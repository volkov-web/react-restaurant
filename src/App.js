/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {YMaps, Map} from 'react-yandex-maps';
import './App.css';
import card1 from "./img/card1.jpg";
import card2 from "./img/card2.jpg";
import card3 from "./img/card3.jpg";
import card4 from "./img/card4.jpg";
import card5 from "./img/card5.png";
import card6 from "./img/card6.jpg";
import intro_carousel1 from "./img/intro_carousel1.jpg";
import intro_carousel2 from "./img/intro_carousel2.jpg";
import intro_carousel3 from "./img/intro_carousel3.jpg";
import phone from "./img/phone.jpg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";
import facebook from "./img/facebook.svg";
import discord from "./img/discord.jpg";


function App() {
    return (
        <div>
            <div className="header_background">
                <nav className="header_nav header_nav_background">
                    <a href="#" className="header_logo header_item_link">
                        Экзмпл
                    </a>
                    <span className="header_item">
                        <a href="#" className="header_item_link" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Кухня
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Итальянская</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Французская</a>
                            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#exampleModal">Греческая</a>
                        </div>
                    </span>
                    <span className="header_item">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="header_item_link">
                            Адреса ресторанов
                        </a>
                    </span>
                    <span className="header_item">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="header_item_link">
                            О компании
                        </a>
                    </span>
                    <span className="header_item">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="header_item_link">
                            Контакты
                        </a>
                    </span>
                    <span className="header_item">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="header_item_link">
                            <img src={phone} className="header-phone header-icon"></img>
                            <span>7-xxx-xxxxxxx</span>
                        </a>
                    </span>
                </nav>
            </div>

            <div className="line-intro upper-line" />
            <div className="text-intro">
                Ищете место, 
                 где смогли бы<br/> насладиться вкусной и качественной едой?<br/> Ресторан Экзмпл ждёт Вас!
            </div>
            <div className="line-intro bottom-line" />


            <div className="card-list">
                <div className="card-row">
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card1} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Профессионализм</h5>
                            <p className="card-text">Для Вас работают профессионалы, имеющие многолетний опыт и знающие свое дело.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card2} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Качество</h5>
                            <p className="card-text">Для готовки используются только качественные, тщательно отобранные продукты.</p>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card3} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Сочетаемость</h5>
                            <p className="card-text">Каждое наше блюдо мы составляем таким образом, что бы сочетание вкусов было идеальным.</p>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card4} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Предпочтения</h5>
                            <p className="card-text">Мы предлагаем Вам обширный спектр блюд, что бы Вы нашли именно то, что предпочитаете Вы.</p>
                        </div>
                    </div>
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card5} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Комфорт</h5>
                            <p className="card-text">Мы заботимся, что бы Вам было комфортно и Вы насладились уникальной атмосферой.</p>
                        </div>
                    </div>
                </div>
                <div className="card-row">
                    <div className="card" style={{width: "26rem"}}>
                        <img src={card6} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Совершенствование</h5>
                            <p className="card-text">Мы постоянно совершенствуемся, ведь только так можно поддерживать уровень качества на высшем уровне.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="intro_carousel_wrapper">
                <div id="carouselExampleCaptions" className="intro_carousel carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={intro_carousel2} className="intro_carousel_img d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={intro_carousel3} className="intro_carousel_img d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                        <img src={intro_carousel1} className="intro_carousel_img d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className="map-wrapper">
                <div className="map-header">
                    <span className="map-header-item">Наши рестораны:</span>
                </div>
                <YMaps>
                    <Map width="100%" height="100%" defaultState={{center: [55.75, 37.57], zoom: 8}}></Map>
                </YMaps>
            </div>

            <div className="footer">
                <div className="footer-upperBlock">
                    <span className="upperBlock-aboutUs"></span>
                </div>
                <div className="footer-bottomBlock">
                    <div className="footer-bottomBlock-container footer-nav">
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                Адреса и контакты
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                О ресторане
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                Задать вопрос
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                Конфиденциальность
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottomBlock-container footer-social">
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                <span>Instagram</span>
                                <img src={instagram} className="footer-social-icon"></img>
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                <span>Twitter</span>
                                <img src={twitter} className="footer-social-icon"></img>
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                <span>Facebook</span>
                                <img src={facebook} className="footer-social-icon"></img>
                            </a>
                        </div>
                        <div className="footer-bottomBlock-item">
                            <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                                <span>Discord</span>
                                <img src={discord} className="footer-social-icon"></img>
                            </a>
                        </div>
                    </div>
                    <div className="footer-bottomBlock-container footer-contactUs">
                        <a href="#" data-toggle="modal" data-target="#exampleModal" className="footer-link">
                            <div className="footer-bottomBlock-item font150">
                                Связаться с нами:
                            </div>
                            <div className="footer-bottomBlock-item">
                                <img src={phone} className="footer-icon footer-phone"></img>
                                <span className="font125">7-xxx-xxxxxxx</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* modal */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">В разработке</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Это пример домашней страницы
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Закрыть</button>
                    </div>
                    </div>
                </div>
            </div>

            {/* modal end */}
        </div>
    );
}

export default App;
