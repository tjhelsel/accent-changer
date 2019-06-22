import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { mwDict } from '../../utils/mwDict';

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputStr: '',
      outputStr: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.convertText = this.convertText.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  convertText(text) {
    const convertedLetters = text.split('').map(l => mwDict[l] || l);
    return convertedLetters.join('');
  }

  handleSubmit = async event => {
    event.preventDefault();

    await this.setState(prevState => {
      const converted = this.convertText(prevState.inputStr);
      return { outputStr: converted };
    });
    console.log(this.state.outputStr);
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
        <Button type="submit" disabled={!inputStr}>
          Submit
        </Button>
      </form>
    );
  }
}

export default InputForm;
