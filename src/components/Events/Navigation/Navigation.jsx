import React from 'react';

import * as classes from './Navigation.module.css';
import { Link } from 'react-router-dom';

const navigation = (props) => {
    return (
        <nav className={classes.navigation}>
            <Link to="/add">Add counter</Link>
        </nav>
    )
}

export default navigation;