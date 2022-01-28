import React from 'react';
import './styles/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import NavigationBar from './Components/NavigationBar';

class HomePage extends React.Component {
  
  render() {
    return (
      <div>
          <NavigationBar />
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.artmajeur.com/medias/standard/o/l/olvakulin/artwork/11078860_.jpg"
                alt="First slide"
              />

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://watercolorpainting.com/staging/wp-content/uploads/2019/04/easy-watercolor-techniques-painting-japanese-flowers-within-5-minutes_FEATURED-IMAGE.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.shgcdn.com/6185b643-1975-4324-ae75-750f5e9a1a37/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
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
}

export default HomePage;



<div className="intro">
                <div className="name">Mo (Catherine) Zhou</div>
                <div className="name-intro"> Electrical and Computer Engineering Student at the University of Toronto</div>
                <a className="contact" href="subpages/contact.html"><button id="contact-btn">Contact Me</button></a>
                </div>