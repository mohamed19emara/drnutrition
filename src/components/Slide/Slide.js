import React from 'react'
import {Carousel } from 'react-bootstrap'
import one from '../../assest/images/11.jpg'
import two from '../../assest/images/22.jpg'
import three from '../../assest/images/33.jpg'
import './slide.css'

const Slide = () => {
  return (
     <div className="carousel-container mb-50">
        <Carousel Carousel interval={3000} fade>
       <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={one}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={two}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-image"
      src={three}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  )
}

export default Slide