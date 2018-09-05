import React, {Component} from 'react'
import Select from '../../node_modules/react-select';

class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            models: [],
        }
    }

    componentDidUpdate(prevProps) {
        console.log('previous parameter:', prevProps);
        const previousMark = prevProps.passedMark === null ? '' : prevProps.passedMark.value
        const markId = this.props.passedMark === null ? '' : this.props.passedMark.value
        if (markId !== previousMark && markId !== '') {
            console.log('markId:', this.props.passedMark.value);
            fetch(`http://localhost:8080/models?mid=${markId}`, {
                method : 'GET'
            })
                .then(result => {
                    return result.json();
                })
                .then(data => this.setState({models: data}));
        }
    }

    render() {
        let options = this.state.models.map(function (model) {
            return {value: model.id, label: model.modelAuto};
        })
        return (
            <div>
                <Select
                    placeholder="Модель"
                    onChange={this.handleChange}
                    isClearable
                    options={options}
                />
            </div>
        )
    }
}

export default Model