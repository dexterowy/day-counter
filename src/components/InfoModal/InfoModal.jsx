import React from 'react';

import Modal from '../UI/Modal/Modal';
import * as classes from './InfoModal.module.css';

const infoModal = (props) => {
    return (
        <Modal show={props.show} info={true} onDelete={() => props.onDelete(props.event.key)} close={props.modalClose} save={props.saveManually} valid={props.valid}>
            <h3 className={classes.title}>{props.event.label}</h3>
            <p className={classes.date}>{new Date(props.event.year, props.event.month, props.event.day).toDateString()}</p>
        </Modal>
    )
}

export default infoModal;