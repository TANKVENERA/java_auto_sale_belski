/**
 * Created by Mina on 21.01.2019.
 */
import React from 'react';
import warning from '../../../../../static/icons/warningTriangle.png';

const errorStyles = {
    // verticalAlign: '12px',
    fontSize: '12px',
    fontFamily: 'Arial',
    color: '#e34065',
    marginBottom: '0px'
};

export const FormErrors = (param) => {
    if (param.error.length > 0) {
        return (
            <div style={{display: 'table'}}>
                <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
                    <img src={warning} style={{width: '22px', height: '22px'}}/>
                </div>
                <div style={{display: 'table-cell'}}>
                    <label style={errorStyles}>{param.error}</label>
                </div>
            </div>
        )
    } else return (<div/>)
};
