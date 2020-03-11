import { SONG_SELECTED } from '../types';

const initialState = {
  songs: [
    { title: 'No Scrubs', duration: '4.05' },
    { title: 'I Want It That Way', duration: '2.35' },
    { title: 'Truly Madly Deeply Savage Garden', duration: '3.15' },
    { title: 'Losing My Religion', duration: '5.25' }
  ],
  selectedSong: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SONG_SELECTED:
      return { ...state, selectedSong: payload, loading: false };
    default:
      return state;
  }
};
