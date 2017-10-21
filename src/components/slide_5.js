import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import '../assets/css/slide_5.css';
export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }
  handleEnter() {
    this.setState({active: true})
  }
  handleLeave() {
    this.setState({active: false})
  }
  render() {
    const wholesaleTextAnime = classNames("wholesale-text animated", {'zoomInUp': this.state.active})
    const aAnime = classNames("a-anime animated", {'bounceIn': this.state.active})
    const bAnime = classNames("b-anime animated", {'bounceIn': this.state.active})
    const cAnime = classNames("c-anime animated", {'bounceIn': this.state.active})
    const dAnime = classNames("d-anime animated", {'bounceIn': this.state.active})
    return (
      <Waypoint onEnter={this.handleEnter.bind(this)} onLeave={this.handleLeave.bind(this)}>
      <div>
        <div id="services" className="parallax4">
            <h1 className={wholesaleTextAnime}>Wholesale Pricing</h1>
          <Row className="icons">
            <Col xs={3} md={3}>
                <div className={aAnime}><i className="fa fa-coffee fa-5x"></i></div>
            </Col>
            <Col xs={3} md={3}>
                <div className={bAnime}><i className="fa fa-globe fa-5x"></i></div>
            </Col>
            <Col xs={3} md={3}>
                <div className={cAnime}><i className="fa fa-heart fa-5x"></i></div>
            </Col>
            <Col xs={3} md={3}>
                <div className={dAnime}><i className="fa fa-plane fa-5x"></i></div>
            </Col>
          </Row>
          <div className="top-padding"></div>
            <a className="learn-more" href="https://shop.rogueroasters.com/wholesale"><h3>Learn More</h3></a>     
        </div>
      </div>
      </Waypoint>
    );
  }
}

