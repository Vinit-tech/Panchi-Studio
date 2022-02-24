import React from "react";
import { Outlet, Link } from "react-router-dom";

const Card = ({ state }) =>{
    return(
        <>
        <div class="main-card">
        {state.map((curElem) => {
            return(
                <>
                <div class="product-des">
                    <div class="card" >
                        <img src={curElem.image} class="card-img-top" alt=""/>
                        <div class="card-body">
                            <p class="card-text name">{curElem.productname}</p>
                            <p class="card-text">
                            <Link to="/contact"><a class="btn-a" href="#">Contact Us</a></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </>
            );
        })}
        </div>
        <Outlet/>
        </>
    );
};

export default Card;