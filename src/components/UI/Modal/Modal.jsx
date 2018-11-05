import React from 'react';

import * as classes from './Modal.module.css';

const modal = (props) => {
    if (props.show) {
        let btns = (
            <div className={classes.buttons}>
                <button className={classes.btnOk} disabled={!props.valid} onClick={props.save}>Ok</button>
                <button className={classes.btnCancel} onClick={props.close}>Cancel</button>
            </div>
        )
        if(props.info) {
            btns = (
                <div className={classes.buttons}>
                    <button className={classes.btnOk}  onClick={props.close}>Ok</button>
                    <button className={classes.btnDelete}  onClick={props.onDelete}>Delete</button>
                </div>
            )
        }
        return (
            <div className={classes.wrapper}>
                <div className={classes.modal}>
                    {props.children}
                    {btns}
                </div>
            </div>
        )
    }
    else {
        return null;
    }
}

export default modal;