import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { convertToIpa } from '../../utils/convertText';
import { getAudio } from '../store/audios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class IpaTranscription extends Component {
  constructor() {
    super();
    this.state = {
      audioUrl: ''
    };
  }

  getAudio(url) {
    this.setState({ audioUrl: url });
  }

  render() {
    console.log(this.props);
    const words = this.props.odEntries.map(obj => obj.word);
    const prons = this.props.odEntries.map(obj => obj.pron);
    const standardIpa = this.props.odEntries.reduce((acc, cur) => {
      return acc + ' ' + convertToIpa(cur.word, cur.pron);
    }, '');
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          alignContent="center"
        >
          <Grid item>{`OD pronunciation: ${prons.join(' ')}`}</Grid>
          <Grid
            container
            item
            xs={4}
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid container item xs={12} sm={10}>
              <Grid item xs>
                {`Standardized to IPA: ${standardIpa}`}
              </Grid>
              <Grid item xs>
                {!this.state.audioUrl ? (
                  <Button
                    onClick={() => {
                      this.props.getAudio(standardIpa);
                    }}
                  >
                    Create Audio
                  </Button>
                ) : (
                  <div>
                    <p>Sound should be playing...</p>
                    <Sound
                      url={this.state.audioUrl}
                      playStatus={Sound.status.PLAYING}
                    />
                  </div>
                )}
              </Grid>
            </Grid>
            {/* <Grid item xs={12} sm={2}>
            Accent 2
            </Grid>
            <Grid item xs={12} sm={2}>
            Accent 3
          </Grid> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  odEntries: state.odEntries
});

const mapDispatchToProps = dispatch => ({
  getAudio: ipaStr => dispatch(getAudio(ipaStr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IpaTranscription);
