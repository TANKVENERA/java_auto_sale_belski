import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData} from '../utils/util';

class Model extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModel: '',
            models: [],
        }
    }

    handleChange = (selectedModel) => {
        this.setState({selectedModel: selectedModel});
    }

    componentDidUpdate(prevProps) {
        const previousMarkId = prevProps.passedMark === null ? '' : prevProps.passedMark.value
        const markId = this.props.passedMark === null ? '' : this.props.passedMark.value
        console.log('current mark:', markId, 'previous mark', previousMarkId);
        if (markId !== previousMarkId ) {
            if (markId === ''){
                console.log('is Empty');
                this.setState({models : []})
            }
            else {
                retrieveData.call(this, 'models', `models?mid=${markId}`);
            }
        }
    }

    render() {
        let models = this.state.models.map(function (model) {
            return {value: model.id, label: model.modelAuto};
        })

        return (
            <StyledSelect large
                          onChange={this.handleChange}
                          placeholder="Модель"
                          options={models}
                          value={models.length === 0 ? 'Модель' : this.state.selectedModel}
                          disabled={models.length === 0 ? true : false}
                          backspaceRemoves={false}
                          escapeClearsValue={false}
                          deleteRemoves={false}
            />
        )
    }
}

export default Model;