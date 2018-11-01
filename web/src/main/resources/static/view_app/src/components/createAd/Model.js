import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Введите марку авто';

class Model extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModel: '',
            models: [],
            error: error
        }
    }

    handleChange = (selectedModel) => {
        this.setState({selectedModel: selectedModel});
        const model = selectedModel === null ? '' : selectedModel.label;
        validateField.call(this, model, error)
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
            <div className="form_item">
                <div className="form_item_label">
                    Модель автомобиля
                </div>
                <div className="form_item_field">
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
                </div>
                <div className="form_item_error">
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>
        )
    }
}

export default Model;