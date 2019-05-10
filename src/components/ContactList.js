import React from 'react';
import Buttons from './Buttons'
import { ContactConsumer } from '../contexts/ContactContext';
import { Card, Icon } from 'semantic-ui-react'

const ContactList = () => {
  return (
    <Card.Group>
    <ContactConsumer>
      { ({ contacts }) => (
        contacts.map((contact) => (
          <Card key={contact.id}>
          <Card.Content>
            <Card.Header>{contact.name}</Card.Header>
            <Card.Description>
            <Icon name="mail" size="small" />
              <span>{contact.email}</span>
              <br/>
              <Icon name="phone" size="small" />
              <span>{contact.phone}</span>
            </Card.Description>
          </Card.Content>
          <Buttons id={contact.id}/>
        </Card>
        ))
      )}
    </ContactConsumer>
    </Card.Group>
  );
};

export default ContactList;
