import styled from 'styled-components';

export const StyledItem = styled.li`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
`;

export const StyledText = styled.p`
    color: #7d6b40;
`;

export const StyledBtm = styled.button`
    border-radius: 5px;
    background-color: #f7e3c0;
    border: 1px solid;
    border-color: #7d6b40;
    color: #7d6b40;
    padding: 3px;
    &:hover,
    &:focus {
        background-color: #f0b348;
    }
`;