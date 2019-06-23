import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertText } from '../../utils/convertText';
import Grid from '@material-ui/core/Grid';

const IpaTranscription = props => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        alignContent="center"
      >
        <Grid item alignContent="center">
          Some text
        </Grid>
        <Grid
          container
          item
          xs={6}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12} sm={2}>
            Accent 1
          </Grid>
          <Grid item xs={12} sm={2}>
            Accent 2
          </Grid>
          <Grid item xs={12} sm={2}>
            Accent 3
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({
  odEntries: state.odEntries
});

export default connect(mapStateToProps)(IpaTranscription);
