import React from 'react';

import * as classes from './Events.module.css';
import EventItem from './EventItem/EventItem';
import Navigation from "./Navigation/Navigation";
import Aux from '../../hoc/aux';

const events = (props) => {
    if (props.events.length) {
        return (
            <Aux>
                <ul className={classes.events}>
                    {props.events.map( (item, index) => {
                        return (
                        <EventItem onInfo={props.onInfo} id={index} key={index} label={item.label} past={item.diff < 0} days={Math.floor(Math.abs(item.diff / 1000 / 3600 / 24))} />
                    )})}
                </ul>
                <Navigation />
            </Aux>
        )
    }
    else {
        return(
            <Aux>
                <ul className={[classes.events, classes.placeholder].join(" ")}>
                    <span>Add some items!</span>
                </ul>
                <Navigation />
            </Aux>
        )
    }
}

export default events;