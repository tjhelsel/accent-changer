import axios from 'axios';
import { odId, odKey } from '../../secrets';

//ACTION TYPES
const GOT_WORD_PRON = 'GOT_WORD_PRON';
const GOT_PHRASE_PRON = 'GOT_PHRASE_PRON';
const REMOVED_WORD = 'REMOVED_WORD';

//INITIAL STATE

const initialState = [];

//ACTION CREATORS

const gotWordPron = word => ({
  type: GOT_WORD_PRON,
  word
});

const gotPhrasePron = phrase => ({
  type: GOT_PHRASE_PRON,
  phrase
});

const removedWord = word => ({
  type: REMOVED_WORD,
  word
});

const axiosConfig = {
  headers: {
    Accept: 'application/json',
    app_id: odId,
    app_key: odKey
  }
};

export const getPron = word => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  return async dispatch => {
    try {
      const { data } = await axios.get(
        proxyUrl +
          `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${word}?fields=pronunciations&strictMatch=false`,
        axiosConfig
      );
      const pron =
        data.results[0].lexicalEntries[0].pronunciations[1].phoneticSpelling;
      dispatch(gotWordPron({ word, pron }));
    } catch (error) {
      console.error(error);
    }
  };
};

//REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_WORD_PRON:
      return [...state, action.word];
    case GOT_PHRASE_PRON:
      return [...state, ...action.phrase];
    case REMOVED_WORD:
      return [...state].filter(entry => {
        return entry.name !== action.word.name && entry.ipa !== action.word.ipa;
      });
    default:
      return state;
  }
};
