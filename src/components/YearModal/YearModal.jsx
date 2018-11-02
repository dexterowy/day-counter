import React from 'react';

import Modal from '../UI/Modal/Modal';
import * as classes from './YearModal.module.css'

const modal = (props) => {
    return (
        <Modal show={props.show} valid={props.valid} close={props.modalClose} save={props.saveManually}>
            Wybierz rok
            <input autoFocus className={classes.input} value={props.year} onChange={(e) => props.yearChange(e)} type="number"/>
            
                </Modal>
    )
}

export default modal;