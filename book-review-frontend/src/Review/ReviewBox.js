import React from 'react'
import {saveReview} from "./ReviewService";
import {Rating} from 'react-simple-star-rating'
import {useAuth0} from "@auth0/auth0-react";

const ReviewBox = (props) => {

    const initialFormData = Object.freeze({
        review: props.review ? props.review.review : "",
        rating: props.review ? props.review.rating * 20 : ""
    });

    // props.review ? alert(props.review.rating): alert('nothing');

    const [formData, updateFormData] = React.useState(initialFormData);
    const {user, isAuthenticated} = useAuth0();

    const handleRating = (rate) => {
        alert(rate)
        updateFormData({
            ...formData,
            rating: rate
        });
    };


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            review: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(formData.rating / parseFloat(20))
        saveReview(props.review ? props.review.id : null, props.book.id, user.email, formData.review, formData.rating / parseFloat(20), props.onSave)
    };

    return isAuthenticated && (
        <form>
            <Rating ratingValue={initialFormData.rating}
                    onClick={handleRating}
                    allowHalfIcon={true}
                    showTooltip={true}
                    initialValue={props.review ? props.review.rating : 0}/>
            <br/>
            <div >
                <textarea className="review-area"
                          placeholder="Tell us more"
                          rows="3"
                          name="review" onChange={handleChange}
                          defaultValue={props.review ? props.review.review : ''}/>
            </div>

            <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
    )
}

export default ReviewBox