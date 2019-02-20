/**
 * Created by Mina on 18.02.2019.
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames'
import '../head.css'
import  AppBar from '../../../../../../node_modules/@material-ui/core/AppBar'
import Tabs from '../../../../../../node_modules/@material-ui/core/Tabs'
import Tab from '../../../../../../node_modules/@material-ui/core/Tab'
import { withStyles } from '../../../../../../node_modules/@material-ui/core/styles';

const styles = () => ({
    root: {
        '&$focus': {
            outline: 'none'
        },
    },
    select :{
        outline: 'none !important'
    },
    focus :{

    }
});

class ButtonBlock extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

render () {
    const {classes} = this.props;
    return (
        <div>
            <AppBar position="static" color="default"  >
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                >
                    <Tab selected className="main-button-block-tab"  label="Главная" />
                    <Tab selected className="main-button-block-tab" label="Объявления" />
                    <Tab selected className="main-button-block-tab" label="Новости" />
                    <Tab selected className="main-button-block-tab" label="Кабинет" />
                </Tabs>
            </AppBar>
         </div>
    )
    }
}

// ButtonBlock.propTypes = {
//     classes: PropTypes.object.isRequired,
//     theme: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ButtonBlock);
