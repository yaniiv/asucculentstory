import React from 'react'
import SVG from 'react-inlinesvg'
import { Container, Row, Col } from 'reactstrap'
import Navbar from '../components/Nav'

const App = () => (
  <div>
    <Navbar />
    <Container>
      <Row>
        <Col
          className="text-center"
          sm={{ size: 4, offset: 4 }}
        >
          Centered Title
        </Col>
      </Row>
      <Row>
        <Col sm={{ size: 4, offset: 4 }}>
          <SVG
            src="../../svg/plant.svg"
          />
        </Col>
      </Row>
    </Container>
  </div>
)

export default App
