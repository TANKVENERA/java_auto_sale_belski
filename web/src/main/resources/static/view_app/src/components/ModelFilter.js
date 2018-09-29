import React, {Component} from 'react'
import Select from '../../node_modules/react-responsive-select';
import  '../../node_modules/react-responsive-select/dist/ReactResponsiveSelect.css';
import ArrowDown from '../static/ArrowDown';

class ModelFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModel: '',
            models: [],
        }
    }

    handleChange = (selectedModel) => {
        this.setState({selectedModel: selectedModel});
        console.log('Option selected model:', selectedModel);
    }

    componentDidUpdate(prevProps) {
        console.log('previous parameter:', prevProps);
        const previousMark = prevProps.passedMark === null ? '' : prevProps.passedMark.text
        console.log('!!!!', this.props.passedMark.text,  this.props.passedMark.value);
        const markId = this.props.passedMark.text === null ? '' : this.props.passedMark.text
        if (markId !== previousMark) {
            if (markId === '') {
                this.setState({models: []});
            } else {
                console.log('markId:', this.props.passedMark.value);
                fetch(`http://localhost:8080/models?mid=${markId}`, {
                    method: 'GET'
                })
                    .then(result => {
                        return result.json();
                    })
                    .then(data => this.setState({models: data}));
            }
        }
    }

    render() {
        let options = this.state.models.map(function (model) {
            return {value: model.id, text: model.modelAuto};
        })
        console.log('updated models', this.state.models);

        return (
            <Select
                noSelectionLabel="Модель"
                onChange={this.handleChange}
                disabled={this.state.selectedModel.text === 'Модель' ? true : false}
                options={options}
                caretIcon={ArrowDown}
            />
        )
    }
}

export default ModelFilter;