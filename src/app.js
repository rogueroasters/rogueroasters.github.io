import React from 'react'
import Loading from './components/loading'
import Nav from './components/nav'
import Slide1 from './components/slide_1'
import Slide2 from './components/slide_2'
import Slide3 from './components/slide_3'
import Slide4 from './components/slide_4'
import Slide5 from './components/slide_5'
import Slide6 from './components/slide_6'
import Slide7 from './components/slide_7'
import Slide8 from './components/slide_8'
import Footer from './components/footer'

import './assets/css/app.css'

export default class extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true
    }
  }
  componentDidMount() {
    this.setState({loading: false})
  }
  render() {
    const {loading} = this.state
    return (
      <div>
        {loading ? <Loading/> : 
          <div>
            <Nav />
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />
            <Footer />
          </div>  
        }
      </div>
    );
  }
}
