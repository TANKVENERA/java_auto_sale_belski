import React, {Component} from 'react';
import StyledSelect from '../../static/StyledReactSelect';
import {retrieveData, validateField} from '../utils/util';
import {ErrorPrinter} from '../utils/errorPrinter';

const error = 'Выберите кузов авто';

class BodyStyle extends Component {
    constructor() {
        super();
        this.state = {
            styles: [],
            selectedStyle: '',
            error: error,
        }
    }

    handleChange = (selectedStyle) => {
        this.setState({selectedStyle: selectedStyle});
        const style = selectedStyle === null ? '' : selectedStyle.label;
        validateField.call(this, style, error);
    }

    componentDidMount(){
        retrieveData.call(this, 'styles', 'bodyStyles');
    }

    render() {
        let styles = this.state.styles.map(function (style, index) {
            return {value: index, label: style};
        })
        return (
            <div style={{display : 'flex'}}>
                <div>
                    <StyledSelect large
                                  options={styles}
                                  onChange={this.handleChange}
                                  placeholder="Кузов"
                                  value={this.state.selectedStyle}
                                  backspaceRemoves={false}
                                  escapeClearsValue={false}
                                  deleteRemoves={false}
                    />
                </div>
                <div>
                    <ErrorPrinter formErrors={this.state.error}/>
                </div>
            </div>
        );
    }
}

export default BodyStyle;