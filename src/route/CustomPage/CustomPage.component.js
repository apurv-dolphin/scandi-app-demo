/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/forbid-elements */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
    Modal,
    Row,
    Table
} from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';

import Link from 'Component/Link';
import { CART_URL } from 'Route/CartPage/CartPage.config';
import { scrollToTop } from 'Util/Browser';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomPage.style';

/** @namespace myFirstApp/Route/CustomPage/Component */

export class CustomPageComponent extends PureComponent {
  state = {
      count: 0,
      product: JSON.parse(localStorage.getItem('productData')),
      showCart: false,
      showModal: false,
      filterdata: [],
      filtershow: false,
      availableData: [],
      page: 1,
      perPage: 7
  };

  async componentDidMount() {
      const { filtershow, product } = this.state;
      try {
          const response = await fetch(
              'https://60ff90a3bca46600171cf36d.mockapi.io/api/products'
          );
          const data = await response.json();
          const ProductData = [];
          if (product === null) {
              const result = ProductData.concat(product || [], data);
              localStorage.setItem('productData', JSON.stringify(result));
          }
          this.setState({
              availableData: filtershow ? this.fliterCategoryData : product
          });
      } catch (err) {
          console.log(err);
      }
  }

  paginatePage = (number) => {
      console.log('__ak', number);
      this.setState({ page: number });
  };

  handleClick = () => {
      this.setState({ showModal: true });
  };

  handleClose = () => {
      this.setState({ showModal: false });
  };

  handleDecrement = () => {
      const { count } = this.state;
      this.setState({ count: count - 1 });
  };

  handleIncrement = () => {
      const { count } = this.state;
      this.setState({ count: count + 1 });
  };

  showSingleProduct = (slug) => {
      const { product } = this.state;
      this.setState({ showCart: true });
      const singleProductData = product.filter((elem) => elem.slug === slug);
      this.setState({ singleProduct: singleProductData });
  };

  closeSingleProduct = () => {
      this.setState({ showCart: false });
  };

  fliterCategoryData = (category) => {
      const { product } = this.state;
      const filterdatas = product.filter((elem) => elem.category === category);

      this.setState({ availableData: filterdatas });
  };

  renderTable() {
      const {
          count, availableData, page, perPage
      } = this.state;
      const indexofLastpost = page * perPage;
      const indexofFirstpost = indexofLastpost - perPage;
      const items = availableData.slice(indexofFirstpost, indexofLastpost);
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
                <h4>order</h4>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { items.map((newdata) => (
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
                      onClick={ () => this.handleDecrement(newdata.id) }
                    >
                      -
                    </Button>
                    <Button variant="outline-secondary">{ count }</Button>
                    <Button
                      variant="outline-secondary"
                      onClick={ () => this.handleIncrement(newdata.id) }
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
          <button className="moreinfo" onClick={ this.handleClick }>
            more information
{ ' ' }
{ '>>' }
          </button>
        </p>
      </div>
      );
  }

  renderMoreinfo() {
      const { showModal } = this.state;
      return (
      <Modal show={ showModal } onHide={ this.handleClose }>
        <Modal.Header closeButton>
          <Modal.Title>web-site logo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C220sjAtQScUt_IEppey_CL0AYLUFzcsAw&usqp=CAU"
            style={ { height: '100px', objectFit: 'contain' } }
          />
          <div>
            <h4>Product base site...</h4>
            <h4>all products are good quality and resonable price...</h4>
            <h4>Discount on festival...</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={ this.handleClose }>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
                    <Link to={ CART_URL } onClick={ scrollToTop }>
                      <b style={ { color: '#fff' } }> Produce to Payment</b>
                    </Link>
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
                    <b>Add to cart</b>
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
      const { product } = this.state;
      // const localStorageData = JSON.parse(localStorage.getItem('productData'));
      const result = product.reduce((finalresult, current) => {
          const obj = finalresult.find(
              (item) => item.category === current.category
          );

          if (obj) {
              return finalresult;
          }

          return finalresult.concat([current]);
      }, []);

      return (
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            { result.map((newresult) => (
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                onClick={ () => this.fliterCategoryData(newresult.category) }
                style={ { cursor: 'pointer' } }
              >
                <h5>{ newresult.category }</h5>
                <hr />
              </div>
            )) }
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      );
  }

  renderPegination() {
      const { page, product, perPage } = this.state;
      const totalpost = product.length;
      const pageNumbers = [];

      // eslint-disable-next-line fp/no-let
      for (let i = 1; i <= Math.ceil(totalpost / perPage); i++) {
          pageNumbers.push(i);
      }

      return (
          <>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            { pageNumbers.map((number) => (
              <li
                key={ number }
                className={ `page-item ${number === page ? 'active' : ''}` }
              >
                <a
                  onClick={ () => {
                      this.paginatePage(number);
                  } }
                  className="page-link"
                  style={ { cursor: 'pointer' } }
                >
                  { number }
                </a>
              </li>
            )) }
          </ul>
        </nav>
          </>
      );
  }

  render() {
      return (
      <div>
        { this.renderMoreinfo() }
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
        <Row>{ this.renderPegination() }</Row>
      </div>
      );
  }
}

export default CustomPageComponent;
