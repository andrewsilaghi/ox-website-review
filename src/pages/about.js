import React from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
// import Header from "../components/header"
import Banner from "../components/video-ban"
import CaseStudy from "../components/case-studies"
import NavBar from "../components/nav"
import Footer from "../components/footer"
import VideoBanner from '../components/video-ban';
import OxIntro from "../components/ox-intro"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import Img from "gatsby-image"
import Nav from "../components/nav"
import Header from "../components/header"
import CaseStudyBrief from "../components/case-study-brief"
import PullQuote from "../components/pull-quote"


export default ({data}) => (
  <div>
  <NavBar></NavBar>
  <Header headerTitle="Core Unites ipsum tempor amd consectetur sit." headerSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et." bg={data.test.acf.video_banner_img.localFile.url}></Header>
  </div>
)

export const pageQuery = graphql`

  query querAboutPage{
  test: wordpressPage(id: {eq: "bdd4b238-5e17-541a-a970-11440f2d4c32"}) {
  id
  acf {
    our_clients {
      localFile {
        url
      }
    }
    video_banner_img {
      localFile {
        url
      }
    }
    video_banner_url
  }
}
}
`