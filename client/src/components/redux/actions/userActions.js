export const loginUser = (user, loggedIn) => {
    return {
        type : 'LOG_IN',
        user,
        loggedIn
    };
};
