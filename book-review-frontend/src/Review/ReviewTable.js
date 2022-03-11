import React from 'react'
import { Rating } from 'react-simple-star-rating'
import Divider from "@material-ui/core/Divider";
import moment from "moment";

const ReviewTable = (props) => (
    props.reviews.length > 0 ? (
        props.reviews.map((review) => (
            <div key={review.id} className="review">
                <br/>
                <h3>{review.review}</h3><br/><br/>
                <Rating initialValue={review.rating} readonly={true}/>
                <br/><br/>
                {review.userEmail}, {moment(review.dateTime).format('MMMM d, YYYY')}
                <br/><br/>

                <div className="divider">
                    <Divider/>
                </div>

            </div>
        ))
    ) : (
        <h2>No Other Reviews</h2>
    )
)

export default ReviewTable