/**
 * Created by Mina on 18.02.2019.
 */

import React, {Component} from 'react';
import '../head.css'
import  AppBar from '../../../../../../node_modules/@material-ui/core/AppBar'
import Tabs from '../../../../../../node_modules/@material-ui/core/Tabs'
import Tab from '../../../../../../node_modules/@material-ui/core/Tab'
import {Link} from '../../../../../../node_modules/react-router-dom'
import {changeTabAction} from '../../actions/changeTabAction/actions'
import {connect} from '../../../../../../node_modules/react-redux';

const MapStateToProps = (state) => {
    return {
        index: state.changeTab.index
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        changeTab: (index) => dispatch(changeTabAction(index))
    }
};

class ButtonBlock extends Component {

    handleChange = (event, value) => {
        console.log('!!!!!!', value)
        this.props.changeTab(value);

    };

    render() {
        console.log('}}}}}}', this.props.index);
        return (
            <div>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.props.index}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab className="main-button-block-tab" label="Главная" component={Link} to="/"/>
                        <Tab className="main-button-block-tab" label="Объявления"/>
                        <Tab className="main-button-block-tab" label="Новости" component={Link} to="/createAd"/>
                        <Tab className="main-button-block-tab" label="Кабинет" component={Link} to="/profile" />
                    </Tabs>
                </AppBar>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(ButtonBlock);
