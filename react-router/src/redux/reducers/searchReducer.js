const INITIAL_STATE = {
    searchValue: '',
    zipCode: '',
    address: '',
    state: '',
    homeType: '',
    searchState: 'INITIAL',
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SEARCH_INPUT':
            return {
                ...state,
                searchValue: action.searchValue,
            };
        default:
            return state;
    }
};

export default searchReducer;