import React, {Component} from 'react'


class Model extends Component {
    constructor() {

        this.state = {
            markAuto: '',
        };
    }
    render() {

        return (
            <div>
                <h2>{this.props.passedMark.label}</h2>
                <h2>{this.props.passedMark.value}</h2>
            </div>

        )
    }
}

export default Model