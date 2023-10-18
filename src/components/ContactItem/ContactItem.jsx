import { StyledItem, StyledBtm, StyledText } from "./ContactItem.styled";


export const ContactItem = ({item, onClickDel }) => {

    return (
        <StyledItem >
            <StyledText>{item.name}: {item.number}</StyledText>
            <StyledBtm type="button" name={item.id} onClick={() => onClickDel(item.id)}>
                delete
            </StyledBtm>
        </StyledItem>
    )
}