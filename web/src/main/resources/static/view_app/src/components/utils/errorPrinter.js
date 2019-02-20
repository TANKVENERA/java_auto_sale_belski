import React from 'react';
import isOK from '../../static/icons/isOk.png';
import warning from '../../static/icons/warning.png';
import ReactImageAppear from '../../../node_modules/react-image-appear'

const warningStyles = {
    // verticalAlign: '12px',
    fontSize: '18px',
    fontFamily: 'Arial',
    paddingLeft: '10px',
};

export const ErrorPrinter = (formError) => {
    if (formError.formErrors.length > 0) {
        return (
            <div style={{display: 'table'}}>
                <div style={{height: "40px", display: 'table-cell'}}>
                    <ReactImageAppear src={warning}
                                      animation="bounceIn"
                                      showLoader={false}
                                      placeholderStyle={{backgroundColor: '#fff'}}
                    />
                </div>
                <div>
                    <label style={warningStyles}>{formError.formErrors}</label>
                </div>
            </div>

        )
    }
    else {
        return (
            <div style={{paddingTop: '5px'}}>
                <ReactImageAppear src={isOK}
                                  animation="bounceIn"
                                  showLoader={false}
                                  placeholderStyle={{backgroundColor: '#fff'}}
                />
            </div>
        );
    }
}


