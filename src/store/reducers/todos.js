import _ from "lodash";

export default (initialState = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log(action.payload);
      return { ...initialState, [action.payload.id]: action.payload };
    case "DELETE_TODO":
      return _.omit(initialState, action.payload);
    case "CHECK_TODO":
      console.log(action.payload);
      return {
        ...initialState,
        [action.payload]: {
          ...initialState[action.payload],
          isTouched: !initialState[action.payload].isTouched
        }
      };
    default:
      return initialState;
  }
};
