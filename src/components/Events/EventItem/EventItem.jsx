import React from 'react';

import * as classes from './EventItem.module.css';
import Label from '../Label/Label';
import Counter from '../Counter/Counter';

const eventItem = (props) => {
    return (
        <li onClick={ () => props.onDelete(props.id)} className={classes.eventItem}>
            <Label label={props.label}/>
            <Counter past={props.past} days={props.days}/>
        </li>
    )
}

export default eventItem;