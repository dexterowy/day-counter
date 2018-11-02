import React from 'react';

import * as classes from './Label.module.css';

const label = (props) => {
    return (
        <span className={classes.label}>{props.label}</span>
    )
}

export default label;

