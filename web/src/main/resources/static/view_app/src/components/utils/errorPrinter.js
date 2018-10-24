import React from 'react';
import isOK from '../../static/icons/isOk.png';
import warning from '../../static/icons/warning.png';
import ReactImageAppear from '../../../node_modules/react-image-appear'

export const ErrorPrinter = (formError) => {
    if (formError.formErrors.length > 0) {
        return (
            <div style={{display: 'flex'}}>
                <div >
                    <ReactImageAppear src={warning}
                                      animation="bounceIn"
                                      showLoader={false}
                                      placeholderStyle={{backgroundColor: '#fff'}}
                    />
                </div>
                <div>{formError.formErrors}</div>
            </div>

        )
    }
    else {
        return (
            <ReactImageAppear src={isOK}
                              animation="bounceIn"
                              showLoader={false}
                              placeholderStyle={{backgroundColor: '#fff'}}
            />
        );
    }
}


