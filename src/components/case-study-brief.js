import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default ({title, exerpt, bgColor,rightSideText, leftSideText, textColor, servicesList}) => (
    <div className="case-study-brief case-study--padded" style={{backgroundColor: `${bgColor}`, color: `${textColor}`}}>
    <div className="container-fluid ">
    <div className="row">
    <h3 className="vrtcl-txt ml-0 col-md-2  font-weight-bold" style={{ color: `${textColor}`}} dangerouslySetInnerHTML={{ __html: leftSideText }}/>
    <div className="col-md-8">
    <div className="container">
    <div className="row">
    <div className="col-md-8">
    <h1 className=" case-study-brief__title" dangerouslySetInnerHTML={{ __html: title }} />
    <hr style={{ color: `${textColor}`}} className="col-md-2"/>
    </div> 
    </div>   

    <div className="row">
    <div className="col-md-7 text-white">
    <p className="case-study-brief__description" style={{ color: `${textColor}`}} dangerouslySetInnerHTML={{ __html: exerpt }} />
    </div>
    <div className="col-md-3 offset-md-2 text-white">
    <h4 className=" case-study-brief__services-title" style={{ color: `${textColor}`}}>SERVICES</h4>
    <p className="case-study-brief__services-list" style={{ color: `${textColor}`}} dangerouslySetInnerHTML={{ __html: servicesList }} />
    </div>
    </div>
    </div>
    </div>
    <h3 className="vrtcl-txt-90 mr-0 col-md-2 font-weight-bold" style={{ color: `${textColor}`}} dangerouslySetInnerHTML={{ __html: rightSideText }}/>
    </div>
    </div>
    </div>
)