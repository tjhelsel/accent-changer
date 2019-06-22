import axios from 'axios';

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

const getWordPron = (word) => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${word}/key=${process.env.MWKEY}`);
      dispatch(gotWordPron(data))
    } catch (error) {
      console.error(error)
    }
  }
}

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
