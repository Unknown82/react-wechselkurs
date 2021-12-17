import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Rate from "./Rate/Rate";
import About from "./About/About";
import Kontakt from "./Kontakt/Kontakt";


class App extends React.Component {
    //constructor(props) {
    //    super(props);
    //}

    render() {

        return (
            <div className="site">
               <Header />

                <div className="container">
                    <main>
                        <Router>
                            <Routes>
                                <Route exact path="/" element={<Rate/>}/>
                                <Route exact path="/about" element={<About/>}/>
                                <Route exact path="/kontakt" element={<Kontakt/>}/>
                            </Routes>
                        </Router>
                    </main>
                </div>

                <div className="container" id="cookie_info">
                    <div className="site-content">
                        <div className="well">Wir verwenden Cookies auf unserer Website, um Informationen von technischen Daten zu sammeln
                            <br/>insbesondere für den personalisierten Betrieb der Seite verarbeiten wir die IP-Adresse der Region Ihres
                            Lage.&nbsp;<button className="btn btn-primary btn-sm">OK</button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
    );
    }
    }

    export default App;
