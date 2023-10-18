import styled from 'styled-components';

export const StyledForm = styled.form`
    gap: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 300px;
`;

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: #7d6b40;
`;

export const StyledInput = styled.input`
    border-radius: 5px;
    background-color: #fbf5ea;
    border: 1px solid;
    border-color: #efd7a0;
    color: #7d6b40;
    padding: 7px;

`;

export const StyledBtm = styled.button`
    border-radius: 5px;
    background-color: #f7e3c0;
    border: 1px solid;
    border-color: #7d6b40;
    color: #7d6b40;
    padding: 5px;
    &:hover,
    &:focus {
        background-color: #f0b348;
    }
`;