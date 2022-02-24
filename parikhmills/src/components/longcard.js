import React from "react";
import { Outlet, Link } from "react-router-dom";
const Lcard = ({cmpState}) =>{
    return(
        <>
        {cmpState.map((curElem)=>{
            return(
                <>
                  <div class="box" id={curElem.id}>
                        <img src={curElem.image} class="card-img-top" alt={curElem.title}/>
                        <div class="card-item card-body">
                            <div class="item-1">
                                <h5>Details</h5>
                                <h4>{curElem.title}</h4>
                                <p>{curElem.description}</p>
                                <p>Category: {curElem.category}</p>
                                <p>For Order Call Now!</p>
                                <div className=" btn-call mb-2">
                                    <div><Link to="/contact"><a class="cnt-btn" href="" >Contact Us</a></Link></div>
                                    <div><a class="btn-a" href="tel:9409147272"><ion-icon name="call"></ion-icon> Call Now</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        })}
        <Outlet/>
        
        </>
    );
};

export default Lcard;