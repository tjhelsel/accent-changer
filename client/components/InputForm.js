import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { getPron } from '../store/transcriptions';
import IpaTranscription from './IpaTranscription';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none'
  }
}));

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      inputStr: '',
      accent: ''
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
    const { classes } = this.props;
    const inputStr = this.state.inputStr;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Enter some text to accentuize..."
                name="inputStr"
                onChange={this.handleChange}
                value={inputStr}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl
                variant="filled"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>Accent</InputLabel>
                <Select
                  value={this.state.accent}
                  name="accent"
                  onChange={this.handleChange}
                  input={<FilledInput name="age" id="filled-age-simple" />}
                >
                  <MenuItem value="General American">
                    <em>General American</em>
                  </MenuItem>
                  <MenuItem value="Southern">Southern</MenuItem>
                  <MenuItem value="Inland Northern">Inland Northern</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={2}>
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
                disabled={!inputStr}
                xs={2}
                fullWidth
                color="primary"
              >
                Transcribe
              </Button>
            </Grid>
          </Grid>
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

const InputFormConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);

export default withStyles(useStyles)(InputFormConnected);
