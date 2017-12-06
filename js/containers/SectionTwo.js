import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import SVG from 'react-inlinesvg'

/* eslint-disable */
class ScrollingApp extends Component {
  constructor(props) {
   super(props);
   this.state = { animateClass: "doodoo", triggered: false }
   // This binding is necessary to make `this` work in the callback
   this.handleScroll = this.handleScroll.bind(this);
 }
  componentDidMount() {
    console.warn("componentDidMount!")

    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(ev) {
    console.warn("Scrolling!", ev.target.scrollingElement.scrollTop)
    if (ev.target.scrollingElement.scrollTop > 2400 && !this.state.triggered) {
      this.setState({ triggered: true })
      this.setState({ animateClass: 'animated' })
      console.warn('trigger')
    }
  }

  render() {
    return (
      <div ref="list" className="color-block block-2">
        <Row className={this.state.animateClass} onScroll={this.handleScroll}>

          <Col xs={{ size: 4, offset: 8 }}>
            SectionTwoComponent here
            <SVG
              src="../../svg/sprayer.svg"
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ScrollingApp
