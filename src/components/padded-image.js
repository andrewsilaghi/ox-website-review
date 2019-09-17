import React,{Component} from "react"
import { StaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.css'

export default ({bgColor, paddedImages, paddedUrl, caseStudyLeft}) => (
    
<div className="section--padding" style={{backgroundColor: bgColor }}>
                <div className="container-fluid">
                <div className="row">
                <div className="col-md-12">
                <div className="container">
                <a href={paddedUrl} target="_blank">
                <div>
                <div className="container">
                <img className="w-100" src={paddedImages}/>   
                </div>
                </div>
                </a>
                </div>
               </div>
                </div>
                </div>
                </div>
                )