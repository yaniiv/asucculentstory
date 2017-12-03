import React from 'react'
import { Row, Col } from 'reactstrap'

const Section = ({ index }) => (
  <div className={`color-block block-${index}`}>
    <Row>
      <Col xs={{ size: 4, offset: 4 }}>
        two
      </Col>
    </Row>
  </div>
)

export default Section
