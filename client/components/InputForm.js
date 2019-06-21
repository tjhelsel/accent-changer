import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputStr: '',
      outputStr: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    await this.setState(prevState => {
      return { outputStr: prevState.inputStr + ' accentuized!' };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          label="Enter some text to accentuize..."
          name="inputStr"
          onChange={this.handleChange}
          value={this.state.inputStr}
          margin="normal"
          variant="outlined"
        />
        <Button type="submit" disabled={!this.state.inputStr}>
          Submit
        </Button>
      </form>
    );
  }
}

export default InputForm;
