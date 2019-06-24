import React from 'react';
import CreateAudio from './CreateAudio';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const IpaTranscription = props => {
  const classes = useStyles();
  const transcription = props.transcription;
  return (
    <div style={{ margin: '15px 0px' }}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        alignContent="center"
      >
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            {`OD pronunciation: ${transcription.dictPron}`}
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            {`Pronunciation in ${transcription.accent.name}:
${transcription.accentedPron}`}
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <CreateAudio ipaStr={transcription.accentedPron} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

// const mapStateToProps = state => ({
//   transcriptions: state.transcriptions
// });

// const mapDispatchToProps = dispatch => ({
//   getAudio: ipaStr => dispatch(createAudio(ipaStr))
// });

export default IpaTranscription;
