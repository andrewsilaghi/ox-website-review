import React from "react"
import 'bootstrap/dist/css/bootstrap.css'


const caseStudyData = {
    title:"Lulu",
    exerpt:"Lorem Ipsum",
    imgUrl:"https://imgur.com/zVSHIOW"
}

const caseStudy = () =>(
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-12 case-studies__lulu-lemon" style={{ backgroundImage: caseStudyData.imgUrl }}>
        <div className="row">
            <div className="col-md-4 col-sm-12 mb-5">
            <h4 className="text-white">{caseStudyData.title}</h4>
            <h2 className="text-white">{caseStudyData.exerpt}</h2>
            </div>
        </div>
    </div>
</div>
</div>
)

export default caseStudy