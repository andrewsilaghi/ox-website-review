import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

export default () => (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/BSMYSEJ.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/d0xMyzF.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/96hvrW3.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/pMz3ZOK.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.imgur.com/HBDKufS.jpg"
        alt="Third slide"
      />

    </Carousel.Item>
  </Carousel>
)