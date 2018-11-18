import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';
import {connect} from '../../../node_modules/react-redux';
import {updatePrevMark, updateModel, uploadModels} from '../../actions/index';
import {initData} from  '../utils/util';

const error = 'Введите марку авто';

const MapStateToProps = (state) => {
    return {
        receivedMark: state.mark,
        prevMark: state.previousMark,
        model: state.model,
        models: state.models
    }
}

const MapDispatchToProps = (dispatch) => {
   return {
       uploadModels: models => dispatch(uploadModels(models)),
       updatePrevMark: prevMark => dispatch(updatePrevMark(prevMark)),
       updateModel: model => dispatch(updateModel(model))
   };
};

class Model extends Component {
    constructor() {
        super()
        this.state = {
            error: error
        }
    }

    handleChange = (selectedModel) => {
        const model = selectedModel === null ? '' : selectedModel.label;
        this.props.updateModel(selectedModel)
        validateField.call(this, model, error)
    };

    componentDidUpdate() {
        const previousMarkId = this.props.prevMark;
        const markId = this.props.receivedMark === null ? '' : this.props.receivedMark.value;
        console.log('current mark:', markId, 'previous mark', previousMarkId, ':::');
        if (markId !== previousMarkId) {
            if (markId === ''){
                console.log('is Empty');
                this.props.updatePrevMark(markId);
                this.props.updateModel('');
            }
            else {
                this.props.updatePrevMark(markId)
                initData(this.props.uploadModels, `models?mid=${markId}`);
            }
        }
    }

    render() {
        let models = this.props.models.map(function (model) {
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
                                  value={models.length === 0 ? 'Модель' : this.props.model}
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

export default connect(MapStateToProps, MapDispatchToProps)(Model);