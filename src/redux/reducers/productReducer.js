import {
  SET_SELECTED_CATEGORY,
  SET_ALL_PRODUCTS,
  SET_FILTERED_PRODUCTS,
  SET_SELECTED_CLASS,
  FETCH_SINGLE_PRODUCT_REQUEST,
  FETCH_SINGLE_PRODUCT_SUCCESS,
  FETCH_SINGLE_PRODUCT_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  allProducts: [],
  selectedCategory: null,
  filteredProducts: [],
  selectedClass: null,
  singleProduct: null,
  isLoading: false,
  error: null,
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
    case FETCH_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_SINGLE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
