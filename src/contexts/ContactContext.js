import React, { createContext } from 'react';

const ContactContext = createContext();

export const ContactConsumer = ContactContext.Consumer;

class ContactProvider extends React.Component {
  state = {
    contacts: [],
    name: '',
    email: '',
    phone: '',
    id: 20
  }

  componentDidMount() {
    this.getContacts();
  }

  update = info => {
    this.setState(info);
  }

  editContact = id => {
    const contacts = this.state.contacts;
    let updated = {id: id, name: this.state.name, email: this.state.email, phone: this.state.phone};
    this.parseContact(updated);

    contacts.forEach(contact => {
      if (contact.id === id) {
        contact.name = updated.name
        contact.email = updated.email;
        contact.phone = updated.phone;
      }
    });

    this.setState({
      contacts: contacts,
      name: '',
      email: '',
      phone: ''
    })
    };

  addContact = () => {
    let newContact = {id: (this.state.id + 1).toString(), name: this.state.name, email: this.state.email, phone: this.state.phone};

    this.parseContact(newContact);
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
      id: newContact.id,
      name: '',
      email: '',
      phone: ''
    }))
  };

  deleteContact = id => {
    let currentState = this.state.contacts;
    currentState.forEach(contact => {
      if (contact.id === id) {
        const index = currentState.indexOf(contact);
        currentState.splice(index, 1);
      }
    })

    this.setState({
      contacts: currentState
    })
  }

  parseContact = (contact) => {
    contact.name = contact.name.replace(/[\s+|^&;$%@"<>()+,-]/g, ' ');
    contact.name = contact.name.toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
      .join(' ');
    contact.phone = contact.phone.replace(/\D/g, '').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }

  getContacts() {
    fetch('http://localhost:4000/contacts')
      .then(response => response.json())
      .then(contacts => this.setState({ contacts: contacts.contacts }))
      .then(() => {
        let toParse = this.state.contacts;
        toParse.forEach((contact) => {
          this.parseContact(contact);
        })
        this.setState({contacts: toParse})
      })
      .catch(err => console.log(err, 'Error getting all contacts'));
  }

  render() {
    const { update, editContact, addContact, deleteContact } = this;
    const { name, email, phone, contacts } = this.state;
    return (
      <ContactContext.Provider value={{ name, email, phone, contacts, update, editContact, addContact, deleteContact}}>{this.props.children}</ContactContext.Provider>
    )
  }
}

export default ContactProvider;
