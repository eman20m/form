import axios from "axios";
import * as TYPES from "../types/product";


export const getProducts = () => (dispatch) => {
    const axiosInstance = axios.create({
        baseURL: "https://fakestoreapi.com/products",
    });

    axiosInstance.get()
    .then(function (response) {
        console.log(response.data);
        dispatch({
            type : TYPES.SET_PRODUCT,
            payload : response.data
        })
    })
    .catch(function (error) {
        // show snackbar
      console.log(error);
    });
};

// export const getUsers = (payload) => ({
//     type : TYPES.GET_USERS,
//     payload
// })
