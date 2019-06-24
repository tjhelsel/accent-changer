import { polly, params, createAudioUrl } from '../../public/polly';

const CREATED_AUDIO = 'CREATED_AUDIO';
const GOT_SINGLE_AUDIO = 'GOT_SINGLE_AUDIO';
const GOT_ALL_AUDIOS = 'GOT_ALL_AUDIOS';

const initialState = [];

const gotSingleAudio = audio => ({
  type: GOT_SINGLE_AUDIO,
  audio
});

const createdAudio = audio => ({
  type: CREATED_AUDIO,
  audio
});

const gotAllAudios = audios => ({
  type: GOT_ALL_AUDIOS,
  audios
});

export const createAudio = ipaStr => {
  params.Text = `<speak>
  <phoneme alphabet="ipa" ph="${ipaStr}"></phoneme>. 
  </speak>`;
  return async dispatch => {
    try {
      await polly.synthesizeSpeech(params, async (err, data) => {
        if (err) {
          console.log(err, err.stack);
        } else {
          const url = await createAudioUrl(data);
          dispatch(createdAudio(url));
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATED_AUDIO:
      return [...state, action.audio];
    default:
      return state;
  }
};
