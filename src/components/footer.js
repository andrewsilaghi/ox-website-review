import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import logodark from '../../static/img/ox-logo-dark.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab);


export default () => (


<footer className="footer py-5">
    <div className="container text-center text-md-left">
    <div className="row footer-site-map padding-footer">
      <div className="col-md-6 mt-0">
      <div className="row ">
    <a className="call-to-action-btn">
    <h1 className="text-left serif font-weight-bold">Work with us!</h1>
    <svg className="arrow text-right" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>    
    </a>
    </div>
       
      </div>
      <div className="col-md-3 mb-md-0 mb-3">
      <h4 className="text-uppercase list-header color-orange">Our Office</h4>
        <ul className="list-unstyled footer-text font-weight-bold">
          <li>
            <a href="#!">1 Douglas Ave,  
            </a>
          </li>
          <li>
            <a href="#!"> Elgin, IL 60120 </a>
          </li>
          <li>
            <a href="#!">United States</a>
          </li>
        </ul>
      </div>

      <div className="col-md-3 mb-md-0 mb-3">
      <h4 className="text-uppercase list-header color-orange">Contact</h4>
        <ul className="list-unstyled footer-text font-weight-bold">
          <li>
            <a href="#!">contact@oxcreates.com</a>
          </li>
          <li>
            <a href="#!">(312) 945 6023</a>
          </li>
        </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
        <img className="my-auto md-auto footer-logo" src={logodark}/>
        </div>
        <div className="col-md-6 pull-right text-right">
        <div class="text-left center-block footer__social-strip">
        <br />
          <a href="https://www.facebook.com/bootsnipp"><FontAwesomeIcon icon={['fab', 'vimeo-square']} size="2x" color="#ff4729" /></a>
          <a href="https://twitter.com/bootsnipp"><FontAwesomeIcon icon={['fab', 'dribbble']} size="2x" color="#ff4729" /></a>
          <a href="https://plus.google.com/+Bootsnipp-page"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="#ff4729" /></a>
          <a href="mailto:bootsnipp@gmail.com"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  color="#ff4729" /></a>
        </div>
        </div>
        </div>
      </div>
    
    </footer>)