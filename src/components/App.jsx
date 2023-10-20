
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';

const getContacts = () => {
    const savedContacts = localStorage.getItem('contacts');
      if (savedContacts !== null) {
        return JSON.parse(savedContacts);
      }
    return [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
}

export const App = () => {
  
    const [contacts, setContacts] = useState(getContacts);
  
    const [filter, setFilter] = useState('');


    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts))
    }, [contacts]);
  

    const onFormSubmit = (data) => {
      const checkName = contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase());
      if (checkName) {
        return Notiflix.Notify.failure(`${data.name} is already in contacts`);
      }

      setContacts(prevContacts => (
        [...prevContacts, {...data, id:nanoid()} ]
      ))
    }


    const onClickDel = (delId) => {
      setContacts(prevContacts => (
        prevContacts.filter(item => item.id !== delId)
      ))
    }


    const onChangeFilter = (filterName) => {
      setFilter(filterName)
    }

  
    const visibleItems = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))

    
    return (
      <div className='main-div'>
        <h1>Phonebook</h1>
        <AddForm onFormSubmit={onFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={onChangeFilter} />
        <ContactsList
          items={visibleItems}
          onClickDel = {onClickDel}
        />
      </div>
    );
  }


