import React, { Component } from 'react';
import Sound from 'react-sound';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class SampleAudio extends Component {
  constructor() {
    super();
    this.state = {
      audioUrl: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      audioUrl: `audio/${event.target.innerHTML}`
    });
  }
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Grid item xs={10}>
            <Paper>
              Jack and Jill went up the hill to fetch a pail of water.
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              default1.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>ʤæk ənd ʤɪl wɛnt ʌp ðə hɪl tə fɛʧ ə peɪl əv ˈwɔtər</Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              southern1.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ʤæk ənd ʤɪjəl wɛjənt ɜp ðə hɪjəl tə fɛjəʧ ə peɪjəl əv ˈwɑtər
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              inlandNorth1.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>ʤeək ənd ʤɪl wɛnt ʌp ðə hɪl tə fɛʧ ə peɪl əv ˈwɔtər</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              Jack fell down and broke his crown, and Jill came tumbling after.
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              default2.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ʤæk fɛl daʊn ənd broʊk hɪz kraʊn, ənd ʤɪl keɪm ˈtʌmblɪŋ ˈæftər
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              southern2.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ʤæk fɛjəl daʊn ənd brɜʊk hɪjəz kraʊn, ənd ʤɪjəl keɪjəm ˈtɜmblɪjəŋ
              ˈæftər
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              inlandNorth2.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ʤeək fɛl daʊn ənd broʊk hɪz kraʊn, ənd ʤɪl keɪm ˈtʌmblɪŋ ˈeəftər
            </Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper>
              Up Jack got, and home did trot, as fast as he could caper.
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              default3.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ʌp ʤæk gɑt, ənd hoʊm dɪd trɑt, əz fæst əz hi kəd ˈkeɪpər
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              southern3.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              ɜp ʤæk gɑt, ənd hɜʊm dɪjəd trɑt, əz fæst əz hi kəd ˈkeɪjəpər
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              inlandNorth3.mp3
            </Button>
            <Grid item xs={8}>
              <Paper>
                ʌp ʤeək gɑt, ənd hoʊm dɪd trɑt, əz feəst əz hɪj kəd ˈkeɪpər
              </Paper>
            </Grid>
            <Grid item xs={10}>
              <Paper>
                He went to bed to mend his head, with vinegar and brown paper.
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="filled"
                color="primary"
                onClick={() => this.handleClick(event)}
              >
                default4.mp3
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Paper>
                hi wɛnt tə bɛd tə mɛnd ɪz hɛd, wɪð ˈvɪnəgər ənd braʊn ˈpeɪpər
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="filled"
                color="primary"
                onClick={() => this.handleClick(event)}
              >
                southern4.mp3
              </Button>
            </Grid>
            <Grid item xs={8}>
              <Paper>
                hi wɛjənt tə bɛjəd tə mɛjənd ɪjəz hɛjəd, wɪjəð ˈvɪjənəgər ənd
                braʊn ˈpeɪjəpər
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="filled"
              color="primary"
              onClick={() => this.handleClick(event)}
            >
              inlandNorth4.mp3
            </Button>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              hɪj wɛnt tə bɛd tə mɛnd ɪz hɛd, wɪð ˈvɪnəgər ənd braʊn ˈpeɪpər
            </Paper>
          </Grid>
        </Grid>
        <Sound
          url={this.state.audioUrl || ''}
          playStatus={Sound.status.PLAYING}
        />
      </div>
    );
  }
}

export default SampleAudio;
