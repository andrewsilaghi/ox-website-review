import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default ({quote, pqBgColor, textColor}) => (
    <div style={{backgroundColor: pqBgColor }}>
    <div className="container case-study-quote case-study--padded" >
    <div className="row">
    <div className="offset-md-4 col-md-8 py-5">
    <hr style={{olor: textColor }} className="case-study-quote__line"/>
    <h2 style={{color: textColor }} className="serif case-study-quote__title font-weight-bold pb-3">Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolor.</h2>
    <p style={{color: textColor }} className="" dangerouslySetInnerHTML={{ __html: quote }} />
    </div>
    </div>
    </div>
    </div>
)