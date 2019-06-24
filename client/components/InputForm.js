import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPron } from '../store/transcriptions';
import IpaTranscription from './IpaTranscription';

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

  handleSubmit = event => {
    event.preventDefault();
    const word = this.state.inputStr;
    this.props.getPron(word);
  };

  render() {
    const inputStr = this.state.inputStr;
    return (
      <div>
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
            Transcribe
          </Button>
        </form>
        <IpaTranscription />
      </div>
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
