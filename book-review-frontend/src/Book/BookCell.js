import React from "react";

const BookCell = (props) => (
    <div>
        <a href={props.book.bookUrl}>
            <h1>{props.book.bookTitle}</h1>
        </a>
        <h2>{props.book.authorName}</h2>
        <h3>{props.book.bookGenres}</h3>
        <br/>
        <p>{props.book.bookEditorialNotes}</p>
    </div>
)

export default BookCell