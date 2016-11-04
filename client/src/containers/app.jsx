import React from 'react';
import { createStore } from 'redux';
import { Provider } from  'react-redux';

import reducer from '../reducers/reducer.js';

import Languages from './languages.js';
import Search from './search.js';

const store = createStore(reducer);

const App = () =>   <Provider store={store}>
                        <div>
                            <Search />
                            <Languages />
                        </div>
                    </Provider>
                    
export default App;