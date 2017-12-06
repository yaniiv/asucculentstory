import React from 'react'
import SVG from 'react-inlinesvg'
import { Row, Col } from 'reactstrap'
import Navbar from '../components/Nav'
import Section from './Section'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

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
      <SVG
        src="../../svg/plant.svg"
      />
    </div>
    <SectionOne />
    <SectionTwo />
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
