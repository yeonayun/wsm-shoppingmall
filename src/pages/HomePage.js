import React from 'react'
import ProductList from '../components/ProductList'

function HomePage({products, addToCart, searchTerm}) {
    return(
        <div>
            <div>
                <div>
                    <h1>리액트로 만든 쇼핑몰에 오신 것을 환영합니다.</h1>
                    <p>다양한 상품을 둘러보세요.</p>
                </div>
            </div>

            <div>
                <h2>
                {/* `'${searchTerm}'검색 결과` 템플릿 리터럴 */}
                    {searchTerm? `'${searchTerm}'검색 결과` : '모든 상품'}
                </h2>
                <ProductList
                    products={products}
                    addToCart={addToCart}
                    searchTerm={searchTerm}
                />
            </div>
        </div>
    )
} export default HomePage