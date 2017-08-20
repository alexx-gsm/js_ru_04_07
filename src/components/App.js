import React, {Component} from 'react';
import ArticleList from './ArticlesList'
import {articles} from './fixtures'
import ArticlesChart from './ArticlesChart';
import DayPicker, { DateUtils } from 'react-day-picker';
import moment from 'moment';
import {MONTHS,WEEKDAYS_LONG,WEEKDAYS_SHORT,FIRST_DAY_OF_WEEK,LABELS} from './locale_ru';

import 'react-day-picker/lib/style.css';

class App extends Component {
    state = {
        from: null,
        to: null,
    };

    componentDidMount() {
        moment.locale('ru');
    }


    render() {
        return (
            <div>
                { this.getDayPicker() }
                <ArticleList articles = {articles}/>
                <ArticlesChart articles = {articles}/>
            </div>

        );
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    };

    getDayPicker = () => {
        const { from, to } = this.state;
        return (
            <div className="RangeExample">
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                    locale={'ru'}
                    months={MONTHS}
                    weekdaysLong={WEEKDAYS_LONG}
                    weekdaysShort={WEEKDAYS_SHORT}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK}
                    labels={LABELS}
                />
                {from &&
                to &&
                <p>
                    выбран диапазон дат с
                    {' '}
                    {moment(from).format('LL')}
                    {' '}
                    по
                    {' '}
                    {moment(to).format('LL')}
                    .
                    {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
                </p>}
            </div>
        )
    }
}

export default App;