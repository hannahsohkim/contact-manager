import React from 'react';
import AddContact from './AddContact'
import { Button, Header, Icon } from 'semantic-ui-react';


class Head extends React.Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        {this.state.open ? (<AddContact toggle={this.toggle}/>) : null}

      <Header as="h2" icon textAlign="center">
        <Icon name="users" circular />
        <Header.Content>Contacts</Header.Content>
        <Button
          onClick={this.toggle}
          >Add New Contact</Button>
      </Header>
    </div>
    )
  }
}


export default Head;