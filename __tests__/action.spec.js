import * as actions_language from '../client/src/actions/languages.js'
import * as actions_search from '../client/src/actions/search.js'


describe('Languages Actions', () => {
  it('should create an action to populate the languages', () => {

    const expectedAction = { type: 'POPULATE', value: [] };
    
    expect(actions_language.populate([])).toEqual(expectedAction);
  })
})

describe('Search Actions', () => {
  it('should create an action to filter the languages', () => {

    const expectedAction = { type: 'FILTER', value: 'lang' };
    
    expect(actions_search.filter('lang')).toEqual(expectedAction);
  })
})