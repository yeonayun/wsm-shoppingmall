import React from 'react'

function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer>
            <div>
                <div>
                    <h3>리액트 쇼핑몰</h3>
                    <p>React로 만든 예제 쇼핑몰입니다.</p>
                </div>

                <div>
                    <h3>카테고리</h3>
                    <ul>
                        <li>의류</li>
                        <li>전자기기</li>
                        <li>액세서리</li>
                    </ul>
                </div>
                
                <div>
                    <h3>고객센터</h3>
                    <p>이메일: w2306@e-mirim.hs.kr</p>
                    <p>전화: 010-4694-3920</p>
                </div>
            </div>

            <div>
                {/* &copy 저작권? 문자?
                currentYear 년도 가져오기 */}
                <p>&copy; {currentYear} 리액트 쇼핑몰. All Rights Reversed.</p> 
            </div>
        </footer>
    )
} export default Footer