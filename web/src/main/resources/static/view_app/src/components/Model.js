import React, {Component} from 'react'
import Select from '../../node_modules/react-select';
import PropTypes from '../../node_modules/prop-types';
import Typography from '../../node_modules/@material-ui/core/Typography';
import MenuItem from '../../node_modules/@material-ui/core/MenuItem';
import Paper from '../../node_modules/@material-ui/core/Paper';
import TextField from '../../node_modules/@material-ui/core/TextField';

//import {TransitionGroup} from '../../node_modules/react-transition-group'
 import   customStyles from '../react-select-mui.scss'
import {withStyles} from '../../node_modules/@material-ui/core/styles'
//import makeAnimated from '../../node_modules/react-select/lib/animated';
const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    input: {
        display: 'flex',
        padding: 0,
    },
    valueContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: 1,
        alignItems: 'center',
    },
    chip: {
        margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
    },
    // chipFocused: {
    //     backgroundColor: emphasize(
    //         theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
    //         0.08,
    //     ),
    // },
    noOptionsMessage: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
    },
    singleValue: {
        fontSize: 16,
    },
    placeholder: {
        position: 'absolute',
        left: 2,
        fontSize: 16,
    },
    paper: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
});

function Menu(props) {
    return (
        <Paper square className={props.selectProps.classes.paper} {...props.innerProps}>
            {props.children}
        </Paper>
    );
}

function Option(props) {
    return (
        <MenuItem
            buttonRef={props.innerRef}
            selected={props.isFocused}
            component="div"
            style={{
                fontWeight: props.isSelected ? 500 : 400,
            }}
            {...props.innerProps}
        >
            {props.children}
        </MenuItem>
    );
}

function ValueContainer(props) {
    return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function Placeholder(props) {
    return (
        <Typography
            color="textSecondary"
            className={props.selectProps.classes.placeholder}
            {...props.innerProps}
        >
            {props.children}
        </Typography>
    );
}

function inputComponent({ inputRef, ...props }) {
    return <div ref={inputRef} {...props} />;
}

function Control(props) {
    return (
        <TextField
            fullWidth
            InputProps={{
                inputComponent,
                inputProps: {
                    className: props.selectProps.classes.input,
                    inputRef: props.innerRef,
                    children: props.children,
                    ...props.innerProps,
                },
            }}
            {...props.selectProps.textFieldProps}
        />
    );
}

const components = {
    Placeholder,
    ValueContainer,
    Option,
    Menu,
    Control
};


class Model extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedModel: '',
            models: [],
        }
    }

    handleChange = (selectedModel) => {
        this.setState({selectedModel: selectedModel});
        console.log('Option selected model:', selectedModel);
    }

    componentDidUpdate(prevProps) {
        console.log('previous parameter:', prevProps);
        const previousMark = prevProps.passedMark === null ? '' : prevProps.passedMark.value
        const markId = this.props.passedMark === null ? '' : this.props.passedMark.value
        if (markId !== previousMark) {
            if (markId === '') {
                this.setState({models: []});
            } else {
                console.log('markId:', this.props.passedMark.value);
                fetch(`http://localhost:8080/models?mid=${markId}`, {
                    method: 'GET'
                })
                    .then(result => {
                        return result.json();
                    })
                    .then(data => this.setState({models: data}));
            }
        }
    }

    render() {
        const { classes } = this.props;
        let options = this.state.models.map(function (model) {
            return {value: model.id, label: model.modelAuto};
        })
        console.log('updated models', this.state.models);
        // const customStyles = {
        //     option: (base, state) => ({
        //         ...base,
        //         borderBottom: '1px dotted pink',
        //         padding: 10,
        //         color: 'red',
        //         borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
        //         transition: '.5s ease-in all'
        //     }),
        //
       // }

        return (
        <div >
            <Select className={styles.button}
                //  closeMenuOnSelect={false}
               // isMulti
             styles={customStyles}
                components={components}
                placeholder="Модель"
                onChange={this.handleChange}
                isClearable
                options={options}
                classes={classes}
               // components={makeAnimated()}
                value={this.props.passedMark ? this.state.selectedModel : ''}
            />
        </div>
        )
    }
}

Model.propTypes =  {
    classes : PropTypes.object.isRequired,
    theme : PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Model);