import { polly, params, createAudioUrl } from '../../public/polly';

const GOT_SINGLE_AUDIO = 'GOT_SINGLE_AUDIO';
const GOT_ALL_AUDIOS = 'GOT_ALL_AUDIOS';

const initialState = [];

const gotSingleAudio = audio => ({
  type: GOT_SINGLE_AUDIO,
  audio
});

const gotAllAudios = audios => ({
  type: GOT_ALL_AUDIOS,
  audios
});

export const getAudio = ipaStr => {
  params.Text = `<speak>
  <phoneme alphabet="ipa" ph="${ipaStr}"></phoneme>. 
  </speak>`;
  return async dispatch => {
    try {
      const audioUrl = await polly.synthesizeSpeech(
        params,
        async (err, data) => {
          if (err) {
            console.log(err, err.stack);
          } else {
            console.log('Past error checker!');
            const url = await createAudioUrl(data);
            console.log(url);
            return url;
          }
          dispatch(gotSingleAudio(audioUrl));
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_SINGLE_AUDIO:
      console.log('action dispatched!');
      return [...state, action.audio];
    default:
      return state;
  }
};
