import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Nav from "../components/nav"
import Footer from "../components/footer"
import Header from "../components/header"
import CaseStudyBrief from "../components/case-study-brief"
import CaseStudyPic from "../components/case-study-pic"
import FullWidthBanner from "../components/full-width-banner"
import PullQuote from "../components/pull-quote"
import ImgCarousel from "../components/img-carousel"


// import Header from "../components/header"




export default () => (
    <div>
    <Nav color={"fixed-top navbar-expand-sm"}></Nav>
    <Header bg={'https://i.imgur.com/ivcQkKN.jpg'}></Header>
    <CaseStudyBrief></CaseStudyBrief>
    <img className="my-0 case-study__banner" src="https://i.imgur.com/UqDeWyt.jpg"/>
    <img className="case-study__banner" src="https://i.imgur.com/9HG3LN9.jpg"/>
    <CaseStudyPic></CaseStudyPic>
    <FullWidthBanner></FullWidthBanner>
    <PullQuote></PullQuote>
    <PullQuote></PullQuote>
    <ImgCarousel></ImgCarousel>

    <Footer></Footer>
    </div>
    
)

