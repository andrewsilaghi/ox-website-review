import React from "react"
import { Link, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'
if (typeof window !== 'undefined') {
  window.jQuery = window.$ = require('jquery');
  require('bootstrap');
}
// import Header from "../components/header"
import Banner from "../components/video-ban"
import CaseStudy from "../components/case-studies"
import NavBar from "../components/nav"
import Footer from "../components/footer"
import VideoBanner from '../components/video-ban';
import OxIntro from "../components/ox-intro"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import client1 from '../../static/img/clients/nat-geo.png'
import Carousel from 'react-bootstrap/Carousel'


export default ({data}) => (
  
    <div>
    <NavBar></NavBar>
<VideoBanner videoBanner={data.homePageAcf.acf.video_banner_img.localFile.url} videoUrl={data.homePageAcf.acf.video_banner_url}></VideoBanner>
<OxIntro></OxIntro>
    <section className="section--padding bg-white">
    <div className="container-fluid">
    <div className="row">
    <h2 className="vrtcl-txt ml-0 col-md-2">Our Clients</h2>
        <div className="col-md-8">
        <div className="row d-flex align-items-center">
        {data.homePageAcf.acf.our_clients.map(({ localFile }) => {
          const img = localFile.url
          return (
            <div className="col-md-3 ">
              <img
                className="w-100 py-4 px-4"
                src={img}
                alt="First slide"
              />
            </div>                
          )
        })}
        </div>
        </div>
    <h2 className="vrtcl-txt-90 mr-0 col-md-2">Our Clients</h2>
    </div>
    </div>
    </section>
    
    <section className="quote section--padding">
    <div className="container text-center">
    <h3 className="quote__heading lead">Our Work Has</h3>
    <h2 className="serif quote__text">...Generated over $1 Billion <br/>
    in Contributions </h2>  
    </div>
    </section>
    <section className="case-studies">
        <div className="container-fluid">
            <div className="row">

                {data.postsQuery.edges.map(({ node }) => (
                    <div className="col-md-12 case-studies__card d-flex align-items-end " style={{background: "url(" + node.featured_media.localFile.url + ")"+ "no-repeat center center" }}>
                            <div className="col-md-8 col-sm-12 mb-5 case-study__info" >
                                <h4 className="text-white serif">Case Study</h4>
                                <h1 className="text-white font-weight-bold case-study__text" dangerouslySetInnerHTML={{ __html: node.acf.case_study_text_for_home_page }} />
                            </div>

                    </div>

                ))}

            </div>
        </div>
    </section>
    <section className="article">

    
    <div className="card-group">
    <div className="card bg-dark text-white">
    <img className="card-img" src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="Card image" />
    <div className="card-img-overlay">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text">Last updated 3 mins ago</p>
    </div>
  </div>
  <div className="card bg-dark text-white">
  <img className="card-img" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="Card image"/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
</div>
<div className="card bg-dark text-white">
<img className="card-img" src="https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2318&q=80" alt="Card image"/>
<div className="card-img-overlay">
  <h5 className="card-title">Card title</h5>
  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  <p className="card-text">Last updated 3 mins ago</p>
</div>
</div>
</div>
    </section>
    <section className="testimonials py-5">
    <div className="container">
    <div className="row serif">
    <Carousel controls={false} indicators={false}>
  <Carousel.Item>
    <div className="col-md-8 offset-md-2 text-center">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquam leo. Donec ultrices, ligula ut faucibus rhoncus, est arcu gravida dui, sagittis volutpat odio magna et erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quam nulla, suscipit eget tincidunt non, vulputate sed tellus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquam leo. Donec ultrices, ligula ut faucibus rhoncus, est arcu gravida dui, sagittis volutpat odio magna et erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quam nulla, suscipit eget tincidunt non, vulputate sed tellus.</p></div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="col-md-8 offset-md-2 text-center">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquam leo. Donec ultrices, ligula ut faucibus rhoncus, est arcu gravida dui, sagittis volutpat odio magna et erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quam nulla, suscipit eget tincidunt non, vulputate sed tellus.</p></div>
    </Carousel.Item>
    <Carousel.Item>
    <div className="col-md-8 offset-md-2 text-center">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel aliquam leo. Donec ultrices, ligula ut faucibus rhoncus, est arcu gravida dui, sagittis volutpat odio magna et erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla quam nulla, suscipit eget tincidunt non, vulputate sed tellus.</p></div>        
    </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </section>
    <section className="call-to-action py-5">
    <div className="container">
    </div>
    </section>
    <Footer></Footer>
    </div>
)
export const pageQuery = graphql`

  query postsQueryHomePage{
    postsQuery: allWordpressPost {
        edges {
          node {
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
