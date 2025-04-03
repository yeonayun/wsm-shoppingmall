import { Link } from 'react-router-dom';

//개별 상품을 표시하는 컴포넌트

function ProductItem({product, addToCart}) {
    const {id, name, price, imageUrl, category}=product;

    const handleAddToCart=()=>{
        addToCart(product);
    }; //현재상품(product)을 장바구니에 추가

    const formatPrice = (price)=>{
        return price.toString().replace(/\B(?=(\d{3})+(?!d))/g, ",")+"원";
        //25000 -> 25,000원 (3자리마다 쉼표를 삽입라고 마지막에 원을 붙인다)
    };

    return(
        <div>
            <div className="product-image">
                <Link to={`/product/${id}`}>
                    <img src={imageUrl} alt={name}/>
                </Link>
            </div>
        <div className="product-info">
            <span>{category}</span>
            <h3>
                <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <p>{formatPrice(price)}</p>
        </div>
        <div className="product-actions">
            <button
            onClick={handleAddToCart}>장바구니 추가</button>
            </div>
        </div>
    )
}

export default ProductItem;