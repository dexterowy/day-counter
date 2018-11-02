import React from 'react';

import * as classes from './Header.module.css';
import { withRouter } from 'react-router-dom';

const header = (props) => {
    const months = ['Januar', 'Februar', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const list = props.location.pathname === '/add' ? [classes.header, classes.adding] : [classes.header];
    let end = '';
    if (props.date === 1 || props.date === 21 || props.date === 31) end = 'st';
    else if (props.date === 2 || props.date === 22) end = 'nd';
    else if (props.date === 3 || props.date === 23) end = 'rd';
    else end = 'th';
    return (
        <header className={list.join(" ")}>
            <span className={classes.day}>{props.date + end}</span>
            <span className={classes.info}>{days[props.day] + ', ' + months[props.month]}</span>
        </header>
    )
}

export default withRouter(header);