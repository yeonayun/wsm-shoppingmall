import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart({cartItems, updateQuantity, removeFromCart, clearCart}) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    }

    const handlerCheckout = () => {
        alert('결제로 넘어갑니다.(구현되지 않음)')
    }

    return(
        <div>
            <h2>장바구니</h2>

            {cartItems.length===0}?(
                <div>
                    <p>장바구니가 비어있습니다!</p>
                    <Link to="/">쇼핑계속하기!</Link>
                </div>
            ) : (
                <>
                <div>
                    <span>상품</span>
                    <span>수량</span>
                    <span>합계</span>
                    <span></span>
                </div>
                </>
            )
        </div>
    )
} export default Cart