import { Component } from 'react';
import { nanoid } from 'nanoid';
import { AddForm } from './AddForm/AddForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }
  

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      })
    }
  };

  componentDidUpdate(_, prevState) {

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  };


  onFormSubmit = (data) => {

    const checkName = this.state.contacts.find(
					contact => contact.name.toLowerCase() === data.name.toLowerCase());
    if (checkName) {
      return alert(`${data.name} is already in contacts` )
    }
  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {...data, id:nanoid()} ],
    }));
  }


  onClickDel = (delId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== delId)
    }))
  }


  onChangeFilter = (filterName) => {
    this.setState ({
      filter: filterName
    })
  }


  getVisibleItems = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(item => {
      const nameFilter = filter.toLowerCase();
      return item.name.toLowerCase().includes(nameFilter);
    });
  };

  
  render() {
    const visibleItems = this.getVisibleItems();
    
    return (
      <div className='main-div'>
        <h1>Phonebook</h1>
        <AddForm onFormSubmit={this.onFormSubmit} />
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.onChangeFilter} />
        <ContactsList
          items={visibleItems}
          onClickDel = {this.onClickDel}
        />
      </div>
    );
  }
}