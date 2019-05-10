import React from 'react';
import { ContactConsumer } from '../contexts/ContactContext';
import { Icon, Header, Button, Modal } from 'semantic-ui-react';

class DeleteForm extends React.Component {
  state = { modalOpen: true }

  handleOpen = () => this.setState({ modalOpen: true })
  handleClose = () => this.setState({ modalOpen: false })


  render() {
    return (
      <ContactConsumer>
        {({ deleteContact }) => (
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose && this.props.toggle}
            size='small'
            >
        <Header as="h4" icon textAlign="center">
          <Icon name="user delete" circular />
          <Header.Content>Delete User</Header.Content>
        </Header>
            <Modal.Content>Please confirm if you wish to delete this contact. This action cannot be undone.</Modal.Content>
          <Modal.Actions>
            <div className="ui two buttons">
              <Button
                fluid
                basic
                color="green"
                onClick={() => {
                  deleteContact(this.props.id);
                  this.props.toggle();
                  this.handleClose();}}>
                  <Icon name='checkmark' />
                  Confirm Delete
              </Button>
              <Button
                onClick={this.props.toggle}
                basic
                color="grey"
                >
                <Icon name="backward" />Go Back
              </Button>
            </div>
          </Modal.Actions>
          </Modal>

      )}
       </ContactConsumer>
    )
  }

}

export default DeleteForm;

