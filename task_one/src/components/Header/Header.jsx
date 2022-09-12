import React from 'react';
import './Header.module.css';
import '../../img'


 const Header = () => {
    return (
        <header>
            <div className="brown_line">
            </div>
                <h1 className="h1_macy">Инженерная психология (ИНИС)</h1>
                <img className="logoImg" src="logo.png" alt="error" />
           
            <div className="tab_bar_brown">
                <br />
                <a className="tab_bar_text" href="/products.html"> T-SHIRTS</a>
                <a className="tab_bar_text" href="/not_implemented.html">HOODIES</a>
                <a className="tab_bar_text" href="/lab2/index.html">CREATE YOUR OWN</a>
                <a className="tab_bar_text" href="/not_implemented.html">ABOUT US</a>
                <a className="tab_bar_text" href="/not_implemented.html">YOUR ACCOUNT</a>
            </div>
      </header>
    );
    
}

export default Header;

