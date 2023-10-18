import { StyledForm, StyledLabel, StyledBtm, StyledInput} from './AddForm.styled';
import { useState } from "react";

export const AddForm = ({onFormSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const onChangeName = evt => {
        const { value } = evt.currentTarget;
        setName(value)
    }

    const onChangeNumber = evt => {
        const { value } = evt.currentTarget;
        setNumber(value)
    }

    const value = {
        name: name,
        number: number,
    }
    
    const onSubmit = evt => {
        evt.preventDefault();
        onFormSubmit(value);
        reset();
    }

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
        <StyledForm onSubmit={onSubmit}>
        <StyledLabel>
            Name
            <StyledInput
            type="text"
            name="name"
            // pattern="[A-Za-z]{1,32}"
            value={name}
            onChange={onChangeName}
            required />
        </StyledLabel>
        <StyledLabel>
            tel.
            <StyledInput
            type="tel"
            name="number"
            pattern="\+?[0-9\s\-\(\)]+"
            value={number}
            onChange={onChangeNumber}
            required />
        </StyledLabel>
        <StyledBtm type="submit">Add contact</StyledBtm>
        </StyledForm>
    )
};
