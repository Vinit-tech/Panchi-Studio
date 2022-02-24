import React from "react";
import { Outlet, Link } from "react-router-dom";

const Footer = () =>{
    return(
        <>
        <div class="footer" id="qoute" >
            <div class="foot-inner container">
                <div class="footer-item">
                    <div><img src="img/parikhmills.png" alt="logo"/></div>
                    <br/>
                    <div><p><h5>Address:</h5>Block No 69 2, ALALI, KALOL, Panchmahals, Gujarat,India
                        389310</p></div>
                    <div><p>GSTIN: 24AJPPP0690P1ZH</p></div>
                    <div><p><ion-icon name="mail"></ion-icon> info@parikhmills.com</p></div>
                    <div><p><ion-icon name="call"></ion-icon> +91 94091-47272</p></div>
                    <div><p><ion-icon name="call"></ion-icon> +91 93276-50952</p></div>
                </div>
                <div class="footer-item item-2">
                    <h4>Quick Links</h4>
                    <div class="links">
                        <li><Link to="/products"><a>Products</a></Link></li>
                        <li><Link to="/about"><a>Company</a></Link></li>
                        <li><Link to="/"><a>Countries</a></Link></li>
                        <li><Link to="/"><a>Brochure</a></Link></li>
                        <li><Link to="/contact"><a>Contact Us</a></Link></li>
                    </div>
                </div>
                <div class="footer-item item-3">
                    <form method="post">
                        <h4>Get Qouted
                        </h4>
                        <input type="name" placeholder="Name" required=" "/>
                        <input type="email" placeholder="Email" required=" "/>
                        <input type="text" placeholder="Message" required=" "/>
                        <button>submit</button>
                    </form>
                </div>
            </div>
            <div class="footer-inner container">
                    <div class="icons">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a> 
                        <a href="https://wa.me/9409147272"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    </div>
            </div>
            <div class="foot-inner container">
                <div class="ack"><p>ParikhMills | All Rights Reserved &copy;Copyright 2022-23</p>
                <p>Designed By <a href="https://www.instagram.com/zeroweb.in">ZEROWEB</a></p></div>
            </div>
        </div> 
        <Outlet/>
        </>
    );
};

export default Footer;