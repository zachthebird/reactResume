import React from "react";
import { $ }from 'jquery';  
  
const Footer = props => (
    <div className='page-footer indigo lighten-2'>
    <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Contact Me</h5>
                <p className="grey-text text-lighten-4">Thank you for visiting my web page. If you liked this webpage or have any questions about my work. Please feel free to reach out and connect with me via e-mail, Twitter, or follow me on GitHub.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://github.com/zachthebird">GitHub</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://twitter.com/zachthebird">Twitter</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/zachbird/">LinkedIn</a></li>
                  <li><a className="grey-text text-lighten-3" href="https://angel.co/zachary-bird?public_profile=1">AngelList</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright indigo darken-2">
            <div className="container">
            © 2017 Copyright Zachary Bird
            <a className="grey-text text-lighten-4 right" href="mailto:zachthebird@gmail">zachthebird@gmail.com</a>
            </div>
          </div>
    </div>
);

const styles = {
  timeStyle: {
    url: './expGraph.png',
    padding: 30
  },
  jobTit: {
      textDecorationLine: 'underline'
  }
};

// Exporting this component as the default (only) export
export default Footer;