import React, {Component} from 'react'
import Select from '../../node_modules/react-select';
import Model from './Model'

class App extends Component {
    constructor() {
        super();
        this.state = {
            selectedOption: '',
            marks: [],
        }
    };

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log('Option selected:', selectedOption);
    }



    componentDidMount() {
        fetch('http://localhost:8080')
            .then(results => {
                return results.json();
            })
            .then(data => this.setState({marks: data}));
    }

    render() {
        let options = this.state.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })

        return (
               <div>
            <Select
                placeholder="Марка"
                onChange={this.handleChange}
                isClearable
                options={options}
            />
            <Model
                   passedMark={this.state.selectedOption}/>
               </div>

        )
    }
}

export default App