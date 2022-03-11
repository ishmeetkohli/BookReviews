import React, {useEffect, useState} from 'react'
import {useAuth0} from "@auth0/auth0-react";
import {Rating} from "react-simple-star-rating";
import moment from "moment";
import {Divider} from "@material-ui/core";
import ReviewBox from "./ReviewBox";
import {deleteReview} from "./ReviewService";

const UserReview = (props) => {

    const {isLoading} = useAuth0();
    const [renderHtml, setRenderHtml] = useState([])
    const {isAuthenticated} = useAuth0();

    function handleEdit() {
        setRenderHtml(
            <ReviewBox onSave={props.reloadPage} book={props.book} review={props.userReview}/>
        )
    }

    function handleDelete() {
        deleteReview(props.userReview, props.reloadPage)
    }

    useEffect(() => {
        setRenderHtml(
            <div>
                <h2>Your Review :</h2>
                <h3>{props.userReview.review}</h3><br/><br/>
                <Rating readonly={true} initialValue={props.userReview.rating} showTooltip={true} allowHalfIcon={true}/>
                <br/><br/>
                {moment(props.userReview.dateTime).format('MMMM d, YYYY')}
                <br/><br/>
                <button onClick={handleEdit}>Edit Review</button>
                <button onClick={handleDelete}>Delete Review</button>
                <br/><br/>
                <Divider/>
            </div>
        )
    }, [props.userReview])

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if(!isAuthenticated) {
        return null;
    }

    return renderHtml
}

export default UserReview