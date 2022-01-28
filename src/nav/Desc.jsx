import React, {useEffect, useState} from 'react'
import StarRating from './StarRating'



const Desc=(props) => {
    const [book, setBook]=useState("");
    // to change the Like
    const handelLike=() => {
        setBook({...book, like: !book.like})
    }
    console.log(book);
    useEffect(() => {
        let bk=props.books.find(el => el.id==props.match.params.id)
        setBook(bk)
    }, [props.match.params.id]);



    // console.log("book", bk)
    return (<div className="details">
        <img src={book.image} alt="" />
        <div className='ktiba'>
            <h1> {book.name}</h1>
            <h2> {book.Author}</h2>
            <StarRating rating={book.rating} />
            <h3>{book.date}</h3>
            <p> {book.desc}</p>
            <h3>{book.price}</h3>
            <button onClick={handelLike} style={{color: book.like? "red":"gray", fontSize: "24px"}}>♥</button>
        </div>



    </div>
    )
}


export default Desc