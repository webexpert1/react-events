import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        const { events } = this.props;
        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem event={event} key={event.id} />
                ))}
            </Fragment>
        )
    }
}


export default EventList;