import { CHANGE_SIGNIN } from "./constants";

// import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  //   searchField: "",
  signedInAS: {},
};

// export const searchRobots = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case CHANGE_SEARCH_FIELD:
//       return Object.assign({}, state, { searchField: action.payload });
//     default:
//       return state;
//   }
// };

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SIGNIN:
      return Object.assign({}, state, { signedInAS: action.payload });
    default:
      return state;
  }
};
