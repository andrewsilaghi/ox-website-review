import React from "react"
import 'bootstrap/dist/css/bootstrap.css'

export default ({quote, pqBgColor, textColor, quoteTitle}) => (
    <div style={{backgroundColor: pqBgColor }}>
    <div className="container case-study-quote case-study--padded" >
    <div className="row">
    <div className="offset-md-4 col-md-8 py-5">
    <hr style={{color: textColor }} className="case-study-quote__line"/>
    <h2 style={{color: textColor }} className="serif case-study-quote__title font-weight-bold pb-3" dangerouslySetInnerHTML={{ __html: quoteTitle }} />
    <p style={{color: textColor }} className="pull-quote__text" dangerouslySetInnerHTML={{ __html: quote }} />
    </div>
    </div>
    </div>
    </div>
)