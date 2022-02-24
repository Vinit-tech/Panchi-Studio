import React from "react";
import Product from "./product";
import About from "./about";
import { Link , Outlet} from "react-router-dom";
const Home = () => {
    return(
        <>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active slide-four">
                <div class='container'>

                </div>
            </div>
            <div class="carousel-item slide-one">
                <div class="container">
                    <h1>
                        Indian Spices of different Varieties with Assured Purity.
                    </h1>
                </div>
            </div>
            <div class="carousel-item slide-two">
                <div class="container">
                    <h1>
                        Cereals and Flours from Local Vendors.
                    </h1>
                </div>
            </div>
            <div class="carousel-item slide-three">
                <div class='container'>
                    <h1>
                        Exporting From Countries to Countries. 
                    </h1>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div>
        <div class="about-cls">
            <div class="about-inner">
                <p>"Parikh mills is a growing company in export business. 
                We are exporting varieties of comodities and raw materials to different countries."</p>
                <Link to="/about"><a>Read More..</a></Link>
            </div>
        </div>
        <Product/>
        <Outlet/>
        </>
    );
};

export default Home;