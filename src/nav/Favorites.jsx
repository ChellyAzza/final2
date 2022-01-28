import React from 'react';
import Card from './Card';


const Favorites=({book}) => {
    // console.log(book);

    return (
        <div>
            {
                book.map(el => <Card book={el} />)
            }
        </div>

    );
};

export default Favorites;
