import React, { Component } from 'react';
import Sound from 'react-sound';
import { connect } from 'react-redux';
import { createAudio } from '../store/audios';
import Button from '@material-ui/core/Button';

class CreateAudio extends Component {
  constructor() {
    super();
    this.state = {
      audioUrl: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setAudio(url) {
    this.setState({ audioUrl: url });
  }

  handleClick(event) {
    this.props.createAudio(this.props.ipaStr);
    this.setState({ audioUrl: this.props.audios[0] });
  }

  render() {
    const audioUrl = this.state.audioUrl;
    console.log(this.props.audios);
    return (
      <div>
        <Button
          disabled={!!audioUrl}
          color="primary"
          className="contained"
          onClick={() => this.handleClick(event)}
        >
          Play Audio
        </Button>
        {this.props.audios[0] ? (
          <div>
            <Sound
              url={this.props.audios.pop()}
              playStatus={Sound.status.PLAYING}
            />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audios: state.audios
});

const mapDispatchToProps = dispatch => ({
  createAudio: ipaStr => dispatch(createAudio(ipaStr))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAudio);
