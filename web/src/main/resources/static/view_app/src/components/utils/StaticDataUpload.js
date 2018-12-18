import React, {Component} from 'react';
import {uploadStaticData} from '../../actions/index'
import {connect} from '../../../node_modules/react-redux'

const MapDispatchToProps = (dispatch) => {
    return {
        uploadStaticData: (data) => dispatch(uploadStaticData(data))
    };
};

class StaticDataUpload extends Component {

    componentWillMount() {
        fetch(`http://192.168.1.106:8080`)
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