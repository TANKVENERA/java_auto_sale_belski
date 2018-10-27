import React, {Component} from 'react';
import {ErrorPrinter} from '../utils/errorPrinter';
import {validateField, addWhiteSpace} from '../utils/util'

const errors = ['Укажите объём двигателя',
                'Объём превышает допустимый максимум']

class Engine extends Component {

    constructor() {
        super()
        this.state = {
            volume: '',
            error: errors[0]
        }
    }

    handleChange = (event) => {
        let volume = event.target.value
        if (volume.includes(' ')) {
            volume = volume.split(' ').join('');
        }
        const regex = /^([1-9]{1})([0-9]{1,9})?$/;
        if (regex.test(volume) || volume === '') {
            if (volume.length > 5) {
                validateField.call(this, volume, errors[1]);
            }
            else {
                validateField.call(this, volume, errors[0]);
            }
            this.setState({
               volume: addWhiteSpace.call(this, volume)
            })
        }
    }

    render() {
        return (
            <div style={{display: 'flex'}}>
                <div>
                    <input value={this.state.volume}
                           onChange={this.handleChange}
                           placeholder="Объём двигателя"
                           style={{height: '34px'}}
                           size="10"
                    />
                </div>
                <div  style={{display: 'flex'}}>
                    <div>
                       ({Number((this.state.volume.split(' ').join('')/1000).toFixed(1) )} л.)
                    </div>
                    <div>
                        <ErrorPrinter formErrors={this.state.error}/>
                    </div>
                </div>
            </div>

        )
    }

}

export default Engine;