import Select from '../../node_modules/react-select-v1';
import styled from '../../node_modules/styled-components';

const  StyledReactSelect = styled(Select)`
    & .Select-control {
        border-radius: 4px;
        height: ${props => props.large ? "40px" : "28px"};
        width:  ${props => props.large ? "350px" : "94px"};
    }
    
    & .Select-input {
        height: 28px;
    }
    
    & .Select-option {
        height: 28px;
    }
    
    & .Select.has-value.is-clearable.Select--single  > .Select-control .Select-value {
    padding-right: 0px;
    }

    & .Select-menu-outer {
        width: ${props => props.large ? "350px" : "94px"};
    }
    
    & .Select--single > .Select-control .Select-value {
    line-height: 30px;
}
`

export default StyledReactSelect;