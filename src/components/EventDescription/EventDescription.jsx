import React from 'react';
import PropTypes from 'prop-types';

import "./EventDescription.less"

const EventDescription = (props)=>{
    console.log(props.description);
   return <div className="EventDescription">Description: {props.description}</div>
}

EventDescription.propTypes = {
    description: PropTypes.string
}

export default EventDescription