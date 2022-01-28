import React from 'react'
import StarRating from './StarRating'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl, InputGroup} from 'react-bootstrap';

const Search=({text, handleText, rating, handleRating}) => {
    return (
        <div >

            <div className="search-container inp">
                <InputGroup className="mb-3">
                    <FormControl type="text" value={text} onChange={handleText}
                        placeholder="   🔍 Find your book    "
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text id="basic-addon2"><StarRating rating={rating} handleRating={handleRating} /></InputGroup.Text>
                </InputGroup>


            </div>
        </div>
    )

}

export default Search