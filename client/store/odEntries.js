import axios from 'axios';
const odId = process.env.OD_ID;
const odKey = process.env.OD_KEY;

//ACTION TYPES
const GET_WORD_PRON = 'GET_WORD_PRON';
const GOT_PHRASE_PRON = 'GET_PHRASE_PRON';

//INITIAL STATE

const initialState = [];

//ACTION CREATORS

const gotWordPron = word => ({
  action: GET_WORD_PRON,
  word
});

const gotPhrasePron = phrase => ({
  action: GOT_PHRASE_PRON,
  phrase
});

//THUNK CREATORS

// MW API lookup--removed because of difficulty parsing.
// const getWordPron = (word) => {
//   return async dispatch => {
//     try {
//       const {data} = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}/key=${process.env.MWKEY}`);
//       dispatch(gotWordPron(data))
//     } catch (error) {
//       console.error(error)
//     }
//   }
// }

const help = {
  id: 'help',
  metadata: {
    operation: 'retrieve',
    provider: 'Oxford University Press',
    schema: 'RetrieveEntry'
  },
  results: [
    {
      id: 'help',
      language: 'en-us',
      lexicalEntries: [
        {
          language: 'en-us',
          lexicalCategory: {
            id: 'verb',
            text: 'Verb'
          },
          pronunciations: [
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'respell',
              phoneticSpelling: 'help'
            },
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'IPA',
              phoneticSpelling: 'hɛlp'
            }
          ],
          text: 'help'
        },
        {
          language: 'en-us',
          lexicalCategory: {
            id: 'noun',
            text: 'Noun'
          },
          pronunciations: [
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'respell',
              phoneticSpelling: 'help'
            },
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'IPA',
              phoneticSpelling: 'hɛlp'
            }
          ],
          text: 'help'
        },
        {
          language: 'en-us',
          lexicalCategory: {
            id: 'interjection',
            text: 'Interjection'
          },
          pronunciations: [
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'respell',
              phoneticSpelling: 'help'
            },
            {
              audioFile:
                'http://audio.oxforddictionaries.com/en/mp3/help_us_1.mp3',
              dialects: ['American English'],
              phoneticNotation: 'IPA',
              phoneticSpelling: 'hɛlp'
            }
          ],
          text: 'help'
        }
      ],
      type: 'headword',
      word: 'help'
    }
  ],
  word: 'help'
};

// axios.defaults.headers.common['header'] = {
//   Accept: 'application/json',
//   app_id: odId,
//   app_key: odKey
// };

const axiosConfig = {
  headers: {
    Accept: 'application/json',
    app_id: odId,
    app_key: odKey
  }
};

export const getPron = word => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}?fields=pronunciations&strictMatch=false`,
        axiosConfig
      );

      const pron =
        data.results[0].lexicalEntries[0].pronunciations[1].phoneticSpelling;
      console.log(pron);
      dispatch(gotWordPron(pron));
    } catch (error) {
      console.error(error);
    }
  };
};

//REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WORD_PRON:
      return [...state, action.word];
    case GOT_PHRASE_PRON:
      return [...state, ...action.phrase];
    default:
      return state;
  }
};
