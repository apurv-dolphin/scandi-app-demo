/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional */
/* eslint-disable no-console */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
// import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import {
    Accordion,
    Button,
    Card,
    Col,
    Container,
    Form,
    Image,
    Row,
    Table
} from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomPage.style';

/** @namespace myFirstApp/Route/CustomPage/Component */

export class CustomPageComponent extends PureComponent {
  state = {
      count: 0,
      product: [],
      showCart: false
  };

  async componentDidMount() {
      const localStorageData = JSON.parse(localStorage.getItem('productData'));
      try {
          const response = await fetch(
              'https://60ff90a3bca46600171cf36d.mockapi.io/api/products'
          );
          const data = await response.json();
          // this.setState({ data });
          const ProductData = [];
          if (localStorageData === null) {
              const result = ProductData.concat(localStorageData || [], data);
              localStorage.setItem('productData', JSON.stringify(result));
          }
      } catch (err) {
          console.log(err);
      }
  }

  handleDecrement = () => {
      const { count } = this.state;
      this.setState({ count: count - 1 });
  };

  handleIncrement = () => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
  };

  showSingleProduct = (slug) => {
      const productData = JSON.parse(localStorage.getItem('productData'));
      this.setState({ showCart: true });
      const singleProductData = productData.filter((elem) => elem.slug === slug);
      this.setState({ singleProduct: singleProductData });
  };

  closeSingleProduct = () => {
      this.setState({ showCart: false });
  };

  renderTable() {
      const { count } = this.state;
      const localStorageData = JSON.parse(localStorage.getItem('productData'));
      return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <div className="tdheader">
                <h4>Picture</h4>
              </div>
            </th>
            <th>
              <div className="tdheader">
                <h4>Name</h4>
              </div>
            </th>
            <th>
              <div className="tdheader">
                <h4>Category</h4>
              </div>
            </th>
            <th>
              <div className="tdheader">
                <h4>Price</h4>
              </div>
            </th>
            <th>
              <div className="tdheader">
                <h4>Order</h4>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { localStorageData.map((newdata) => (
            <tr
              key={ newdata.id }
              style={ { cursor: 'pointer' } }
              onClick={ () => this.showSingleProduct(newdata.slug) }
            >
              <td>
                <div className="tdimage">
                  <Image src={ newdata.image } />
                </div>
              </td>
              <td>
                <div className="tddata">
                  <h5>{ newdata.name }</h5>
                </div>
              </td>
              <td>
                <div className="tddata">
                  <h5>{ newdata.category }</h5>
                </div>
              </td>
              <td>
                <div className="tddata">
                  <h5>
                    { '$' }
                    { newdata.price }
                  </h5>
                </div>
              </td>
              <td>
                <div className="tddata">
                  <h3>
                    <Button
                      variant="outline-secondary"
                      onClick={ this.handleDecrement }
                    >
                      -
                    </Button>
                    <Button variant="outline-secondary">{ count }</Button>
                    <Button
                      variant="outline-secondary"
                      onClick={ this.handleIncrement }
                    >
                      +
                    </Button>
                  </h3>
                </div>
              </td>
            </tr>
          )) }
        </tbody>
      </Table>
      );
  }

  renderSearch() {
      return (
      <Container fluid>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search..."
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
      );
  }

  renderHeaderInfo() {
      return (
      <div className="headertext" style={ { backgroundColor: 'gainsboro' } }>
        <div style={ { marginLeft: '20px' } }>
          <h4 style={ { lineHeight: '3' } }>
            <b> Product Deatails Information</b>
          </h4>
        </div>

        <p style={ { lineHeight: '2' } }>
          <div className="moreinfo">
more information
{ ' ' }
{ '>>' }
          </div>
        </p>
      </div>
      );
  }

  renderCart() {
      const { showCart, singleProduct } = this.state;
      return (
          <>
        { showCart ? (
            <>
            { singleProduct.length === 1 && (
                <>
                <Card>
                  <div className="card-header">
                    <Card.Header>
                      <h2>Cart</h2>
                    </Card.Header>
                    <div style={ { marginTop: '5px', cursor: 'pointer' } }>
                      <h2>
                        <AiOutlineClose onClick={ this.closeSingleProduct } />
                      </h2>
                    </div>
                  </div>
                  <div className="card-innerbody">
                    <div>
                      <Card.Img
                        variant="top"
                        src={ singleProduct[0].image }
                        style={ { width: '200px', objectFit: 'cover' } }
                      />
                    </div>
                    <div>
                      <Card.Body>
                        <Card.Title>
                          <div style={ { display: 'flex' } }>
                            <div className="input-detail">
                              <label className="label1"> Name :</label>
                              <p>{ singleProduct[0].name }</p>
                            </div>
                          </div>
                        </Card.Title>
                        <Card.Title>
                          <div style={ { display: 'flex' } }>
                            <div className="input-detail">
                              <label className="label1">Category :</label>
                              <p>{ singleProduct[0].category }</p>
                            </div>
                          </div>
                        </Card.Title>
                        <Card.Title>
                          <div style={ { display: 'flex' } }>
                            <div className="input-detail">
                              <label className="label1">Price :</label>
                              <p>
$
{ singleProduct[0].price }
                              </p>
                            </div>
                          </div>
                        </Card.Title>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
                <div
                  className="headertext"
                  style={ {
                      backgroundColor: 'darkgreen',
                      justifyContent: 'center',
                      marginTop: '20px',
                      cursor: 'pointer'
                  } }
                >
                  <h3 style={ { lineHeight: '3' } }>
                    <b style={ { color: '#fff' } }> Produce to Payment</b>
                  </h3>
                </div>
                <div
                  className="headertext"
                  style={ {
                      backgroundColor: 'gainsboro',
                      justifyContent: 'center',
                      marginTop: '20px',
                      cursor: 'pointer'
                  } }
                >
                  <h3 style={ { lineHeight: '3' } }>
                    <b>Continue the shopping</b>
                  </h3>
                </div>
                </>
            ) }
            </>
        ) : (
          <p>no products is selected</p>
        ) }
          </>
      );
  }

  renderFilterCategory() {
      // const { data } = this.state;
      const localStorageData = JSON.parse(localStorage.getItem('productData'));
      const result = localStorageData.reduce((finalresult, current) => {
          const obj = finalresult.find(
              (item) => item.category === current.category
          );

          if (obj) {
              return finalresult;
          }

          return finalresult.concat([current]);
      }, []);

      return (
      <Accordion>
        <Accordion.Item>
          { result.map((newresult) => (
            <div className="listcategory">
              <Accordion.Header style={ { backgroundColor: '#d8e6ed' } }>
                <h5>{ newresult.category }</h5>
              </Accordion.Header>
            </div>
          )) }
        </Accordion.Item>
      </Accordion>
      );
  }

  render() {
      return (
      <div>
        <div className="header">
          <Row>
            <Col className="col-md-2">{ this.renderSearch() }</Col>
            <Col className="col-md-10">{ this.renderHeaderInfo() }</Col>
          </Row>
        </div>
        <Row>
          <Col className="col-md-2">{ this.renderFilterCategory() }</Col>
          <Col className="col-md-7">{ this.renderTable() }</Col>
          <Col className="col-md-3">{ this.renderCart() }</Col>
        </Row>
      </div>
      );
  }
}

export default CustomPageComponent;
