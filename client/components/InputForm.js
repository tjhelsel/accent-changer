import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPron } from '../store/odEntries';

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

  convertText(str) {
    
  }

  handleSubmit = event => {
    event.preventDefault();
    const word = this.state.inputStr;
    this.props.getPron(word);
  };

  render() {
    const inputStr = this.state.inputStr;
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          fullWidth
          label="Enter some text to accentuize..."
          name="inputStr"
          onChange={this.handleChange}
          value={inputStr}
          margin="normal"
          variant="outlined"
        />
        <Button type="button">Get transcription</Button>
        <Button type="submit" disabled={!inputStr}>
          Submit
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPron: word => dispatch(getPron(word))
});

export default connect(
  null,
  mapDispatchToProps
)(InputForm);
