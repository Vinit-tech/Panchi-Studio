import React , { useState } from "react";
import Pro from "./proapi.js";
import Card from './card';

const Product = () =>{
    const [state, setState] = useState(Pro);
    return(
        <>
        <div class="product-main">
            <div class="container-fluid">
                <div>
                    <h1>Our Products</h1>
                </div>
                <Card state={ state } />
            </div>
        </div>
        </>
    );
};

export default Product;