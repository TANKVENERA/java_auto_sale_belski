import React, {Component} from 'react'
import Select from '../../../node_modules/react-responsive-select';
import ArrowDown from '../../static/ArrowDown';
import {retrieveData} from '../utils/util';

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
        this.props.onSelectModelFromModelComp(selectedModel);
    }

    componentDidUpdate(prevProps) {
        const previousMarkId = prevProps.passedMark.value
        const markId = this.props.passedMark.value
        if (markId!==previousMarkId && previousMarkId)
         {
            retrieveData.call(this, 'models', `models?mid=${markId}`);
         }
    }

    render() {
        let options = this.state.models.map(function (model) {
            return {value: model.id, text: model.modelAuto};
        })

        return (
            <Select
                noSelectionLabel="Модель"
                onChange={this.handleChange}
                disabled={this.state.models.length === 0 ? true : false}
                options={options}
                caretIcon={ArrowDown}
            />
        )
    }
}

export default ModelFilter;