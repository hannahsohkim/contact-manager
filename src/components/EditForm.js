import React from 'react';
import { Header, Modal, Icon, Input, Button } from 'semantic-ui-react';
import { ContactConsumer } from '../contexts/ContactContext';

class EditForm extends React.Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
    <ContactConsumer>
    {({ name, email, phone, update, editContact }) => (
      <Modal
      open={this.state.modalOpen}
      onClose={this.handleClose && this.props.toggle}
      size='small'
    >
        <Header as="h4" icon textAlign="center">
          <Icon name="edit" circular />
          <Header.Content>Edit Contact</Header.Content>
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
            onChange={e => update({[e.target.name]: e.target.value })}/>
          </span>
          </Modal.Description>
          <hr/>
          <Modal.Description>
           <Icon name="mail"  size="small" />
           <span>
             <label>Email: </label>
             <Input
              type="text"
              value={email}
              name="email"
              placeholder="Email Address"
              onChange={e => update({[e.target.name]: e.target.value })}/>
          </span>
          </Modal.Description>
          <hr/>
          <Modal.Description>
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
          <hr />
      </Modal.Content>
      <Modal.Actions>
        <div className="ui two buttons">
        <Button
          color='green'
          onClick={() => {
            this.handleClose();
            this.props.toggle();
            editContact(this.props.id)
          }}
          inverted>
          <Icon name='checkmark' /> Confirm Edit
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

export default EditForm;