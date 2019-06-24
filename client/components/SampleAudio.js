import React from 'react';
import Sound from 'react-sound';
import Button from '@material-ui/core/Button';
// import southern1 from '../../../stackathon-audio/southern.mp3';
// import southern2 from '../../../stackathon-audio/southern2.mp3';
// import southern3 from '../../../stackathon-audio/southern3.mp3';
// import southern4 from '../../../stackathon-audio/southern4.mp3';
// import default1 from '../../../stackathon-audio/default.mp3';
// import default2 from '../../../stackathon-audio/default2.mp3';
// import default3 from '../../../stackathon-audio/default3.mp3';
// import default4 from '../../../stackathon-audio/default4.mp3';
// import inland1 from '../../../stackathon-audio/inlandNorth.mp3';
// import inland2 from '../../../stackathon-audio/inlandNorth2.mp3';
// import inland3 from '../../../stackathon-audio/inlandNorth3.mp3';
// import inland4 from '../../../stackathon-audio/inlandNorth4.mp3';

const SampleAudio = props => {
  let soundUrl = '';
  return (
    <div>
      <Button
        onClick={() => {
          soundUrl = southern1;
        }}
      >
        Southern 1
      </Button>
      <Sound url={soundUrl} playStatus={Sound.status.PLAYING} />
    </div>
  );
};

export default SampleAudio;
