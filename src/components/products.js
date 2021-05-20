import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/product';

const Product=()=>{
    
    const products = useSelector(state => state.products)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, []);

    const allProducts=Object.values(products)
    console.log(allProducts)

    


        const setProduct = () => {
            if (allProducts) {
                // console.log(books)
                let productContent = []
                for (let index = 0; index < allProducts.length; index++) {
                    productContent.push(
                        <div className="col-3 float-left bg-light m-2" style={{height:'350px'}}>
                            <img className="w-100 h-50" src={allProducts[index]["image"]} />
                            <h4 tag="h5">{allProducts[index]["title"]}</h4>
                            <p tag="h6" className="mb-2 text-danger">categories: {allProducts[index]["category"]}</p>
                            <p>price: {allProducts[index].price}</p>
                        </div>
                    )
                }
                return productContent
            } else {
                return (
                    <h1>loading</h1>
                )
            }

        }



        return (
            <div className="container" style={{ textAlign: "center" }}>
                <h1>Total Products {allProducts? allProducts.length:0}</h1>
                <div className="books col-12">
                    {setProduct()}
                </div>
            </div>
        )

    
}

export default Product;