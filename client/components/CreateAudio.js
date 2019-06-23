import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { convertToIpa } from '../../utils/convertText';
import { polly, params, createAudioUrl } from '../../public/polly';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const CreateAudio = props => {
  return <div>Create Audio component</div>;
};
