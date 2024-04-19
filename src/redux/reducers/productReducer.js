import { SET_SELECTED_CATEGORY, SET_ALL_PRODUCTS, SET_FILTERED_PRODUCTS, SET_SELECTED_CLASS } from '../actions/actionTypes';

const initialState = {
  allProducts: [], // Initialize allProducts as an empty array
  selectedCategory: null,
  filteredProducts: [], // Initialize filteredProducts as an empty array
  selectedClass: null, // Initialize selectedClass as null
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case SET_SELECTED_CLASS:
      return {
        ...state,
        selectedClass: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
