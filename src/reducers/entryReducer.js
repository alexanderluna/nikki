import _ from 'lodash';
import {
  IMPORT_DIARY,
  CREATE_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
} from '../actions/types';

const initialState = {
  _oj5szld68: {
    createdAt: 'Thu Aug 08 2019 00:49:32 GMT+0200 (CEST)',
    updatedAt: 'Thu Aug 08 2019 00:55:00 GMT+0200 (CEST)',
    content: '<b>Some bold text</b> and some <i>italic</i> text',
    id: '_oj5szld68',
  },
  _oj5szl468: {
    createdAt: 'Thu Aug 08 2019 00:49:32 GMT+0200 (CEST)',
    updatedAt: 'Thu Aug 08 2019 00:55:00 GMT+0200 (CEST)',
    content: '<b>Some bold text</b> and some <i>italic</i> text',
    id: '_oj5szl468',
  },
  _oj5rezl468: {
    createdAt: 'Thu Aug 08 2019 00:49:32 GMT+0200 (CEST)',
    updatedAt: 'Thu Aug 08 2019 00:55:00 GMT+0200 (CEST)',
    content: '<b>Some bold text</b> and some <i>italic</i> text',
    id: '_oj5szl4f8',
  },
  _oj5tzl468: {
    createdAt: 'Thu Aug 08 2019 00:49:32 GMT+0200 (CEST)',
    updatedAt: 'Thu Aug 08 2019 00:55:00 GMT+0200 (CEST)',
    content: '<b>Some bold text</b> and some <i>italic</i> text',
    id: '_oj5fzl468',
  },
  _oj5shl468: {
    createdAt: 'Thu Aug 08 2019 00:49:32 GMT+0200 (CEST)',
    updatedAt: 'Thu Aug 08 2019 00:55:00 GMT+0200 (CEST)',
    content: '<b>Some bold text</b> and some <i>italic</i> text',
    id: '_oj5sfl468',
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IMPORT_DIARY:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case CREATE_ENTRY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ENTRY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ENTRY:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
