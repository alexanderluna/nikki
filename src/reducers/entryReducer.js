import _ from 'lodash';
import {
  IMPORT_DIARY,
  CREATE_ENTRY,
  EDIT_ENTRY,
  FETCH_ENTRY,
  FETCH_ENTRIES,
  DELETE_ENTRY,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case IMPORT_DIARY:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_ENTRY:
      console.log(action.payload);
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ENTRY:
      return state;
    case FETCH_ENTRY:
      return state;
    case FETCH_ENTRIES:
      return state;
    case DELETE_ENTRY:
      return state;
    default:
      return state;
  }
};
