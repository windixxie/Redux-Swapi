import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null,
  next: null,
  previous: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return { 
        ...state, 
        characters: action.payload.results,  
        next: action.payload.next,
        previous: action.payload.previous,
        fetching: false,
        error: null 
      };
    case FETCH_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};
