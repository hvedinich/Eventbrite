
import React from 'react';
import PropTypes from 'prop-types';
import './Event.less';

const Event = ({ event }) =>(
    <div className="Event">
<div className="event__logo"> <img className="event__img" src={event.logo}/></div>
<div className="event__description">description{event.description}</div>
<div className="event__date">Date</div>
<div className="event__capacity">Capacity</div>
<div className="event__price">Price</div>
    </div>
)

Event.propTypes = {
    event: PropTypes.shape({
        description: PropTypes.string,
        date: PropTypes.string,
        capacity: PropTypes.number,
        payment: PropTypes.bool,
        logo: PropTypes.string,
    }) 
}

export default Event