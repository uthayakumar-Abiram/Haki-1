import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL
} from "../constants/productConstants";
import { Axios } from "../utils";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/product/`,{withCredentials:true});

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/product/${id}`,{withCredentials:true});

    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const productsAdd = (formData ) => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_ADD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": 'multipart/form-data',
      },
    };
    console.log(formData.value);
    const { data } = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/product/`,
       formData,
      config
      ,{withCredentials:true}
    );
      
    dispatch({
      type: PRODUCT_ADD_SUCCESS,
      payload: data,
    });

   
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
