import axios from 'axios';

//ACTION TYPES
const GOT_ACCENT = 'GOT_ACCENT';
const GOT_ACCENTS = 'GOT_ACCENTS';

//ACTION CREATORS

const gotAccent = accent => ({
  type: GOT_ACCENT,
  accent
});

const gotAccents = accents => ({
  type: GOT_ACCENTS,
  accents
});

//INITIAL STATE

const initialState = [];

//THUNK CREATORS

export const getAccent = accent => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`/api/accents/${accent}`);
      dispatch(gotAccent(data));
    } catch (error) {
      console.error(error);
    }
  };
};

export const getAccents = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/accents');
      dispatch(gotAccents(data));
    } catch (error) {
      console.error(error);
    }
  };
};

//REDUCER

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_ACCENT:
      return [...state].filter(el => el.name === action.accent);
    case GOT_ACCENTS:
      return [...state].concat(action.accents);
    default:
      return state;
  }
};
