import TextareaAutosize from '../../node_modules/react-textarea-autosize';
import styled from '../../node_modules/styled-components';

export const StyledTextArea = styled(TextareaAutosize)`
    resize: none;
    box-sizing: border-box;
    font-size: 18px;
    width: 450px;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    font-family: Arial;
    
    :focus {
        border: 1.5px solid #007eff
    }
    
    ::-webkit-input-placeholder{
    color: #aaa;
    }
`

