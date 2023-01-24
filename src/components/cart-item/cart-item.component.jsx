import { CartItemContainer, CartItemImage, ItemDetails, ItemName, ItemPrice } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName>{name}</ItemName>
                <ItemPrice>{quantity} x ${price}</ItemPrice>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;