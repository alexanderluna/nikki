import history from '../history';
import {
  IMPORT_DIARY,
  CREATE_ENTRY,
  EDIT_ENTRY,
  FETCH_ENTRY,
  FETCH_ENTRIES,
  DELETE_ENTRY,
} from './types';

export const importDiary = diary => (dispatch) => {
  dispatch({ type: IMPORT_DIARY, payload: diary.entries });
  history.push('/index');
};

export const createEntry = formValues => (dispatch) => {
  const id = `_${Math.random().toString(36).substr(2, 9)}`;
  const createdAt = new Date();
  const updatedAt = new Date();
  dispatch({
    type: CREATE_ENTRY,
    payload: {
      createdAt,
      updatedAt,
      ...formValues,
      id,
    },
  });
  history.push('/index');
};

export const editEntry = formValues => (dispatch, getState) => {
  dispatch({ type: EDIT_ENTRY, payload: formValues });
  history.push('/index');
};

export const fetchEntry = id => (dispatch, getState) => {
  dispatch({ type: FETCH_ENTRY, payload: id });
};

export const fetchEntries = () => (dispatch, getState) => {
  dispatch({ type: FETCH_ENTRIES, payload: getState });
};

export const deleteEntry = id => (dispatch, getState) => {
  dispatch({ type: DELETE_ENTRY, payload: id });
};
