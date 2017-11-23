import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Col, Row } from 'reactstrap'
import { connect } from 'react-redux'
import ToolTimeFloatLeftRight from '../../../../components/ToolTimeFloatLeftRight'
import { ReduxFormInput } from '../../../../components/ReduxFormInput'

const propTypes = {
  reasons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.code,
      code: PropTypes.name,
    }),
  ).isRequired,
}

function mapStateToProps(state) {
  return {
    reasons: state.cancelOrder.reasons,
  }
}

const CancelOrderMiddleDrawer = props => (
  <Row className="cancel-order-middle-drawer">
    <Col xs={{ size: 10, offset: 1 }}>
      <ToolTimeFloatLeftRight
        floatContentLeft={
          <Field
            name="reason"
            component={ReduxFormInput}
            options={props.reasons}
            type="select"
          />
        }
      />
    </Col>
  </Row>
)

CancelOrderMiddleDrawer.propTypes = propTypes
export default connect(mapStateToProps)(CancelOrderMiddleDrawer)
