import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return { ...state, ..._.mapKeys(action.todos, "id") };
    case "ADD_TODO":
      return { ...state, [action.formValues.id]: action.formValues };
    case "DELETE_TODO":
      return _.omit(state, action.payload);
    case "CHECK_TODO":
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          isTouched: !state[action.payload].isTouched
        }
      };
    default:
      return state;
  }
};
