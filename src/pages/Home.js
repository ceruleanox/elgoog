import React from 'react';
import './Home.css';
import { Link, Route } from 'react-router-dom';
import Search from '../components/Search';
import Logo from '../images/logo.png';

function Home() {

    return (
        <div className="home">
            
            <div className="home__header">
            </div>

            <div className="home__body">
                
                <img src={Logo} alt="Elgoog Logo" />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>


        </div>
    )
}

export default Home