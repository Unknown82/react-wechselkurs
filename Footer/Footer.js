import React from "react";
import './Footer.css';

class Footer extends React.Component {


    render() {

        return (
            <footer id="footer" className="footer">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <h1 className="footer-title"><a href="https://www.dein-webentwickler.de">2021 Web
                                    Level</a></h1>
                                <p> All Rights Reserved</p>

                            </div>

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/sitemap/" tooltip="Карта сайта">Karte der Website</a></li>
                                        <li><a href="/sitemaps.xml" target="_blank" tooltip="Google Sitemap">Google
                                            Sitemap</a></li>
                                    </ul>
                                </div>

                            </div>

                            <div className="flex-item">
                                <div className="module-body">
                                    <ul className="list-unstyled">
                                        <li><a href="/contact/" tooltip="Контакты">Kontakt</a></li>
                                        <li><a href="/d">Garantien</a></li>
                                        <li><a href="/s">Über den Dienst</a></li>
                                        <li><a href="/o">Rückgabebedingungen</a></li>
                                        <li><a href="/p">Dienstleistungsvertrag</a></li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyright-bar">
                    <div className="flex-container">
                        <div className="flex-item">
                            <ul className="link">
                            </ul>
                        </div>
                        <div className="flex-item">
                            <div className="clearfix payment-methods">
                                <ul>
                                    <img src="/skin/default/images/dummy.png" data-toggle="tooltip"
                                         data-placement="top"
                                         data-original-title="www.webmoney.ru" alt=""/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );

    }
}

export default Footer;
