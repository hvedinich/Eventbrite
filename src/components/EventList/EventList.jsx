import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event';

class EventList extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>EventList</h1>
        {this.props.events.map((event) => {
          const newEvent = {
              logo: event.logo.url,
              title: event.name.text,
              date: event.start.utc,
              capacity: event.capacity,
              payment: event.is_free,
              description: event.description.text,
          };
          return (
            <Event key={event.id} event={newEvent} />
          );
      })}
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EventList;
