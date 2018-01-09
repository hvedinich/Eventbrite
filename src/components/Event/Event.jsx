
import React from 'react';
import PropTypes from 'prop-types';
import EventDescription from '../EventDescription'

import './Event.less';

class Event extends React.Component{
    constructor(){
        super();
        this.state = {active: false};
    }
    getDate (){
    let date = Date.parse(this.props.event.date);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric',
        };
        date = new Date(date);
    return date = date.toLocaleString("en-US", options);
    }

    showMore = ()=> {
        this.setState({active: !this.state.active})
    }

    render(){

    return <div className="Event">
            <div className="Event__container"  onClick={this.showMore}>
                <div className="event__logo"> <img className="event__img" src={this.props.event.logo}/></div>
                <div className="event__description">description{this.props.event.title}</div>
                <div className="event__date">{this.getDate()}</div>
                <div className="event__capacity">Capacity {this.props.event.capacity}</div>
                <div className="event__price">{this.props.event.payment? "Free" : "Paid"}</div>
            </div>
            {this.state.active? <EventDescription description={this.props.event.description}/> : null} 
        </div>
    }
}

Event.propTypes = {
    event: PropTypes.shape({
        description: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        capacity: PropTypes.number,
        payment: PropTypes.bool,
        logo: PropTypes.string,
    }) 
}

export default Event