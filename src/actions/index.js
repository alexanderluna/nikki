import history from '../history';
import {
  IMPORT_DIARY,
  CREATE_ENTRY,
  EDIT_ENTRY,
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

export const editEntry = (id, formValues) => (dispatch) => {
  const updatedAt = new Date();
  dispatch({
    type: EDIT_ENTRY,
    payload: {
      updatedAt,
      ...formValues,
      id,
    },
  });
  history.push('/index');
};

export const deleteEntry = id => (dispatch) => {
  dispatch({ type: DELETE_ENTRY, payload: id });
  history.push('/index');
};
