import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertToIpa } from '../../utils/convertText';
import CreateAudio from './CreateAudio';
import { createAudio } from '../store/audios';
import Grid from '@material-ui/core/Grid';

class IpaTranscription extends Component {
  render() {
    const prons = this.props.transcriptions.map(obj => obj.pron);
    const standardIpa = this.props.transcriptions.reduce((acc, cur) => {
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
          <Grid item xs={4}>{`OD pronunciation: ${prons.join(' ')}`}</Grid>
          <Grid
            container
            item
            xs={8}
            direction="column"
            justify="space-evenly"
            alignItems="center"
          >
            <Grid
              container
              item
              xs={12}
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={9}>{`Standardized to IPA: ${standardIpa}`}</Grid>
              <Grid item xs={3}>
                <CreateAudio ipaStr={standardIpa} />
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
  transcriptions: state.transcriptions
});

const mapDispatchToProps = dispatch => ({
  getAudio: ipaStr => dispatch(createAudio(ipaStr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IpaTranscription);
