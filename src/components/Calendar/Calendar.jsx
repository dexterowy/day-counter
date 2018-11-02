import React from 'react';

import * as classes from './Calendar.module.css';

const calendar = (props) => {
    const date = props.date
    const date1 = new Date(date.getFullYear(), date.getMonth());
    const date2 = new Date(date.getFullYear(), date.getMonth() + 1)
    const firstDay = date1.getDay() === 0 ? 6 : date1.getDay() - 1;
    const daysOfMonth = Math.round((date2.getTime() - date1.getTime()) / (3600 * 24 * 1000));

    
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    
    
    
    let days = [];
    for (let i = 0; i < 42; i++) {
        days.push(null);
    }
    let index = 1;
    for (let i = firstDay; i < daysOfMonth + firstDay; i++) {
        days[i] = index;
        index++;
    }
    let weeks = [];
    for (let i = 0; i < 6; i++) {
        let week = [];
        for (let j = 0; j < 7; j++) {
            week.push(days.shift(1));
        }
        weeks.push(week);
    }
    
    


    return (
        <div>
            <div className={classes.info}>
                <span className={classes.month} onClick={props.monthChange}>{month[date.getMonth()]}</span>
                <span className={classes.year} onClick={props.yearChange}>{date.getFullYear()}</span>
            </div>
            <table className={classes.calendar}>
                <thead>
                    <tr>
                        <th>M</th>
                        <th>T</th>
                        <th>W</th>
                        <th>T</th>
                        <th>F</th>
                        <th>S</th>
                        <th>S</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((item, index) => {
                        return (<tr key={index}>
                            {item.map((item, index) => {
                                return (
                                    <td key={index} className={props.selected === item ? [classes.day, classes.selected].join(' ') : classes.day} onClick={() => props.chooseDay(date.getMonth(), item, date.getFullYear())}>
                                        {item}
                                    </td>
                                )
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default calendar;