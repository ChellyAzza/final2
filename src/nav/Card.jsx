import React from 'react'
import {Link} from 'react-router-dom'
import StarRating from './StarRating'

const Card=({book}) => {

    return (
        <div className="book-carde">

            <img src={book.image} alt="" />
            <h2> {book.name}</h2>
            <h3> {book.Author}</h3>
            <StarRating rating={book.rating} />
            <p>{book.date}</p>
            <Link to={`/book/${book.id}`}>
                <button className="btn-card">details </button>
            </Link>


        </div>
    )
}

export default Card