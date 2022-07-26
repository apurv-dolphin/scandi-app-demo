import { Button, Image, Modal } from 'react-bootstrap';

import {
    Image as SourceImage
} from 'SourceComponent/Image/Image.component';

/** @namespace myFirstApp/Component/Image/Component */
export class ImageComponent extends SourceImage {
    // TODO implement logic
    handleClick = () => {
        this.setState({ showInfo: true });
    };

    handleClose = () => {
        this.setState({ showInfo: false });
    };

    renderPlainImage() {
        const { style, className } = this.props;
        const { showInfo } = this.state;

        return (
            <>
          <img
            block={ className }
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsXh_I9ApBnOWEsnIN8XySGYiM7qgYk6zRQ&usqp=CAU"
            alt="coc"
            style={ style }
            title="Clash Of Clan"
            loading="lazy"
          />
          <Button onClick={ this.handleClick }>More details</Button>
          <Modal show={ showInfo } onHide={ this.handleClose }>
            <Modal.Header closeButton>
              <Modal.Title>Clash Of Clan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY5gocBA372LjhamucqanO3BMicNxEFIRW8g&usqp=CAU"
              />
              <div>
                <h4>
                 COC is why more downlaod game then clash Royal.
                </h4>
                <h4>
                 <p>
                    The game is set in a fantasy-themed persistent world where the
                    player is a chief of a village. Clash of Clans tasks players
                    to build their own village using the resources gained from
                    attacking other
                    { "player's " }
                    villages; earning rewards, buying them with medals or by
                    producing them at their own village.
                 </p>
                </h4>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans&hl=en_IN&gl=US">
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

export default ImageComponent;
