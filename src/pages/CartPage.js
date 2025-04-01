import React from 'react';
import Cart from '../components/Cart';

//CartPage 컴포넌트 - 장바구니 페이지
function CartPage({ cartItems, updateQuantity, removeFromCart, clearCart}) {
    return (
        <div className="cart=page">
            <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
            />
        </div>
    );
}

export default CartPage;