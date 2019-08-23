import React,{Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Nav from "../components/nav"
import Header from "../components/header"
import CaseStudyBrief from "../components/case-study-brief"
import PullQuote from "../components/pull-quote"
import Carousel from 'react-bootstrap/Carousel'
import Footer from "../components/footer"
import {Button, ButtonToolbar,Jumbotron } from "react-bootstrap"
import Modal from 'react-modal';





const customStyles = {
  content : {
    top                   : '50%',
    width                 : '100%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)


class PostTemplate extends Component {
  
  componentDidMount() {  
    if (typeof window !== 'undefined') {
    console.log(`Location: ${window.location.href}`);
  }
    
    Modal.setAppElement(document.getElementById('yourAppElement'))
    }
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    const post = this.props.data.wordpressPost


    return (

      <div>

      <Nav color={'bg-black'}></Nav>
      <Header headerTitle="Core Unites ipsum tempor amd consectetur sita." headerSubTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et." bg={post.featured_media.localFile.url}></Header>
      
        {post.acf &&
          post.acf.portfolio_page_building_blocks_post &&
          post.acf.portfolio_page_building_blocks_post.map((layout, i) => {

            if (layout.__typename === `WordPressAcf_gallery`) {
              return (
                <Carousel>
                  {layout.image_sliding_carousel.map(({ localFile }) => {
                    const img = localFile.url
                    return (
                      <Carousel.Item>
                        <img
                          className="h-100 w-100"
                          src={img}
                          alt="First slide"
                        />
                      </Carousel.Item>                
                    )
                  })}
                </Carousel>
              )
              }

              if (layout.__typename === `WordPressAcf_about_page_staff_grid`) {
                return (
                  <div className="bg-black">
                  <div className="container py-5">
                  <h1 className="serif font-weight-bold text-center py-5 text-white">Our Team</h1>
                  <div className="row px-5">

                    {layout.person.map(item => (
                      <div className="col-md-3 my-4">
                      <div className="card bg-dark text-white">
                      <img className="card-img" src={item.headshot.localFile.url}/>
                      <div className="card-img-overlay d-flex flex-column justify-content-end">
                      <h5 className="card-title serif bold"> {item.name}</h5>
                      <p className="card-text person__title">Project Manager</p>
                    </div>
                             

                      </div>
                      </div>
                  ))}
                  </div>
                  </div>
                  </div>
                )
                }
            if (layout.__typename === `WordPressAcf_pull_quote`) {
              const PullQuoteText = layout.pull_quote_text
              const bgColor =  layout.pull_quote_bg_color
              const fontColor =  layout.pull_quote_text_color
              return (
                <PullQuote quote={PullQuoteText} pqBgColor={bgColor} textColor={fontColor}></PullQuote>
              )
            }
            if (layout.__typename === `WordPressAcf_portfolio_brief`){
              const caseStudyInfo = layout.brief_intro
              const caseStudyTitle = layout.brief_title
              const caseStudySideRight = layout.brief_side_text_right
              const caseStudySideLeft = layout.brief_side_text_left
              const caseStudyTextColor = layout.brief_text_color
              const caseStudyBgColor = layout.brief_bg_color
              return (
            <CaseStudyBrief title={caseStudyTitle} exerpt={caseStudyInfo} bgColor={caseStudyBgColor} rightSideText={caseStudySideRight} leftSideText={caseStudySideLeft} textColor={caseStudyTextColor}></CaseStudyBrief>
            )
          }

            if (layout.__typename === `WordPressAcf_full_width_banner`) {
              const fullWidthBanner = layout.full_width_banner_img.localFile.url
              return (
                <img className="case-study__banner" src={fullWidthBanner}/>
              )
            }
            if (layout.__typename === `WordPressAcf_full_width_video`) {
              const videoBanner = layout.full_width_video_banner_jpg.localFile.url
              const videoUrl = layout.full_width_video_banner_url
              return (
                <div>
                <div className="video-banner">
                  <img className="video-banner-bg" src={videoBanner} alt="Snow"/>
                  <button className="open-modal" onClick={this.openModal}>
                  <div className="d-flex flex-row align-items-center">
                    <div class="style__VideoIconWrapper-sc-1jcsfwo-8 eTmNXU">
                    <svg className="style__VideoIcon-sc-1jcsfwo-9 ihnEFr" viewBox="0 0 6 8">
                      <path
                        fillRule="evenodd"
                        d="M5.92 3.843c.13.087.128.229 0 .314L.235 7.975C.104 8.06 0 8.015 0 7.857V.143C0-.009.107-.06.234.025L5.92 3.843z"
                      />
                    </svg>
                    </div>
                    <a className="font-weight-bold video-banner__btn-text">WATCH VIDEO</a>
                    </div>
                  </button>
                  </div>
                
                  <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <div className="container-fluid">
                    <button className="close-module" onClick={this.closeModal}></button>
                    <div class="embed-responsive embed-responsive-21by9">
                      <iframe class="embed-responsive-item" src={videoUrl}></iframe>
                    </div>
                    </div>
                  </Modal>
          </div>
              )
            }
            if (layout.__typename === `WordPressAcf_padded_image`) {
              const paddedImages = layout.padded_image_png.localFile.url
              const bgColor =  layout.padded_image_background_color
              return (
                <div style={{backgroundColor: bgColor }}>
                <div className="container padded-pic">
                <img className="col-md-12" src={paddedImages}/>
                </div>
                </div>
              )
            }


            return null
          })}
          <div className="container-fluid">
          <div className="row bg-grey text-white">
          <div className="col-md-6 px-0"><img className="next-post-img" src="https://i.imgur.com/JaDLbfk.png" /></div>
          <div className="col-md-6 py-5 px-5 d-flex align-items-center"><div><h1 className="serif mb-4">Next Project</h1> <hr className="next-project-break"/> <p className="mt-4">Text on why they should check out the very next project. Text would go right here. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div></div>
          </div>
          </div>
          




          <Footer></Footer>



       </div>
       
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
query($id: String!) {
  wordpressPost(id: { eq: $id }) {
    title
    content
    featured_media {
      localFile {
        url
      }
    }
    acf {
      brief_background_color
      portfolio_page_building_blocks_post {
          __typename

            ... on WordPressAcf_portfolio_brief {
              brief_intro
              brief_title
              brief_side_text_right
              brief_side_text_left
              brief_text_color
              brief_bg_color

          }

          ... on WordPressAcf_padded_image {
            padded_image_background_color
            padded_image_png {
              localFile {
                url
              }
            }

          }

          ... on WordPressAcf_about_page_staff_grid {
            person {
              name
              headshot {
                localFile {
                  url
                }
              }
            }
          }

            ... on WordPressAcf_pull_quote {
              pull_quote_text
              pull_quote_image
              pull_quote_bg_color
              pull_quote_text_color
            }
            ... on WordPressAcf_gallery {
            image_sliding_carousel {
              localFile {
                url
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          ... on WordPressAcf_full_width_banner {
            full_width_banner_img {
              localFile {
                url
              }
            }
          }
          ... on WordPressAcf_full_width_video {
            full_width_video_banner_url
            full_width_video_banner_jpg {
              localFile {
                url
              }
            }
          }
          
        }
      }
    }
  }
`
