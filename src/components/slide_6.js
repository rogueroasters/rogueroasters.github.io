import React from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import '../assets/css/slide_6.css'
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
    const animeLine = classNames('animated', {'zoomIn': this.state.active})
    return (
      <Waypoint onEnter={this.handleEnter.bind(this)} onLeave={this.handleLeave.bind(this)}>
      <div id="culture" className="parallax5">
          <div className="about-blurb-container animated fadeInUp">
          <h1 id="line1" className={animeLine}>Rogue Roasters is a hub for all people.</h1>
            <h3 id="line2" className={animeLine}>From the professional business man to the traveling vagabond.</h3>
            <h2 id="line3" className={animeLine}>We all share the same love.</h2>
            <h3 id="line4" className={animeLine}>The love of orgainic, artisan roasted coffee.</h3>
        </div>
        <div className="container">
        </div>
      </div>
      </Waypoint>
    )
  }
}
