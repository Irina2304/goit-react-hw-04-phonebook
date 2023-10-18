import { ContactItem } from "components/ContactItem/ContactItem";


export const ContactsList = ({ items, onClickDel }) => {

    return (     
        <ul>
            {items.map(item => (
                <ContactItem
                    key={item.id}
                    item={item}
                    onClickDel={onClickDel}
                />
            ))}
        </ul>
    )
};