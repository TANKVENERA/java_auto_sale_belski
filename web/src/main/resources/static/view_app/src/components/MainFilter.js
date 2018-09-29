import React, {Component} from 'react';
import MarkFilter from './MarkFilter';
import PeriodFilter from './PeriodFilter';
import '../static/mainFilter.css';

class MainFilter extends Component {

    render() {
        return (
            <div className="main_filter_box">
                <div className="mark_box">
                    <MarkFilter/>
                </div>
                <div className="container_box">
                   <PeriodFilter/>
                </div>
            </div>
        )
    }
}

export default MainFilter;