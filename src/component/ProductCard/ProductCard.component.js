/* eslint-disable no-magic-numbers */
import { Image } from 'react-bootstrap';

import {
    ProductCard as SourceProductCard
} from 'SourceComponent/ProductCard/ProductCard.component';

/** @namespace myFirstApp/Component/ProductCard/Component */
export class ProductCardComponent extends SourceProductCard {
    // TODO implement logic
    renderPicture() {
        return (
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPGdfBg6zkgkjixep8zMjb9YNR-vHtHLKDg&usqp=CAU"
              alt="prince"
            />
        );
    }

    renderPrice() {
        const {
            getActiveProduct
            // product: {
            //     type_id: baseType
            // } = {}
        } = this.props;

        const {
            price_range: priceRange
            // type_id: typeId
        } = getActiveProduct();

        if (!priceRange) {
            return this.renderTextPlaceholder();
        }

        // If product is not a variant.
        // const notConfigured = baseType !== PRODUCT_TYPE.configurable || typeId === baseType;

        const price = super.renderPrice();
        const actualPrice = price?.props?.children?.props?.price?.price?.finalPrice?.value || 0;
        const finalPrice = Math.floor(
            actualPrice - (actualPrice * 20) / 100
        ).toFixed(2);

        return (
            <>
       <div>
          original price :-
       <div
         style={ {
             textDecoration: 'line-through',
             fontWeight: 'normal'
         } }
       >
          <h1>
            US$
            { actualPrice }
          </h1>
       </div>
       </div>
        <div>
          Buy price :-
          <h1>
            US$
            { finalPrice }
          </h1>
        </div>
            </>
        );
    }
}

export default ProductCardComponent;
