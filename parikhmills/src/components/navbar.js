import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Outlet,Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div class="notify">
            <div class="container-fluid">
                <a href="/#qoute">Get Qouted </a>
                <div>|</div>
                <a href="mailto: info@parikhmills.com"> info@parikhmills.com</a>
            </div>
            <div class="container-fluid">
                <a>GSTIN: 24AJPPP0690P1ZH</a>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top">
            <div class="container">
                <a class="navbar-brand" href="/"><img src="../img/parikhmills.png"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <Link to='/'><a class="nav-link active" aria-current="page" href="home">Home</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to='/products'><a class="nav-link" href="products">Products</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/about"><a class="nav-link" href="company">Company</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/brochure"><a class="nav-link" href="#">Brochure</a></Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/contact"><a class="nav-link " href="contact">Contact Us</a></Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <Outlet/>
        </>
    );
};

export default Navbar;