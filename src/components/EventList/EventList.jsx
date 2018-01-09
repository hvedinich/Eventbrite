import React from 'react';
import PropTypes from 'prop-types';
import Event from '../Event'

class EventList extends React.Component {
    
    render() {
        console.log(this.props.events);

        return(
            <div>
                <h1>EventList</h1>
                {this.props.events.events.map((event, i)=>{
                    let newEvent = {
                        logo: event.logo.url,
                        description: event.name.text,
                        date: event.start.local,
                        capacity: event.capacity,
                        payment: event.is_free
                    }
                    return(
                    <Event key={event.id} event={newEvent}/>
                    )
                })}
            </div>
        ) 
    }
}
export default EventList