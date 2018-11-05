import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';
import {connect} from '../../../node_modules/react-redux';
import {updatePrevMark} from '../../actions/index';

const error = 'Введите марку авто';

const MapStateToProps = (state) => {
    return {
        receivedMark: state.mark,
        prevMark: state.previousMark
    }
}

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

    componentDidUpdate() {
        const previousMarkId = this.props.prevMark === null ? '' : this.props.prevMark
        const markId = this.props.receivedMark === null ? '' : this.props.receivedMark.value
        console.log('current mark:', markId, 'previous mark', previousMarkId, ':::', this.props.prevMark);
        if (markId !== previousMarkId) {
            if (markId === ''){
                console.log('is Empty');
                this.setState({models : []})
                this.props.dispatch(updatePrevMark(''))
            }
            else {
                this.props.dispatch(updatePrevMark(markId))
                retrieveData.call(this, 'models', `models?mid=${markId}`);
            }
        }
    }

    render() {
        let models = this.state.models.map(function (model) {
            return {value: model.id, label: model.modelAuto};
        })
        console.log('prev mark from model from react-redux', this.props.prevMark === '');
        console.log('current model from react-redux', this.props.receivedMark);
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

export default connect(MapStateToProps, null)(Model);