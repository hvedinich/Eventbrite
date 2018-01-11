import React from 'react';
import PropTypes from 'prop-types';

import './EventDescription.less'

const EventDescription = props => (
  <div className="EventDescription">
    Description: {props.description}
  </div>
)

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default EventDescription
