import React from 'react'
import BookCell from "./BookCell";
import BookRating from "./BookRating";
import {Divider} from "@material-ui/core";

const BookTable = (props) => (
    props.books.length > 0 ? (
        props.books.map((book) => (
            <div key={book.id}>
                <div className="book">
                    <div className="book-cover">
                        <img className="book-image" src={book.bookCoverUrl} alt="BookCover"/>
                    </div>
                    <div className="book-details">
                        <BookCell book={book}/>
                        <BookRating book={book}/>
                    </div>
                </div>
                <Divider/>
            </div>
        ))
    ) : (
        <h2>No books</h2>
    )
)

export default BookTable