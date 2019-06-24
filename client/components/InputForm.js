import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getPron } from '../store/transcriptions';
import IpaTranscription from './IpaTranscription';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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

  componentDidMount() {}

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
          {/* <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="filled-age-simple">Age</InputLabel>
            <Select
              value={values.age}
              onChange={handleChange}
              input={<FilledInput name="age" id="filled-age-simple" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
          <Button type="submit" disabled={!inputStr}>
            Transcribe
          </Button>
        </form>
        <IpaTranscription />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transcriptions: state.transcriptions
});

const mapDispatchToProps = dispatch => ({
  getPron: word => dispatch(getPron(word))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
