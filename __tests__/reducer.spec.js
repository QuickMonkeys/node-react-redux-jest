import * as actions_language from '../client/src/actions/languages.js'
import * as actions_search from '../client/src/actions/search.js'

import Immutable from 'immutable';

import reducer from '../client/src/reducers/reducer.js'

describe('Reducer', () => {

  const languages = [{"position": 1, "language": "Java", "rating":18.236}, {"position": 2, "language": "C", "rating":10.955}];

  const initialState = Immutable.Map ({ languages: [], filter: undefined });

  const staticState = Immutable.Map ({ languages: languages, filter: undefined });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should populate the state', () => {
    const action = { type: 'POPULATE', value: languages};
    expect(reducer(undefined, action)).toEqual(staticState);
  });

  it('should filter the state', () => {
    const action = { type: 'FILTER', value: 'av'};
    const data = reducer(staticState, action);
    expect(data.get('filter')).toEqual('av');
  });

});
