import Immutable from 'immutable';

const initialState = Immutable.Map ({
                        languages: [],
                        filter: undefined
                    });

export default (state = initialState, action) =>
{
    switch (action.type) {

        case "POPULATE":
            return state.set('languages', action.value);

        case "ALL":
            return state.set('filter', undefined);
            
        case "FILTER":
            return state.set('filter', action.value);

        default: {
            return  state;
        }
    }
}