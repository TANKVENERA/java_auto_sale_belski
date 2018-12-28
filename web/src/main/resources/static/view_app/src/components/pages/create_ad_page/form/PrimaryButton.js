import React, {Component} from 'react';
import  '../../static/createAdButton.css'
import {connect} from '../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        mark: state.createAdParams.mark,
        model: state.createAdParams.model,
        yearOfIssue: state.createAdParams.yearOfIssue,
        price: state.createAdParams.price,
        bodyStyle: state.createAdParams.bodyStyle,
        transmission: state.createAdParams.transmission,
        color: state.createAdParams.color,
        engineValue: state.createAdParams.engineValue,
        fuelType: state.createAdParams.fuelType,
        gearBoxType: state.createAdParams.gearBoxType,
        mileage: state.createAdParams.mileage,
        currencyType: state.createAdParams.currencyType,
        unitOfDistanceMeasure: state.createAdParams.unitOfDistanceMeasure,
        description: state.createAdParams.description,
        primaryImgIndex: state.createAdParams.primaryImgIndex,
        images: state.createAdParams.images
    }
};

class PrimaryButton extends Component {

    sendRQWithAdData = () => {
        fetch('http://localhost:8080/createAd', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mark: this.props.mark.label,
                model: this.props.model.label,
                yearOfIssue: this.props.yearOfIssue.label,
                price: this.props.price,
                bodyStyle: this.props.bodyStyle.label,
                transmission: this.props.transmission.label,
                color: this.props.color.label,
                engineValue: this.props.engineValue,
                fuelType: this.props.fuelType,
                gearBoxType: this.props.gearBoxType,
                mileage: this.props.mileage.label,
                currencyType: this.props.currencyType.label,
                unitOfDistanceMeasure: this.props.unitOfDistanceMeasure.label,
                description: this.props.description,
                primaryImgIndex: this.props.primaryImgIndex,
                images: this.props.images.map((image) => {
                    return {index: image.index, base64String: image.base64String, fileName: image.name}
                })
            })
        })
    };

    render() {
        return (
            <div className="primary-btn">
                <div className="button-block">
                    <hr className="hor-line"/>
                    <button type="button"
                            className="primary-button"
                            onClick={this.sendRQWithAdData}>
                        Сохранить
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(MapStateToProps, null)(PrimaryButton)

