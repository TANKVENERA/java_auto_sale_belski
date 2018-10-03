import React, {Component} from 'react'
import Select from '../../node_modules/react-responsive-select';
import ModelFilter from './ModelFilter'
import '../static/markAndModel.css';
import  '../../node_modules/react-responsive-select/dist/ReactResponsiveSelect.css';
import ArrowDown from '../static/ArrowDown';

class MarkFilter extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: '',
            marks: [],
        }
    };


    handleChange = (selectedOption) => {
        this.setState({selectedOption: selectedOption});
        console.log('Option selected:', selectedOption);
    }

    componentDidMount() {
        fetch('http://localhost:8080')
            .then(result => {
                return result.json();
            })
            .then(data => this.setState({marks: data}));
    }

    render() {
        let marks = this.state.marks.map(function (mark) {
            return {value: mark.id, text: mark.markAuto};
        })

        return (
            <div className="mark_model_box">
                <div className="container_box">
                    <Select
                        noSelectionLabel="Марка"
                        onChange={this.handleChange}
                        isClearable
                        options={marks}
                        caretIcon={ArrowDown}
                    />
                </div>
                <div className="container_box">
                    <ModelFilter passedMark={this.state.selectedOption}/>
                </div>
            </div>
        )
    }
}

export default MarkFilter;