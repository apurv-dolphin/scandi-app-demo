/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@scandipwa/scandipwa/src/component/Link';
import Logo from '@scandipwa/scandipwa/src/component/Logo';
import { Button } from 'react-bootstrap';

import {
    CartOverlay,
    Header as SourceHeader,
    MyAccountOverlay
} from 'SourceComponent/Header/Header.component';

export { CartOverlay, MyAccountOverlay };

/** @namespace myFirstApp/Component/Header/Component */
export class HeaderComponent extends SourceHeader {
    renderAccountButton() {
        const { onMyAccountButtonClick, device } = this.props;

        if (device.isMobile) {
            return null;
        }

        return (
      <div style={ { display: 'flex' } }>
       <Link to="custom-page">
          <Button style={ { marginRight: '13px' } }>
            Custom Page
          </Button>
       </Link>
        <button
          block="Header"
          elem="MyAccountWrapper"
          className="MyAccountWrapper"
          tabIndex="0"
          onClick={ onMyAccountButtonClick }
          aria-label="Open my account"
          id="myAccount"
        >
          Sign in
        </button>
      </div>
        );
    }

    renderCompareCount() {
        const { compareTotals, Loading } = this.props;

        if (!compareTotals || Loading === true) {
            return null;
        }

        return (
      <span aria-label="Items in cart" block="Header" elem="CompareCount">
        { compareTotals }
      </span>
        );
    }

    renderComparePageButton() {
        const { device: { isMobile } = {}, isCheckout } = this.props;

        if (isCheckout || isMobile) {
            return null;
        }

        return (
      <div
        block="Header"
        elem="CompareButtonWrapper"
        className="CompareButtonWrapper"
        key="compare"
      >
        <Link
          to="compare"
          key="compare"
          block="Header"
          elem="Button"
          mods={ { type: 'compare' } }
          aria-label={ __('Compare Page') }
        >
          CompareProducts
          { this.renderCompareCount() }
        </Link>
      </div>
        );
    }

    renderLogoImage() {
        const { logo_alt } = this.props;
        // if no src defined from the backend, pass null in order to display placeholder
        // and prevent unnecessary load of corrupted resource
        // const logoSrc = header_logo_src ? media(header_logo_src, LOGO_MEDIA) : null;

        // CSS.setVariable(this.logoRef, 'header-logo-height', `${logo_height}px`);
        // CSS.setVariable(this.logoRef, 'header-logo-width', `${logo_width}px`);

        return (
      <Logo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5C220sjAtQScUt_IEppey_CL0AYLUFzcsAw&usqp=CAU"
        className="logo_image"
        alt={ logo_alt }
        title={ logo_alt }
      />
        );
    }
}

export default HeaderComponent;
