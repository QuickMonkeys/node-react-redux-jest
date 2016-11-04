'use strict';

describe('Load data from json', () => {
  
  it('should load data', () => {
    const data = require('../data/languages.json');
    expect(data.length).toBe(50);
  });

  it('should load data and filter 6 languages', () => {
    const data = require('../data/languages.json');
    const filtered = data.filter((f) => f.language.toLowerCase().indexOf('la')!= -1);
    expect(filtered.length).toBe(6);
  });

  it('should load data and filter 0 language', () => {
    const data = require('../data/languages.json');
    const filtered = data.filter((f) => f.language.toLowerCase().indexOf('llll')!= -1);
    expect(filtered.length).toBe(0);
  });

});
