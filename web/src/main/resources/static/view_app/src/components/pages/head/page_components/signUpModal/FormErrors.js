/**
 * Created by Mina on 21.01.2019.
 */
import React from 'react';
import warning from '../../../../../static/icons/warningTriangle.png';
import Flip from '../../../../../../node_modules/react-reveal/Flip';
import './styles/formErrors.css';

export const FormErrors = (param) => {
    if (param.error.includes('server')) {
        return (
            <Flip left>
                <div className="sign_up_error_server">
                    <div className="sign_up_error_img">
                        <img alt="" src={warning} className="error_img"/>
                    </div>
                    <div className="sign_up_error_txt" >
                        <label className="error_txt_label">{param.error}</label>
                    </div>
                </div>
            </Flip>
        )
    }
    else if (param.error.length > 0 && param.error !== 'ok') {
        return (
            <div className="sign_up_error">
                <div className="sign_up_error_img" >
                    <img alt="" src={warning} className="error_img"/>
                </div>
                <div className="sign_up_error_txt" >
                    <label className="error_txt_label">{param.error}</label>
                </div>
            </div>
        )
    } else return (<div/>)
};
