import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/2.png)'}}>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © SIC Fund Foundation 2022 All rights reserved. 
				    </div>
				  </div>
				</footer>


        )
    }
}


export default Footer_v1