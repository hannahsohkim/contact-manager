import React from 'react';
import EditForm from './EditForm'
import DeleteForm from './DeleteForm'
import { Button, Card } from 'semantic-ui-react'

class Buttons extends React.Component {
  constructor(props){
    super(props);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this)
  }

  state = {
    editToggle: true,
    deleteToggle: true
  }

  toggleEdit() {
    this.setState(prevState => ({
      editToggle: !prevState.editToggle
    }))
  }

  toggleDelete() {
    this.setState(prevState => ({
      deleteToggle: !prevState.deleteToggle
    }))
  }

render() {
  const { toggleDelete, toggleEdit } = this;
  const { editToggle, deleteToggle } = this.state;

      if (editToggle && deleteToggle) {
         return (
          <Card.Content extra>
            <div className="ui two buttons">
              <Button
                className="test"
                onClick={toggleEdit}
                basic
                color='blue'>
              Edit
            </Button>
            <Button
              className="test2"
              onClick={toggleDelete}
              basic
              color='red'>
              Delete
            </Button>
            </div>
          </Card.Content>)
      } else {
        if (!editToggle) {
          return <EditForm id={this.props.id} toggle={toggleEdit} />
        }
        if (!deleteToggle) {
          return <DeleteForm id={this.props.id} toggle={toggleDelete} />
      }
    }
  }
}

export default Buttons;
