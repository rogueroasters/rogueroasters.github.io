import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/slide_7.css';
export default class extends React.Component {
  render() {
    return (
      <div id="info" className="parallax6">
        <Row className="info-tiles">
          <Col sm={4}>
            <div className="tiles">
              <a href="https://goo.gl/maps/dUpQrwTdT9m">
                <i className="fa fa-map-marker fa-4x contact-tiles"></i>
              </a>
            </div>
          </Col>
          <Col sm={4}>
            <div className="tiles">
              <a href="tel:+15414766134">
                <i className="fa fa-phone fa-4x contact-tiles"></i>
              </a>
            </div>
          </Col>
          <Col sm={4}>
            <div className="tiles">
              <a href="#">
                <i className="fa fa-clock-o fa-4x contact-tiles"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="info-tiles-below">
          <Col sm={4} className="contact-tile-txt">
            <a href="https://goo.gl/maps/dUpQrwTdT9m">
              <h3>610 SW 6th Street</h3>
            </a>  
              <h4>Grants Pass Oregon (and beyond)</h4>
          </Col>
          <Col sm={4} className="contact-tile-txt">
            <a href="tel:+15414766134"><h3>541 476 6134</h3></a>
          </Col>
          <Col sm={4} className="contact-tile-txt">
            <h4 className="days">Monday - Saturday</h4>
            <h3 className="hours">Cafe: 7am - 6pm</h3>
            <h3 className="hours">Drive Thru: 6am - 6:30pm</h3>
            <h4 className="days">Sunday</h4>
            <h3 className="hours">Cafe: 8am - 6pm</h3>
            <h3 className="hours">Drive Thru: 7am - 4pm</h3>
          </Col>
        </Row>
      </div>
    );
  }
}
