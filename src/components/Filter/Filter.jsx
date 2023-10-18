import { StyledInput, StyledText } from "./Filter.styled"


export const Filter = ({ onChangeFilter }) => {

    const onChange = evt => {
        const filterName = evt.currentTarget.value
        onChangeFilter(filterName)
    }

    return (
        <div>
            <StyledText>Find contacts by name:</StyledText>
            <StyledInput
                type="text"
                name='filter'
                onChange={onChange}
            />
        </div>
    );
}