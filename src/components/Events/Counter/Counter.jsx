import React from 'react';

import * as classes from './Counter.module.css';

const counter = (props) => {
    return (
        <span className={classes.counter}>
            <span className={classes.number}>
                {props.days}
            </span>
            <span>
                {props.past ? ' days ago' : ' days left'}
            </span>
        </span>
    )
}

export default counter;