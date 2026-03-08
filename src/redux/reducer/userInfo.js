// Define action types
const SET_USER_INFO = 'SET_USER_INFO';

// Define initial state
const initialState = {
  userInfo: null
};

// Define reducer function
const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};

// Define action creator
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo
});

export default userReducer;
