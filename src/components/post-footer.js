import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import logodark from '../../static/img/ox-logo-dark.png'
import Carousel from 'react-bootstrap/Carousel'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from "gatsby";
library.add(fab);


export default ({nextCaseStudyPic, nextCaseStudyTitle, nextCaseStudyDesc, nextPostLink }) => (
<div>
  <section className="testimonials py-5">
  <div className="container">
  <div className="row">
  <Carousel controls={false} indicators={true}>
<Carousel.Item>
  <div className="col-md-8 offset-md-2 text-center">
  <p className="testimonials__text serif">OX pairs creativity with clarity in a way that leaves you speechless. We count working with OX as one of our greatest gifts, and we look forward to a long-term relationship with them.</p>
  <p className="testimonial__name">David Mitchell</p>
  <p className="testimonial__company">President - Paterson Center</p>
  </div>
  </Carousel.Item>
<Carousel.Item>
  <div className="col-md-8 offset-md-2 text-center">
  <p className="testimonials__text serif">As the leader of STORY, an industry-leading conference for storytellers, I’ve had the opportunity to get to know dozens of creative agencies. From massive, legendary ad agencies to small creative shops, OX is the one group who has consistently continued to outshine and over-deliver time and time again.</p>
  <p className="testimonial__name">Harris III</p>
  <p className="testimonial__company">Owner, Creative Director - STORY Conference</p>
  </div>
  </Carousel.Item>
<Carousel.Item>
  <div className="col-md-8 offset-md-2 text-center">
  <p className="testimonials__text serif">OX took care of every detail before, during and after the production, which made it nearly impossible to stress about the project. I felt a level of comfortability that I haven't felt working with any other agency before.</p>
  <p className="testimonial__name">Courtney Clinkert</p>
  <p className="testimonial__company">Storyteller, Brand & Community, lululemon</p>
  </div>
  </Carousel.Item>
<Carousel.Item>
  <div className="col-md-8 offset-md-2 text-center">
  <p className="testimonials__text serif">What set OX Creative apart was their ability to capture our heart for what we wanted to do and come back with ways to creatively make it happen beyond what we had envisioned. The creative process exceeded our highest expectations.  </p>
  <p className="testimonial__name">RT & Tim Phillips  </p>
  <p className="testimonial__company">President & Director of Strategy, CORE Unites</p>
  </div>
  </Carousel.Item>
<Carousel.Item>
  <div className="col-md-8 offset-md-2 text-center">
  <p className="testimonials__text serif">OX had a uniquely strong ability to connect with our values and mission, while delivering breathtaking creative thinking and use of unexpected media for communication across generations.  </p>
  <p className="testimonial__name">Jim Jewell</p>
  <p className="testimonial__company">Brand Director, NLT and LASB, Tyndale Publishers</p>
  </div>
  </Carousel.Item>
  </Carousel>
  </div>
  </div>
  </section>
  <section className="call-to-action">
  <div className="container-fluid">
  <div className="row cta__next-containers">
  <div className="col-md-4 cta__next-exerpt d-flex  align-items-center">
  <div className="mx-auto px-5 py-3">
  <a href={nextPostLink} target="_blank">
  <h3 className="text-white font-weight-bold  cta__next-exerpt__heading">{nextCaseStudyTitle}</h3>
  <p className="text-white font-weight-medium">{nextCaseStudyDesc}</p>
  </a>
  </div>
  </div>
  <div className="col-md-4 cta__next-img"  style={{background: "url(" + nextCaseStudyPic + ")"+ "no-repeat center center" }}></div>
  <div className="col-md-4">
  <div className="d-flex flex-column justify-content-start cta__text-container">
  <div className="my-auto">
  <h1 className="serif font-weight-bold text-white cta__heading cta__heading--alternate">Let's get to<br/> work, together!</h1>
  <button className="cta__button"> <a href="https://oxcreates.typeform.com/to/M4cMBe" target="_blank">Learn More</a> </button>
  </div>
  </div>
  </div>
</div>
</div>
  </section>
<footer className="footer footer--padding">
    <div className="container text-center text-md-left">
    <div className="row footer-site-map">
    <div className="col-md-6">
    <img className="my-auto md-auto footer-logo" src={logodark}/>
    </div>

      <div className="col-md-3 mb-md-0 mb-3">
      <h4 className="text-uppercase list-header color-orange">OX HQ</h4>
        <ul className="list-unstyled footer-text">
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
        <ul className="list-unstyled footer-text">
          <li>
            <a href="mailto:contact@oxcreates.com">contact@oxcreates.com</a>
          </li>
          <li>
            <a href="tel:3129456023">(312) 945 6023</a>
          </li>
        </ul>
       <div className="pull-right text-right">
    <div class="center-block footer__social-strip">
    <br />
    <a href="https://vimeo.com/oxcreates" target="_blank"><FontAwesomeIcon icon={['fab', 'vimeo-square']} size="2x" color="#ff4729" /></a>
    <a href="https://dribbble.com/ox_creative" target="_blank"><FontAwesomeIcon icon={['fab', 'dribbble']} size="2x" color="#ff4729" /></a>
    <a href="https://www.instagram.com/oxcreates/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" color="#ff4729" /></a>
    <a href="https://www.linkedin.com/company/j-oxford-studios/about/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"  color="#ff4729" /></a>
    </div>
        </div>
        </div>
        </div>
        </div>
    
    </footer>
    </div>
    )