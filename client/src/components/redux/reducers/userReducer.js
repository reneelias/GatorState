const INITIAL_STATE = {
    user : {
        userid: '',
        username: '',
        firstName: '',
        lastName: '',
        email: ''
    },
    loggedIn: false
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'LOG_IN':
            return {
                ...state,
                user: action.user,
                loggedIn: action.loggedIn
            };
        default:
            return state;
    }
};

export default userReducer;