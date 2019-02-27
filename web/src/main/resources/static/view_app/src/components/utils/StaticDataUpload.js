import React, {Component} from 'react';
import {connect} from '../../../node_modules/react-redux'

export const uploadStaticData = data => ({
    type: 'UPLOAD_STATIC_DATA',
    dataObject: data
});

const MapDispatchToProps = (dispatch) => {
    return {
        uploadStaticData: (data) => dispatch(uploadStaticData(data))
    };
};

class StaticDataUpload extends Component {

    componentWillMount() {
        fetch(`http://localhost:8080`)
            .then(result => {
                return result.json();
            })
            .then(data => this.props.uploadStaticData(data));
    }

    render() {
        return (
               <div/>
        );
    }
}

export default connect(null, MapDispatchToProps)(StaticDataUpload);