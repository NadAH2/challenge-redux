import { CHANGE_BG_COLOR } from "../actions/types";

const initialState = {
  color: "#ffffff",
};
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG_COLOR:
      return {
        ...state,
        color: "#000000",
      };
    default:
      return state;
  }
};
