const initialState = {
  isSigned: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "IS_SIGNED":
      return {
        ...state,
        isSigned: action.isSigned
      };
    default:
      return state;
  }
};
