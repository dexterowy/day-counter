import React, { Component } from 'react';

import * as classes from './Daycounter.module.css';
import Header from '../../components/Header/Header';
import Events from '../../components/Events/Events';
import Add from './Add/Add';
import { Route, withRouter } from 'react-router-dom';
import Aux from '../../hoc/aux';
import YearModal from '../../components/YearModal/YearModal';
import MonthModal from '../../components/MonthModal/MonthModal';

class Daycounter extends Component {
    state = {
        adding: false,
        today: new Date(),
        date: new Date(),
        month: new Date().getMonth(),
        year: new Date().getFullYear(),
        modalMonthOpen: false,
        modalYearOpen: false,
        selected: true,
        valid: true,
        fetch: true,
        events: []
    }

    onAddHandler = () => {
        this.setState(prevState => {
            return {
                adding: !prevState.adding
            }
        })
    }

    onNextMonth = () => {
        this.setState(prevState => {
            return {
                date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() + 1),
                month: new Date(prevState.date.getFullYear(), prevState.date.getMonth() + 1).getMonth(),
                year: new Date(prevState.date.getFullYear(), prevState.date.getMonth() + 1).getFullYear(),
                selected: false
            }
        })
    }

    onYearChange = () => {
        this.setState({
            modalYearOpen: true
        })
    }

    onMonthChange = () => {
        this.setState({
            modalMonthOpen: true
        })
    }

    onModalClose = () => {
        this.setState({
            modalYearOpen: false,
            modalMonthOpen: false
        })
    }

    onPrevMonth = () => {
        this.setState(prevState => {
            return {
                date: new Date(prevState.date.getFullYear(), prevState.date.getMonth() - 1),
                month: new Date(prevState.date.getFullYear(), prevState.date.getMonth() - 1).getMonth(),
                year: new Date(prevState.date.getFullYear(), prevState.date.getMonth() - 1).getFullYear(),
                selected: false
            }
        })
    }

    componentDidUpdate() {
        if (this.props.location.pathname === '/') {
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#29ABE2');
        }
        if(this.props.location.pathname === '/add') {
            document.querySelector('meta[name="theme-color"]').setAttribute("content", '#FFFFFF');
        }
    }
    componentDidMount() {
        const events = JSON.parse(localStorage.getItem('events'));
        if(this.state.fetch) {
            this.setState({
                events: events ? events : [],
                fetch: false
            })
        }
    }
    onChangeYearMaually = (e) => {
        if(e.target.value >= 1970) {
            this.setState({
                year: e.target.value,
                valid: true
            })
        }
        else {
            this.setState({
                year: e.target.value,
                valid: false
            })}
    }

    onChangeMonthManually = (e) => {
        this.setState({
            month: e.target.value
        })
    }
    onSaveManually = () => {
        this.setState( prevState => {
            return {
                date: new Date(prevState.year, prevState.month),
                selected: false
            }
        })
        this.onModalClose();
    }
    onSelect = () => {
        this.setState({
            selected: true
        })
    }

    onAccept = (newEvent) => {
        let events = JSON.parse(localStorage.getItem('events')) || [];
        console.log(this.props);
        if(events) {
            events.push({...newEvent})
        }
        else {
            events = [{ ...newEvent}];
        }
        localStorage.setItem('events', JSON.stringify(events))
        this.setState( prevState => {
            return {
                events: [...prevState.events, {...newEvent}]
            }
        })
        this.props.history.push('/');
    }

    onDelete = (key) => {
        console.log(key);
        const events = JSON.parse(localStorage.getItem('events'));
        const newEvents = events.filter( (item, index) => {
            return index !== key
        })
        localStorage.setItem('events', JSON.stringify(newEvents));
        this.setState( prevState => {
            const stateEvents = [...prevState.events];
            const newStateEvents = stateEvents.filter( (item, index) => {
                return index !== key
            })
            return {
                events: newStateEvents
            }
        })
    }

    render() {
        const styles= this.props.location.pathname === '/' ? [classes.main, classes.events] : [classes.main, classes.add];

        return (
            <Aux>
                <YearModal show={this.state.modalYearOpen} valid={this.state.valid} year={this.state.year} saveManually={this.onSaveManually} yearChange={this.onChangeYearMaually} modalClose={this.onModalClose}/>
                <MonthModal valid={true} saveManually={this.onSaveManually} changeMonthManually={this.onChangeMonthManually} month={this.state.month} show={this.state.modalMonthOpen} modalClose={this.onModalClose}/>
                <div className={this.state.modalYearOpen || this.state.modalMonthOpen ? 
                    [classes.Daycounter, classes.blured].join(" ") : 
                    classes.Daycounter}>
                    <Header day={this.state.today.getDay()} date={this.state.today.getDate()} month={this.state.today.getMonth()} />
                    <div className={styles.join(' ')}>
                        <Route path="/" exact render={() => <Events onDelete={this.onDelete} today={this.state.today} events={this.state.events}/>} />
                        <Route path="/add" exact 
                        render={() => <Add date={this.state.date} 
                                        next={this.onNextMonth} 
                                        prev={this.onPrevMonth} 
                                        yearChange={this.onYearChange} monthChange={this.onMonthChange}
                                        selected={this.state.selected}
                                        onSelect={this.onSelect}
                                        onAccept={this.onAccept}/>} />
                    </div>
                </div>
            </Aux>
        )
    }
}

export default withRouter(Daycounter);