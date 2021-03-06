import React from "react";
import {Rating} from "react-simple-star-rating";
import {openReviews} from "../Routes/RouteHelper";

const BookRating = (props) => (
    <div>
        <Rating initialValue={props.book.bookAverageRating} readonly={true} showTooltip={true} allowHalfIcon={true}/> <h3>({props.book.bookRatings})</h3>
        <button onClick={() => openReviews(props.book)}>View All</button>
        <br/><br/><br/>
    </div>
)

export default BookRating