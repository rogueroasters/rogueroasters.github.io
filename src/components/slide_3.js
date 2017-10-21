import React from 'react'
import { Row, Col } from 'react-bootstrap'
import cup1 from '../assets/img/best_coffee_in_oregon.png'
import cup2 from '../assets/img/silver_cup.png'
import cup3 from '../assets/img/gold_cup.png'
import readersChoice from '../assets/img/readers_choice.png'
import readersChoice2016 from '../assets/img/bestof2016.gif'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import '../assets/css/slide_3.css'
export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
  }
  handleEnter() {
    this.setState({ active: true })
  }
  handleLeave() {
    this.setState({active: false})
  }
  render() {
    const awardTextAnime = classNames('award-text', 'animated', { 'zoomInDown': this.state.active })
    const trophyAAnime = classNames('trophy-a', 'animated', { 'zoomInDown': this.state.active })
    const trophyDetail1 = classNames('trophy-detail-1', 'trophy-detail-text', 'animated', {'zoomInUp': this.state.active})
    const trophyBAnime = classNames('trophy-b', 'animated', {'zoomInDown': this.state.active})
    const trophyDetail2 = classNames('animated', 'trophy-detail-2', 'trophy-detail-text', {'zoomInDown': this.state.active})
    const trophyCAnime = classNames("trophy-c animated", {'zoomInDown': this.state.active})
    const trophyDetail3 = classNames("animated trophy-detail-3 trophy-detail-text", {'zoomInUp': this.state.active})
    const readerChoice1 = classNames("animated center-block img-responsive", {'zoomInUp': this.state.active})
    const readerChoice2 = classNames("animated center-block img-responsive", {'zoomInUp': this.state.active})
    return (
      <Waypoint onEnter={this.handleEnter.bind(this)} onLeave={this.handleLeave.bind(this)}>
      <div>
        <div className="container-fluid award-background">
            <h3 className={awardTextAnime}>Award Winning,<br/>
            Micro Roasted Coffee</h3>
          <Row className="trophy-row">
            <Col sm={4}>
                <div className={trophyAAnime}><img src={cup2} alt="" className="cup center-block img-responsive" /></div>
              <div className="row">
                  <div className={trophyDetail1}><h2>Silver Cup</h2><h4>Best Coffee in Oregon 2013</h4></div>
              </div>
            </Col>
          <Col sm={4}>
                <div className={trophyBAnime}><img src={cup1} alt="" className="cup center-block img-responsive"/></div>
            <div className="row">
                  <div className={trophyDetail2}><h2>Grand Champion</h2><h4>Best Coffee in Oregon Championship 2013</h4></div>
              </div>
            </Col>
          <Col sm={4}>
                <div className={trophyCAnime}><img src={cup3} alt="" className="cup center-block img-responsive"/></div>
            <div className="row">
                  <div className={trophyDetail3}><h2>Bronze Cup (Espresso)</h2><h4>Best Coffee in Oregon 2014</h4></div>
              </div>
            </Col>
          </Row>
          <Row>
              <Col sm={6}><img id="rchoice" src={readersChoice2016} alt="" className={readerChoice1}/></Col>
              <Col sm={6}><img id="rchoice2" src={readersChoice} alt="" className={readerChoice2}/></Col>
          </Row>
        </div>
      </div>
      </Waypoint>
    );
  }
}
