import React from 'react'
import Card from './Card'


const Shop=(props) => {
    console.log(props)
    return (
        <div className="book-liste">
            {props.books.map(el => <Card book={el} />)}

        </div>
    )
}

export default Shop