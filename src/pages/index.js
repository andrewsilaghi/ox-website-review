import React from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
// import Header from "../components/header"
import Banner from "../components/video-ban"
import CaseStudy from "../components/case-studies"
import NavBar from "../components/nav"
import Footer from "../components/footer"
import HomeVideoBanner from '../components/home-video-header';
import Carousel from 'react-bootstrap/Carousel'
import OxIntro from "../components/ox-intro"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import client1 from '../../static/img/clients/nat-geo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fab);



export default ({data}) => (
  
    <div>
    <NavBar></NavBar>
<HomeVideoBanner videoHeaderTitle={data.homePageAcf.acf.video_heading}  videoBanner={data.homePageAcf.acf.video_banner_img.localFile.url} videoUrl={data.homePageAcf.acf.video_banner_url}></HomeVideoBanner>
<OxIntro leftColumn={data.homePageAcf.acf.intro_text_left_column} rightColumn={data.homePageAcf.acf.intro_text_right_column}></OxIntro>    
    <section className="quote section--padding">
    <div className="container text-center">
    <h3 className="quote__heading lead">Our Work Has</h3>

    <Carousel controls={false} indicators={true}>
    {data.homePageAcf.acf.work_fact.map(({ our_work_fact }) => {
      const ourWorkFact = our_work_fact
      return (
        <Carousel.Item>
        <div className="col-md-8 offset-md-2 text-center">
        <h2 className="serif quote__text">{ourWorkFact}</h2></div>
        </Carousel.Item>               
      )
    })}
    
    </Carousel>
    </div>
    </section>
 
    <section className="section--padding bg-white">
    <div className="container">
        <div className="row">     
        <div className="col-md-12">         
        <h1 className="text-center client__heading lead">Our Partners</h1>   
        </div>     
        </div>
        <div className="row d-flex align-items-center">
        {data.homePageAcf.acf.our_clients.map(({ localFile }) => {
          const img = localFile.url
          return (
            <div className="col-md-2 client__logo-container px-0">
              <img
                className="w-100 py-4"
                src={img}
                alt="First slide"
              />
            </div>                
          )
        })}
        </div>
        </div>
    </section>
    <section className="case-studies">
        <div className="container-fluid">
            <div className="row">

                {data.postsQuery.edges.map(({ node }) => (
                  <Link className="w-100" to={node.slug}>
                    <div className="col-md-12 case-studies__card-video" style={{background: "url(" + node.featured_media.localFile.url + ")"+ "no-repeat center center" }}>
                    <div class="overlay"></div>
                    <video playsinline="playsinline" autoplay="autoplay" muted="muted" muted>
                      <source src={node.acf.header_video_background_url.localFile.url} type="video/mp4"/>
                    </video>
                    <div class="container-fluid h-100">
                      <div class="d-flex h-100 text-left align-items-end">
                      <div className="col-md-8 col-sm-12 case-study__info" >        
                      <h4 className="text-white serif">Case Study</h4>
                      <h1 className="text-white font-weight-bold case-study__text" dangerouslySetInnerHTML={{ __html: node.acf.case_study_text_for_home_page }} /> 
                        </div>
                      </div>
                    </div>
                  </div>
                    </Link>
                ))}

            </div>
        </div>
    </section>
    <section className="article">
    <div className="container-fluid">
    <div className="row">
    {

      data.homePageAcf.acf.medium_post.map(({ medium_post_image,medium_post_title,medium_post_url }) => {
      const mediumBg = medium_post_image.localFile.url
      const mediumTitle = medium_post_title
      const mediumUrl = medium_post_url
      return(
      <div className="col-md-4 post px-0">
      <div className="post__image" style={{background: "url(" + mediumBg + ")" + " no-repeat center center", backgroundSize: 'cover'}}>
        <a target="_blank" href={mediumUrl} className="post__overlay d-flex flex-column justify-content-center text-center align-items-center">
        <div className="post__container">
          <h3 className="text-white serif">{mediumTitle}</h3> 
        <div className="post__btn flex-row d-flex align-items-center">
          <p className="read-more text-white my-0 ">Read more on </p>
          <div className="meidum-icon"><FontAwesomeIcon icon={['fab', 'medium']} size="1x" color="#fff" /></div>
        </div>
        </div>
        </a>
      </div>
    </div>
    )
    })}     
    </div>
    </div>
    </section>
  

    <Footer></Footer>
    </div>
)
export const pageQuery = graphql`

  query postsQueryHomePage {
    postsQuery:   allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "case-study"}}}}) {
        edges {
          node {
            slug
            id
            excerpt
            content
            title
            featured_media {
              localFile {
                url
              }
            }
            acf {
              case_study_text_for_home_page
              header_video_background_url{
                localFile{
                  url
                }
              }
            }
          }
        }
      }
      homePageAcf:   wordpressPage(id: {eq: "dab79b04-eadd-5fac-9bc3-c721365b2e04"}) {
        id
        acf {
          our_clients {
            localFile {
              url
            }
          }
          work_fact {
            our_work_fact
          }
          video_banner_img {
            localFile {
              url
            }
          }
          video_banner_url
          video_heading

          intro_text_left_column
          intro_text_right_column

          medium_post {
            medium_post_image{
              localFile {
                url
              }
            }
            medium_post_title
            medium_post_url
          }
          philosophy_video
          

        }
      }
}
`


// {data.homePageAcf.acf.video_banner_img.localFile.url}

// <div className="container">
//   <Link className="text-center" to="/">
//     <h1 className="navbar-brand mb-0">{title}</h1>
//   </Link>
//   <div className="navbar-nav-scroll">
//     <ul className="navbar-nav bd-navbar-nav flex-row">
//       <li
//         className={
//           location.pathname === '/' ? 'nav-item active' : 'nav-item'
//         }
//       >
//         <Link to="/" className="nav-link">
//           Home
//         </Link>
//       </li>
//       <li
//         className={
//           location.pathname === '/profile/'
//             ? 'nav-item active'
//             : 'nav-item'
//         }
//       >
//         <Link to="/profile/" className="nav-link">
//           Profile
//         </Link>
//       </li>
//     </ul>
//   </div>
//   <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
// </div>
// </nav>
