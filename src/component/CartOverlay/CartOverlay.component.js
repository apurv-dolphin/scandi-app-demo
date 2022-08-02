/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { CartOverlay as SourceCartOverlay } from 'SourceComponent/CartOverlay/CartOverlay.component';

/** @namespace myFirstApp/Component/CartOverlay/Component */
export class CartOverlayComponent extends SourceCartOverlay {
    // TODO implement logic
    renderCartItems() {
    // const { count } = this.state;
        const localStorageData = JSON.parse(localStorage.getItem('productData'));
        return (
      <div className="CartOverlay-ContentWrapper">
        <div aria-label="List of items in cart" className="CartOverlay-Items">
          <div className="CartItem CartItem_isCartOverlay">
            <div className="CartItem-Wrapper CartItem-Wrapper_isMobileLayout">
              <div className="Image Image_ratio_custom Image_imageStatus_image_loaded Image_hasSrc CartItem-Picture CartItem-Picture_isMobileLayout  Image-WidthFull Image-HeightFull">
                <img
                  src={ localStorageData[0].image }
                  alt="Product Dress Trousers-black-Small size thumbnail."
                  loading="lazy"
                  className="Image-Image"
                />
              </div>
              <img
                alt="Dress Trousers-black-Small size"
                src="https://demo100-ors-1588667385-csa-hcx.scandipwa.cloud/media/catalog/product/cache/0f96fc02a60656153382bd7c5deaaf4c/b/4/b4_21.jpg"
                style={ { display: 'none' } }
              />
              <div className="CartItem-CartItemRows">
                <div className="CartItem-ProductInfo CartItem-ProductInfo_isMobileLayout">
                  <div className="CartItem-Title CartItem-Title_isMobileLayout">
                    <p className="CartItem-Heading">
                      { localStorageData[0].name }
                    </p>
                    <div className="CartItem-Options" />
                  </div>
                  <button
                    id="RemoveItem"
                    name="RemoveItem"
                    aria-label="Remove item from cart"
                    className="CartItem-Delete CartItem-Delete_isMobileLayout"
                  >
                    <svg
                      width={ 24 }
                      height={ 24 }
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="CloseIcon"
                    >
                      <path d="M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z" />
                    </svg>
                    <span className="CartItem-DeleteButtonText CartItem-DeleteButtonText_isMobileLayout">
                      Delete
                    </span>
                  </button>
                </div>
                <div className="CartItem-ProductActions CartItem-ProductActions_isMobileLayout">
                  <div
                    role="button"
                    tabIndex={ -1 }
                    className="CartItem-QuantityWrapper CartItem-QuantityWrapper_isCartOverlay"
                  >
                    <div className="Field-Wrapper Field-Wrapper_type_numberWithControls">
                      <div className="Field Field_type_numberWithControls CartItem-Qty">
                        <input
                          id="31331004-black-Small size_item_qty"
                          name="31331004-black-Small size_item_qty"
                          min={ 1 }
                          max={ 10000 }
                          step={ 1 }
                          type="number"
                          readOnly=""
                          aria-label="Value"
                          defaultValue={ 1 }
                        />
                        <button aria-label="Add" type="button">
                          <svg
                            width={ 24 }
                            height={ 24 }
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="AddIcon AddIcon_isPrimary"
                          >
                            <path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" />
                          </svg>
                        </button>
                        <button disabled="" aria-label="Subtract" type="button">
                          <svg
                            width={ 24 }
                            height={ 24 }
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="MinusIcon MinusIcon_isPrimary"
                          >
                            <path d="M5 11H19V13H5V11Z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                 <p
                   aria-label="Product Price"
                   className="ProductPrice CartItem-Price CartItem-Price_isCartOverlay CartItem-Price_isMobileLayout"
                 >
                    <span aria-label="Current product price">
                      <data value={ localStorageData[0].price }>
                        { localStorageData[0].price }
                      </data>
                    </span>
                 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        { /* <div className="CartOverlay-Additional">
          <dl className="CartOverlay-Total">
            <dt>Order total:</dt>
            <dd>{ localStorageData[0].price }</dd>
          </dl>
          <div className="CartOverlay-Actions">
            <a
              className=" CartOverlay-CartButton Button Button_isHollow"
              href="/cart"
            >
              View cart
            </a>
            <button className="CartOverlay-CheckoutButton Button">
              <svg
                width={ 24 }
                height={ 24 }
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="LockIcon"
              >
                <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM18 12L18.002 20H6V12H18ZM9 10V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9Z" />
              </svg>
              Secure checkout
            </button>
          </div>
        </div> */ }
      </div>
        );
    }
}

export default CartOverlayComponent;
