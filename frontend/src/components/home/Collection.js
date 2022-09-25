import React, { Component } from 'react';
import {Container,Row,Col,Card} from 'react-bootstrap';

class Collection extends Component {
  render() {
    return (
      <>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>
            <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className="image-box card w-100">
                <img className="center w-75" src="https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card">Realme C21 (Cross Black, 64 GB)</p>
                  <p className="product-price-on-card">Price : $120</p>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    )
  }
}

export default Collection
