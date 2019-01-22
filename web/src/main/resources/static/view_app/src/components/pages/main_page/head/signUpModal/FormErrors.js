/**
 * Created by Mina on 21.01.2019.
 */
import React from 'react';

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
            <div>
                <label style={errorStyles}>{param.error}</label>
            </div>
        )
    } else return (<div/>)
};
