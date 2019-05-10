import React from 'react';
import { Header, Modal, Input, Button,Icon } from 'semantic-ui-react'
import { ContactConsumer } from '../contexts/ContactContext';


class AddContact extends React.Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return(
      <ContactConsumer>
      {({ name, email, phone, update, addContact }) => (
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose && this.props.toggle}
          size="small"
          >
          <Header as="h4" icon textAlign="center">
            <Icon name="user" circular />
            <Header.Content>Add New Contact</Header.Content>
          </Header>
          <Modal.Content>
            <Modal.Description>
              <Icon name="user" size="small" />
              <span>
              <label>Name: </label>
              <Input
                type="text"
                value={name}
                name="name"
                placeholder='Full Name'
                onChange={e => update({[e.target.name]: e.target.value })}
              />
              </span>
            </Modal.Description>
            <hr/>
            <Modal.Description >
              <Icon name="mail"  size="small" />
              <span>
              <label>Email: </label>
              <Input
                type="text"
                value={email}
                name="email"
                placeholder="Email Address"
                onChange={e => update({[e.target.name]: e.target.value })}
              />
              </span>
              <hr/>
              <Icon name="phone" size="small" />
              <span>
              <label>Phone: </label>
              <Input
                type="text"
                value={phone}
                name="phone"
                placeholder="Phone Number"
                onChange={e => update({[e.target.name]: e.target.value })} />
              </span>
            </Modal.Description>
            <hr/>
          </Modal.Content>
          <Modal.Actions>
            <div className='ui two buttons'>
              <Button
                basic
                color="green"
                onClick={() => {
                  addContact(); this.handleClose();
                  this.props.toggle();}}
                  >
                <Icon name='checkmark' /> Add Contact
              </Button>
              <Button
                onClick={this.props.toggle}
                basic
                color="grey"
                >
                <Icon name="backward" /> Go Back
              </Button>
            </div>
          </Modal.Actions>
        </Modal>
        )}
      </ContactConsumer>
    )
  }
}



export default AddContact;