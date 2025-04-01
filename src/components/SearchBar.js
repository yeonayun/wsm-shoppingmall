import React, {useState} from 'react'

function SearchBar({onSearch}){
    const [searchTerm, setSeaarchTerm] = useState('')

    const handleChange = (e) => {
        setSeaarchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm)
    }

    return(
        <div>
            <from onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="상품 검색~~ 하세용~~"
                value={searchTerm}
                onChange={handleChange}
                />

            <button type="submit">
                <span>검색</span>
            </button>

            </from>
        </div>
    )
}

export default SearchBar;