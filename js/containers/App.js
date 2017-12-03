import React from 'react'
import SVG from 'react-inlinesvg'
import { Row, Col } from 'reactstrap'
import Navbar from '../components/Nav'
import Section from './Section'

const App = () => (
  <div>
    <Navbar />
    <Row>
      <Col
        className="text-center"
        sm={{ size: 4, offset: 4 }}
      >
        Centered Title
      </Col>
    </Row>
    <div className="svg-container">
      <Row>
        <Col xs={{ size: 4, offset: 4 }}>
          <SVG
            className="plant-svg"
            src="../../svg/plant.svg"
          />
        </Col>
      </Row>
    </div>
    <Section index={1} />
    <Section index={2} />
    <Section index={3} />
    <Section index={4} />
    <Section index={5} />
    <Section index={6} />
    <Section index={7} />
    <footer>
      footer goes here
    </footer>


  </div>
)

export default App
