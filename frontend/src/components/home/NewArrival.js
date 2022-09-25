import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
  constructor(props){
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this);
  }

  next(){
    this.slider.slickNext();
  }

  previous(){
    this.slider.slickPrevious();
  }
  render() {
    let settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
          <h2>
            <a className="btn btn-sm mr-2 site-btn" onClick={this.previous}><i className="fa fa-angel left"></i></a>
              NEW ARRIVAL
            <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className="fa fa-angel right"></i></a>
          </h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider ref={c=>(this.slider=c)} {...settings}>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className="image-box card">
                  <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                  <Card.Body>
                    <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                    <p className="product-price-on-card">Price : $120</p>

                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </>
    )
  }
}

export default NewArrival
