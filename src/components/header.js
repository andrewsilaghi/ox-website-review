import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


export default ({bg, headerTitle, headerSubTitle}) => (
  <div className="jumbotron jumbotron-fluid d-flex align-content-end flex-wrap header" style={{backgroundImage: `url(${bg})`}}>
  <div className="container">
  <div className="row">
    <div className="text-white">
      <h1 className="col-md-8 text-white py-4 font-weight-bold header__title">{headerTitle}</h1>
    </div>
    </div>
  <div className="row">
    <div className="text-white">
    <p className=" col-md-10 text-uppercase header__sub-title">{headerSubTitle}</p>
    </div>
    </div>

  </div>
</div>
)
