import { useState} from "react";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../Actions/ProductsActions";
const ProductsComponent =()=>{
    const products = useSelector(state => state.products);
    const [productName,setProducts] = useState("");
    const dispatch = useDispatch();
    const changeHandler=(event)=>{
        let value = event.target.value;
        setProducts(value);
    }
    const submitProducts =()=>{
        dispatch(addProducts(productName))
    }
    return(
        <div>
            <div>
            <label>Product Name</label>
            <input type = "text" name = "productName" value = {productName} onChange={changeHandler} />
            </div>
            <button onClick= {submitProducts}>Add Product</button>
                
            <h1>Product Names is </h1>
            {
                products.map((x,i)=>{
                    return(
                    <h1 key={i}>{x}</h1>
                    )
                })
            }

        </div>
    )
}
export default ProductsComponent;