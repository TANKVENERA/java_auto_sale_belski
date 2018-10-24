import React, {Component} from 'react';
import {StyledTextArea} from '../../static/StyledTextArea';

class Description extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: ''
        }
    }

    render() {
        return (
            <StyledTextArea
                placeholder='minimun height is 5 rows'
                minRows={5}
            />
        )
    }

}

export default Description;