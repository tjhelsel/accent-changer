import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPron } from '../store/odEntries';
import { polly, params } from '../../public/polly';
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
    this.convertText = this.convertText.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  convertText(str) {
    polly.synthesizeSpeech(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        let uInt8Array = new Uint8Array(data.AudioStream);
        let arrayBuffer = uInt8Array.buffer;
        let blob = new Blob([arrayBuffer]);

        let audio = $('audio');
        let url = URL.createObjectURL(blob);
        audio[0].src = url;
        audio[0].play();
      }
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
          <Button type="button" onClick={this.convertText}>
            Get transcription
          </Button>
          <Button type="submit" disabled={!inputStr}>
            Submit
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
