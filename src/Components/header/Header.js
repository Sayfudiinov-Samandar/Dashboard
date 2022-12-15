import React from "react";
import { Message, Search } from "../../Assets/images/icons/Icons";
import userImage from "../../Assets/images/img/header/user.jpg";
import "./header.scss";
export const Header = () => {
    return <header className="site-header">
        <div className="header-wrapper">
            <div className="header-inner">
                <h2 className="header-title">
                    Overview
                </h2>
            </div>
            <div className="header-outer">
                <button className="header-search">
                    <Search />
                </button>
                <button className="header-notification">
                    <Message />
                </button>
                <span className="header-separator"></span>
                <h3 className="user-name">
                    Jones Ferdinand
                </h3>
                <img src={userImage} alt="Jones Ferdinand. A remarkable man" className="user-img" width={44} height={44}/>
            </div>
        </div>

    </header>
}