import React, { useRef } from "react";
import "./header.css";
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import search from "../../assets/icons/search.png";
import FocusButton from "../sidebar/sidebar";

const Header = ({ setSearchTerm }) => {
    const inputRef = useRef(null);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase().trim());
    };

    return (
        <div className="main-container">
            <nav className="header__navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <FontAwesomeIcon icon={faChevronLeft} size='xl' alt="Seta esquerda" />
                    </button>
                    <button className="arrow-right">
                        <FontAwesomeIcon icon={faChevronRight} size='xl' alt="Seta direita" />
                    </button>
                </div>
                <div className="header__search">
                    <span className="search">
                        <FontAwesomeIcon icon={faSearch} alt="Buscar" />
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        maxLength="800"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        placeholder="O que você quer ouvir?"
                        onChange={handleInputChange}
                    />
                </div>
                <FocusButton inputRef={inputRef} />
                <div className="header__login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;