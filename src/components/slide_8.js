import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/slide_8.css';

export default class extends React.Component {
  render() {
    return (
      <div id="social" className="social-btns">
      <Row>
        <Col xs={4} md={4}>
          <a href="mailto:sales@roguecoffeeroasters.com"><i className="fa fa-envelope fa-5x social-btn" /></a>
        </Col>
        <Col xs={4} md={4}>
          <a href="https://www.facebook.com/rogueroasters"><i className="fa fa-facebook-f fa-5x social-btn" /></a>
        </Col>
        <Col xs={4} md={4}>
        <a href="https://www.instagram.com/rogueroasters1/"><i className="fa fa-instagram fa-5x social-btn" /></a>
        </Col>
      </Row>
      </div>
    );
  }
}

