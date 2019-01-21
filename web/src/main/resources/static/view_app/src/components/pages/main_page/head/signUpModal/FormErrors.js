/**
 * Created by Mina on 21.01.2019.
 */
import React from 'react';

export const FormErrors = (param) => {
    if (param.error.length > 0) {
        return (
            <div>
                <label >{param.error}</label>
            </div>
        )
    } else return (<div/>)
};
