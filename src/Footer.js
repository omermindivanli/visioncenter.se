import React from 'react';
import './Footer.css';

const Footer = () => (
    <div className="container">
    <footer id="myFooter">
    <div className="container">
        <div className="row">
            <div className="col-sm-3">
                <h5>Get started</h5>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Sign up</a></li>
                    <li><a href="#">Downloads</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h5>About us</h5>
                <ul>
                    <li><a href="#">Company Information</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h5>Support</h5>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help desk</a></li>
                    <li><a href="#">Forums</a></li>
                </ul>
            </div>
            <div className="col-sm-3">
                <h5>Legal</h5>
                <ul>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <iframe id="map-container" frameborder="0" style={{border: 0}}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv534QaPC8g&key=AIzaSyBdJm9Amm4KALkKlZObWn40dcpRyH119zg" >
        </iframe>
    </div>
    <div className="social-networks">
        <a href="#" class="twitter"><i className="fa fa-twitter"></i></a>
        <a href="#" class="facebook"><i className="fa fa-facebook"></i></a>
        <a href="#" class="google"><i className="fa fa-google-plus"></i></a>
    </div>
    <div className="footer-copyright">
        <p>© 2018 Copyright omermindivanli.com</p>
    </div>
</footer>
</div>

);

export default Footer;

