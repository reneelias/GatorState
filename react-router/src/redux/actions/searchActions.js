export const updateSearch = searchValue => {
    return {
        type : 'SEARCH_INPUT',
        searchValue,
    };
};