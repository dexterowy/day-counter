import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as classes from './Add.module.css';
import Calendar from '../../../components/Calendar/Calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Add extends Component {
    state = {
        newEvent: {
            day: this.props.date.getDate(),
            month: this.props.date.getMonth(),
            year: this.props.date.getFullYear()
        },
        inputLabel: '',
        inputYear: this.props.date.getFullYear(),
        inputMonth: this.props.date.getMonth(),
        currentSelect: this.props.date.getDate(),
        styles: [classes.Add],
        validLabel: false
    }

    onChooseDay = (month, day, year) => {
        if(day) {
            this.props.onSelect();
            this.setState( prevState => {
                return {
                    newEvent: {
                        day: day,
                        month: month,
                        year: year
                    },
                    currentSelect: day
                }
            });   
        }
    }


    onChangeLabel = (e) => {
        this.setState({
            inputLabel: e.target.value,
            validLabel: e.target.value.trim() !== ''
        })
    }
    componentDidMount() {        
        this.setState(prevState => {
            return {
                styles: [...prevState.styles, classes.Loaded]
        }
        })
    }


    

    render() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let end = '';
        // if (this.state.newEvent.day === 1) end = 'st';
        // if (this.state.newEvent.day === 2) end = 'nd';
        // if (this.state.newEvent.day === 3) end = 'rd';
        // if (this.state.newEvent.day > 3) end = 'th';

        if (this.state.newEvent.day === 1 || this.state.newEvent.day === 21 || this.state.newEvent.day === 31) end = 'st';
        else if (this.state.newEvent.day === 2 || this.state.newEvent.day === 22) end = 'nd';
        else if (this.state.newEvent.day === 3 || this.state.newEvent.day === 23) end = 'rd';
        else end = 'th';

        let info = `You've selected ${this.state.newEvent.day + end} of ${months[this.state.newEvent.month]}`;
        if(!this.props.selected) {
            info = 'You have to select some day!';
        }
        
        return (
            <div className={this.state.styles.join(' ')}>
            <div className={classes.wrapper}>
                <FontAwesomeIcon className={classes.arrowLeft} icon="caret-left" onClick={this.props.prev}/>
                <Calendar 
                date={this.props.date} 
                chooseDay={this.onChooseDay} 
                selected={this.props.selected ? this.state.currentSelect : ''} 
                yearChange={this.props.yearChange} 
                monthChange={this.props.monthChange}
                monthValue={this.props.monthValue}
                yearValue={this.props.yearValue}/>
                <FontAwesomeIcon className={classes.arrowRight} icon="caret-right" onClick={this.props.next}/>
            </div>
            <span className={classes.info}>{info}</span>
            <input type="text" className={classes.input} placeholder="Enter name of your event" onChange={ (e) => this.onChangeLabel(e)} onFocus={this.onFocusLabel} onBlur={this.onFocusLabel}/>
            <div className={classes.navigation}>
                <button 
                        onClick={() => this.props.onAccept({ ...this.state.newEvent, label: this.state.inputLabel})} 
                disabled={!(this.state.validLabel && this.props.selected)} 
                className={classes.button}>Accept</button>
                <Link to="/">Cancel</Link>
            </div>
            </div>
        )
    }
}

export default withRouter(Add);