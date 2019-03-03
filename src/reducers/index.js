import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import entryReducer from './entryReducer';

export default combineReducers({
  form: formReducer,
  entries: entryReducer,
});
