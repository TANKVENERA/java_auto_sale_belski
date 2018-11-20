import React, {Component} from 'react'
import Select from '../../../node_modules/react-responsive-select';
import ArrowDown from '../../static/ArrowDown';
import {uploadModels, updateModel, updatePrevMark} from '../../actions/index';
import {connect} from '../../../node_modules/react-redux';
import {initData} from  '../utils/util';

const MapStateToProps = (state) => {
    return {
        receivedMark: state.mainFilterParams.mark,
        prevMark: state.mainFilterParams.previousMark,
        model: state.mainFilterParams.model,
        models: state.mainFilterParams.models
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        uploadModels: models => dispatch(uploadModels(models)),
        updateModel: model => dispatch(updateModel(model, 'main_filter')),
        updatePrevMark: prevMark => dispatch(updatePrevMark(prevMark))
    }
}

class ModelFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModel: '',
        }
    }

    handleChange = (selectedModel) => {
        this.props.updateModel(selectedModel);
    }

    componentDidUpdate() {
        const previousMarkId = this.props.prevMark;
        const markId = this.props.receivedMark.text === 'Марка' ? '' : this.props.receivedMark.value;
        console.log('model-filter', this.props.receivedMark.text , 'previous mark', previousMarkId, ':::');
        if (markId !== previousMarkId) {
            this.props.updatePrevMark(markId);
            initData(this.props.uploadModels, `models?mid=${markId}`)
        }
    }

    render() {
        let options = this.props.models.map(function (model) {
            return {value: model.id, text: model.modelAuto};
        });
        return (
            <Select
                noSelectionLabel="Модель"
                onChange={this.handleChange}
                disabled={this.props.models.length === 0 ? true : false}
                options={options}
                caretIcon={ArrowDown}
            />
        )
    }
}

export default  connect(MapStateToProps, MapDispatchToProps)(ModelFilter);