import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event';

import './EventList.less';

class EventList extends React.Component {
  componentDidMount() {

  }

  renderEventList = () => this.props.events.map((event) => {
    console.log('logo', event)
    const newEvent = {
      logo: event.logo,
      title: event.name.text,
      date: event.start.utc,
      capacity: event.capacity,
      payment: event.is_free,
      description: event.description.text,
    };
    return (
      <div className="EventList__event">
        <Event key={event.id} event={newEvent} />
      </div>
    );
  })

  render() {
    return (
      <div className="EventList">
        {this.props.fetching ? <span>loading...</span> : this.renderEventList()}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EventList;
