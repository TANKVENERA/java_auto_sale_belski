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
        this.setState({selectedOption : selectedOption});
        console.log('Option selected:', selectedOption);
}

    componentDidMount() {
        console.log('Request is sent');
        fetch('http://localhost:8080')
            .then(result => {
                return result.json();
            })
            .then(data => this.setState({marks: data}));
    }

    render() {
        let options = this.state.marks.map(function (mark) {
            return {value: mark.id, label: mark.markAuto};
        })
        console.log('setState:' , this.state.selectedOption);
        return (
               <div>
                    <Select
                        placeholder="Марка"
                        onChange={this.handleChange}
                        isClearable
                        options={options}
                    />
                    <Model passedMark={this.state.selectedOption}/>
               </div>
        )
    }
}

export default App