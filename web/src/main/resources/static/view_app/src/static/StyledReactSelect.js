import Select from '../../node_modules/react-select-v1';
import styled from '../../node_modules/styled-components';

const  StyledReactSelect = styled(Select)`
    
      &.Select {  
        &.is-focused > .Select-control {
            border: 1.5px solid #007eff;
        }
        
         &.is-focused:not(.is-open) > .Select-control {
            border: 1.5px solid #007eff;
            box-shadow: 0 0 0 0 rgba(0,0,0,0.75);
        }
      }
    & .Select-control {
        border-radius: 5px;
        box-sizing: border-box;
        border-top-left-radius: ${props => props.currency_distance ? "0px" : "5px"};
        border-bottom-left-radius: ${props => props.currency_distance ? "0px" : "5px"};
        height: ${props => props.large || props.currency_distance ? "40px" : "28px"};
        width:  ${props => props.large ? "300px" : (props.currency_distance ? "120px" : "94px")};
        font-size: 20px;
        font-family: Arial;
    }
    
    & .Select-input {
        height: 35px;
        
    }
    
    & .Select-option {
        height: 35px;
        font-size: 18px;
        font-family: Arial;
    }
      
    & .Select-menu-outer {
        width: ${props => props.large ? "300px" : (props.currency_distance ? "120px" : "94px")};
    }
    
    & .Select--single > .Select-control .Select-value {
    line-height: 30px;
}
`

export default StyledReactSelect;