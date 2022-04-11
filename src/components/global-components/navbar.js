import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <nav className="navbar navbar-area navbar-expand-lg nav-style-01 viaje-go-top">
			  <div className="container nav-container">
			    <div className="responsive-mobile-menu">
			      <div className="mobile-logo">
			        <Link to="/">
			          <img src="/assets/img/headerlogo.png" alt={ imgattr } />
			        </Link>
			      </div>
			      <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#tp_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			        <span className="navbar-toggle-icon">
			          <span className="line" />
			          <span className="line" />
			          <span className="line" />
			        </span>
			      </button>
			      <div className="nav-right-content">
			        <ul className="pl-0">
					<li>
			          <a className="btn btn-yellow" href="https://drive.google.com/file/d/18Kwlj-iB23BxClSNKI9EnI1nZXeotTd-/view?usp=sharing" target="_rel">Litepaper<i className="fa fa-paper-plane" /></a>
					  </li>
					<li>
			          <a className="btn btn-yellow" href="https://t.me/sicfoundation" target="_rel">Join Telegram<i className="fa fa-paper-plane" /></a>
			        </li>
			        </ul>
			      </div>
			    </div>
			    <div className="collapse navbar-collapse" id="tp_main_menu">
			      <div className="logo-wrapper desktop-logo">
			        <Link to="/" className="main-logo">
			          <img src={publicUrl+"assets/img/headerlogo.png"} alt="logo" />
			        </Link>
			        <Link to="/" className="sticky-logo">
			          <img src={publicUrl+"assets/img/logo.png"} alt="logo" />
			        </Link>
			      </div>
			    </div>
			    <div className="nav-right-content">
			      <ul>
			        <li>
			          <a className="btn btn-yellow" href="https://drive.google.com/file/d/18Kwlj-iB23BxClSNKI9EnI1nZXeotTd-/view?usp=sharing" target="_rel">Litepaper<i className="fa fa-paper-plane" /></a>
					  </li>
					<li>
			          <a className="btn btn-yellow" href="https://t.me/sicfoundation" target="_rel">Join Telegram<i className="fa fa-paper-plane" /></a>
			        </li>
			        
			        
			      </ul>
			    </div>
			  </div>
			</nav>

        )
    }
}


export default Navbar