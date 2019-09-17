import React,{Component} from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Nav from "../components/nav"
import Header from "../components/header"
import CaseStudyBrief from "../components/case-study-brief"
import PullQuote from "../components/pull-quote"
import Carousel from 'react-bootstrap/Carousel'
import VideoBanner from '../components/video-ban';
import PaddedImage from '../components/padded-image';
import PostFooter from "../components/post-footer"
import {Button, ButtonToolbar,Jumbotron } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'
import Modal from 'react-modal';

class PostTemplate extends Component {
  state = { showing: false };
  render() {
    const post = this.props.data.currentPost
    const { showing } = this.state;


    return (
 

      <div>
      <Nav color={'bg-black'}></Nav>
      <Header headerTitle={post.acf.header_title} headerSubTitle={post.acf.header_body} bg={post.acf.header_background.localFile.url}></Header>
      
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
                      <p className="card-text person__title">{item.position}</p>
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
              const pullQuoteTitle =  layout.pull_quote_title
              return (
                <PullQuote quote={PullQuoteText} pqBgColor={bgColor} textColor={fontColor} quoteTitle={pullQuoteTitle}></PullQuote>
              )
            }
            if (layout.__typename === `WordPressAcf_portfolio_brief`){
              const caseStudyInfo = layout.brief_intro
              const caseStudyTitle = layout.brief_title
              const caseStudySideRight = layout.brief_side_text_right
              const caseStudySideLeft = layout.brief_side_text_left
              const caseStudyTextColor = layout.brief_text_color
              const caseStudyBgColor = layout.brief_bg_color
              const services = layout.services_list
              return (
              <CaseStudyBrief title={caseStudyTitle} exerpt={caseStudyInfo} bgColor={caseStudyBgColor} rightSideText={caseStudySideRight} leftSideText={caseStudySideLeft} textColor={caseStudyTextColor} servicesList={services}></CaseStudyBrief>
            )
          }

            if (layout.__typename === `WordPressAcf_full_width_banner`) {
              const fullWidthBanner = layout.full_width_banner_img.localFile.childImageSharp.fluid
              return (
                <Img fluid={fullWidthBanner} />
              )
            }
            if (layout.__typename === `WordPressAcf_full_width_video`) {
              const videoBanner = layout.full_width_video_banner_jpg.localFile.url
              const videoUrl = layout.full_width_video_banner_url
              return(
                <VideoBanner videoBanner={videoBanner} videoUrl={videoUrl}></VideoBanner>
              )
            }
            if (layout.__typename === `WordPressAcf_padded_image`) {
              const caseStudyLeft = layout.brief_side_text_left
              const paddedImages = layout.padded_image_png.localFile.url
              const bgColor =  layout.padded_image_background_color
              const paddedUrl = layout.padded_image_link
              return (
                <PaddedImage caseStudyLeft={caseStudyLeft} paddedUrl={paddedUrl} bgColor={bgColor} paddedImages={paddedImages}></PaddedImage>                
              )
            }

              if (layout.__typename === `WordPressAcf_video_grid`) {

                return (
                  <section>
                  <div className="container d-flex align-items-center">
                  <h4 className="my-0 watch-film__button-text">WATCH FILMS</h4> <button className="video-grid__arrow-btn d-flex align-items-center" onClick={() => this.setState({ showing: !showing })}><i class="video-grid__arrow video-grid__down video-grid__arrow-i"></i></button>
                  </div>
                  <div className="container-fluid mb-5 pb-5">
                  { showing 
                    ? <div className="row px-2">
                    {layout.video_grid_core.map(item => (
                      <div className="col-md-6 my-4 video-grid__cover">
                        <VideoBanner  videoBanner={item.video_banner.localFile.url} videoUrl={item.video_url}></VideoBanner>
                          <div className="">
                            <h5 className="video-grid__title bold"> {item.video_heading}</h5>
                            <p className="video-grid__text" dangerouslySetInnerHTML={{ __html: item.video_text}}></p>
                          </div>                      
                      </div>
                  ))}
                  </div>
                    : null
                  }
                  </div>
                  </section>
                )
            }
            if (layout.__typename === `WordPressAcf_next_post`) {
              const nextCaseStudyPic = layout.next_post_img.localFile.url
              const nextCaseStudyDesc = layout.next_post_brief
              const nextCaseStudyTitle =  layout.next_post_title
              const nextCaseStudyLink =  layout.next_post_link


              return (
                <PostFooter nextCaseStudyPic={nextCaseStudyPic} nextCaseStudyTitle={nextCaseStudyTitle} nextCaseStudyDesc={nextCaseStudyDesc} nextCaseStudyUrl={nextCaseStudyLink}></PostFooter>
                )
          }

            return null
          })}
          







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
  nextPost:   allWordpressPost(filter: {categories: {elemMatch: {name: {eq: "case-study"}}}}) {
    edges {
      next{
        title
      }
    }
  }

  currentPost: wordpressPost(id: { eq: $id }) {
    title
    content

    featured_media{
      localFile{
         url
      }
    }
    acf {
      header_background {
        localFile {
          url
        }
      }      
      header_body
      header_title
      portfolio_page_building_blocks_post {
          __typename

            ... on WordPressAcf_portfolio_brief {
              brief_intro
              brief_title
              brief_side_text_right
              brief_side_text_left
              brief_text_color
              brief_bg_color
              services_list
          }

          ... on WordPressAcf_padded_image {
            padded_image_background_color
            padded_image_link
            padded_image_png {
              localFile {
                url
              }
            }
          }

          ... on WordPressAcf_about_page_staff_grid {
            person {
              name
              position
              headshot {
                localFile {
                  url
                }
              }
            }
          }

            ... on WordPressAcf_pull_quote {
              pull_quote_text
              pull_quote_title
              pull_quote_image
              pull_quote_bg_color
              pull_quote_text_color
            }

            ... on WordPressAcf_video_grid {
              video_grid_core {
                video_banner {
                  localFile {
                    url
                  }
                }
                video_heading
                video_text
                video_url
              }
            }
            ... on WordPressAcf_gallery {
            image_sliding_carousel {
              localFile {
                url
              }
            }
          }
          ... on WordPressAcf_full_width_banner {
            full_width_banner_img {
              localFile {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                  }
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
          
          ... on WordPressAcf_next_post {
            id
            next_post_brief
            next_post_title
            next_post_link
            next_post_img {
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
