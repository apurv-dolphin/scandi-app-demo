/* eslint-disable jsx-a11y/label-has-associated-control */

import { PureComponent } from 'react';
import { Col, Row } from 'react-bootstrap';

import './AboutUs.style';

/** @namespace myFirstApp/Route/AboutUs/Component */
export class AboutUsComponent extends PureComponent {
    render() {
        return (
      <div block="AboutUs">
        <Row>
          <Col className="col-md-6">
            <div className="row">
              <div className="column">
                <form
                  className="left-form"
                  name="Myform"
                  id="Myform"
                  method="post"
                >
                  <h1 className="title">Please fill the contact form</h1>
                  <p className="para main">
                    Fields marked with * are mandatory
                  </p>
                  <div className="inner-form">
                    <div className="label">
                      <label id="label">First Name*</label>
                    </div>
                    <input
                      type="text"
                      className="input"
                      id="fname"
                      name="firstName"
                      placeholder="write your first name here eg. Apurv"
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">
                      <label id="label">Last Name*</label>
                    </div>
                    <input
                      type="text"
                      className="input"
                      id="lname"
                      name="lastName"
                      placeholder="write your Last name here eg. Khalas"
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">
                      <label>Email Address*</label>
                    </div>
                    <input
                      type="email"
                      className="input"
                      name="emailAddress"
                      id="email"
                      placeholder="Email Address eg. apurv@dws.com"
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">
                      <label>Contact Number*</label>
                    </div>
                    <input
                      type="number"
                      className="input"
                      name="contactNumber"
                      id="num"
                      placeholder="Contect Number eg. 5689231478"
                    />
                  </div>
                  <div className="inner-form">
                    <div className="label">
                      <label>Gender*</label>
                    </div>
                    <div className="select">
                      <input
                        type="radio"
                        id="male"
                        name="gender"
                        defaultValue="Male"
                      />
                      Male
                      <input
                        type="radio"
                        name="gender"
                        id="female"
                        defaultValue="Female"
                      />
                      Female
                    </div>
                  </div>
                  <div className="inner-form">
                    <div className="label">
                      <label>Luaguages you know*</label>
                    </div>
                    <div className="select">
                      <input type="checkbox" name="english" id="language" />
                      English
                      <input type="checkbox" name="hindi" id="language" />
                      Hindi
                      <input type="checkbox" name="gujarati" id="language" />
                      Gujarati
                    </div>
                  </div>
                  <textarea
                    className="rbox"
                    name="aboutProject"
                    id="txt"
                    placeholder="Brief about the project"
                  />
                  <br />
                  <br />
                  <button type="sumbit" className="submit inner" value="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
        );
    }
}

export default AboutUsComponent;
