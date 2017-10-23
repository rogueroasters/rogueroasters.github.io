import React, {Component} from 'react'
import Scrollchor from 'react-scrollchor'

import '../assets/css/nav.css'

class NavbarInstance extends Component {
  render() {
    return (
      <div className="buttontoolbar">
        <Scrollchor to="#info">
          <button type="button" id="info-link" className="btn nav-links animated fadeInUp">Info</button>
        </Scrollchor>
        <Scrollchor to="#services">
          <button type="button" id="services-link" className="btn nav-links services-link animated fadeInUp">Services</button>
        </Scrollchor>
        <Scrollchor to="#culture">
          <button type="button" id="culture-link" className="btn nav-links culture-link animated fadeInUp">Culture</button>
        </Scrollchor>
        <a href="https://shoprogueroasters.myshopify.com"><button type="button" id="shop-link" className="btn nav-links shop-link animated fadeInUp">Shop</button></a>
        <Scrollchor to="#social">
          <button type="button" id="social-link" className="btn nav-links social-link animated fadeInUp">Contact</button>
        </Scrollchor>
      </div>
    );
  }
}

export default NavbarInstance
