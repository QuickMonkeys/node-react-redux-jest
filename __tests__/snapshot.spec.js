'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from  'react-redux';
import renderer from 'react-test-renderer';

import Search from '../client/src/components/search.jsx';
import Languages from '../client/src/containers/languages.js';

import reducer from '../client/src/reducers/reducer.js';

describe('Generate snapshots from the components', () => {

    it('Search', () => {
        const obj = renderer.create(<Search />).toJSON();
        expect(obj).toMatchSnapshot();
    });

    it('Languages', () => {
        window.$ = require('jquery');
        const store = createStore(reducer);
        const obj = renderer.create(<Provider store={store}>
                                        <Languages />
                                    </Provider>).toJSON();
        expect(obj).toMatchSnapshot();
    });
});
