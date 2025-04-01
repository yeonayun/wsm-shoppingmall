import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"

function ProductDetailPage({ products, addToCart }){
  const {id} = useParams()
  const [quantity, setQuantity] = useState(1) // 1 수량 개수

  const product = products.find(p => p.id===parseInt(id)) //=> product 배열에서 id랑 일치하는 거 착기 == id로 상품찾기
  
  if(!product){
    return (
      <div>
        <h2>상품을 찾을 수 없습니다.</h2>
        <Link to='/'>홈으로 돌아가기</Link>
      </div>
    )
  }


  const handleIncrease = () => {
    setQuantity(quantity+1)
  }

  const handleDecrease = () => {
    if(quantity > 1){
      setQuantity(quantity-1)
    }
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "원"
  }

  return(
    <div>
      <div>
        <div>
          <img src={product.imageUrl} alt={product.name}/>
        </div>

        <div>
          <span>{product.category}</span>
          <h1>{product.name}</h1>
          <p>{formatPrice(product.price)}</p>
        </div>

        <div>
          <h3>상품 설명</h3>
          <p>{product.description}</p>
        </div>

        <div>
          <div>
            <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrease}>+</button>
          </div>

          <button onClick={handleAddToCart}>
            장바구니에 추가!!
          </button>
        </div>
        
        <div>
          <Link to='/'>← 계속 쇼핑하기</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage