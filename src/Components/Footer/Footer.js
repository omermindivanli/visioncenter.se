import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="container">
                    <p className="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2018 <a href="http://omermindivanli.com">omermindivanli.com</a> &middot; Privacy &middot; <a href="#">Terms</a></p>
                </div>
            </footer>
        );
    }
}

export default Footer;

