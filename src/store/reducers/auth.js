const initialState = {
  isSigned: false,
  userID: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "IS_SIGNED":
      return {
        ...state,
        userID: action.userID,
        isSigned: action.isSigned
      };
    default:
      return state;
  }
};
