/* eslint-disable max-len */
import { Button, Image, Modal } from 'react-bootstrap';

import { SliderWidget as SourceSliderWidget } from 'SourceComponent/SliderWidget/SliderWidget.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './sliderwidget.style.scss';

/** @namespace myFirstApp/Component/SliderWidget/Component */
export class SliderWidgetComponent extends SourceSliderWidget {
  // TODO implement logic
  state = {
      // sets the default state
      showModal: false
  };

  handleClick = () => {
      this.setState({ showModal: true });
  };

  handleClose = () => {
      this.setState({ showModal: false });
  };

  renderSlide(slide, i) {
      const { isPlaceholder, title: block } = slide;
      const { showModal } = this.state;

      return (
          <>
        <figure block="SliderWidget" elem="Figure" key={ i }>
          <Image
            mix={ { block: 'SliderWidget', elem: 'FigureImage' } }
            ratio="custom"
            className="FigureImage"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPEy5bR_BF2QUM9R_Zb1dCA0dA-cc6fAkyw&usqp=CAU"
            isPlaceholder={ isPlaceholder }
          />
          <figcaption block="SliderWidget" elem="Figcaption" mix={ { block } }>
            <h1 style={ { color: 'white' } }>Click here to webSite Page</h1>
            <div>
              <Button className="btn" onClick={ this.handleClick }>
                <b>Click me!</b>
              </Button>
            </div>
          </figcaption>
        </figure>
        <Modal show={ showModal } onHide={ this.handleClose }>
          <Modal.Header closeButton>
            <Modal.Title>BattleGround Mobile India</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjI7bCocygZ9i6-axaQumf4K4bVZp1wO-wQQ&usqp=CAU"
            />
            <div>
              <h4>
                Why do players get banned by BGMI? BGMI has a code of conduct
                that must be followed by players....
              </h4>
              <h4>
                Using offensive words or discriminating against others. ...
              </h4>
              <h4> Exploiting vulnerabilities in the game. ...</h4>
              <h4>Use of Unauthorised Programs or Hardware Devices. ...</h4>
              <h4>Using inappropriate nicknames.</h4>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button href="https://www.battlegroundsmobileindia.com/">
              GO to webSite
            </Button>
            <Button variant="secondary" onClick={ this.handleClose }>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
          </>
      );
  }
}

export default SliderWidgetComponent;
