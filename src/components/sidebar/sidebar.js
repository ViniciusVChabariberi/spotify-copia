import React from 'react';
import './sidebar.css';
import logo from '../../assets/icons/logo-artist.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faBook, faPlus, faCookie } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ inputRef }) => {

    const handleFocus = () => {
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="">
                        <img src={logo} alt="logo Spotify" />
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="">
                            <span className='home-button'><FontAwesomeIcon icon={faHome} size='lg' /></span>
                            <span>Início</span>
                        </a>
                    </li>
                    <li>
                        <button onClick={handleFocus}>
                            <a href='#'>
                                <span className='search-button'><FontAwesomeIcon icon={faSearch} size='lg' /></span>
                                <span>Buscar</span>
                            </a>
                        </button>
                    </li>
                </ul>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span><FontAwesomeIcon icon={faBook} size='xl' /></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className="fa-plus"><FontAwesomeIcon icon={faPlus} size='lg' /></span>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">
                            Crie sua primeira playlist
                        </span>
                        <span className="text subtitle">
                            É fácil, vamos te ajudar.
                        </span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <span className="fa-cookie">
                        <FontAwesomeIcon icon={faCookie} size='lg' />
                        <a href="">Cookies</a>
                    </span>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span><FontAwesomeIcon icon={faGlobe} /></span>
                        <span>Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;