import React from 'react';

import * as classes from './Modal.module.css';

const modal = (props) => {
    if (props.show) {
        return (
            <div className={classes.wrapper}>
                <div className={classes.modal}>
                    {props.children}
                    <div className={classes.buttons}>
                        <button className={classes.btnOk} disabled={!props.valid} onClick={props.save}>Ok</button>
                        <button className={classes.btnCancel} onClick={props.close}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default modal;