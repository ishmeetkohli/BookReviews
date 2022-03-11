import React, {useEffect, useState} from "react";
import {getReviewByBookIdUserEmail, getReviewsBookIdByOthers} from "./ReviewService";
import ReviewTable from "./ReviewTable";
import ReviewBox from "./ReviewBox";
import BookCell from "../Book/BookCell";
import {useAuth0} from "@auth0/auth0-react";
import UserReview from "./UserReview";
import {Divider} from "@material-ui/core";

const Review = (props) => {
    const book = props.location.state || {};
    const [reviews, setReviews] = useState([])
    const [userReview, setUserReview] = useState([])
    const {user, isLoading} = useAuth0();
    const [reload, setReload] = useState(false)

    useEffect(() => {
        fetchData();
    }, [reload, isLoading])

    const fetchData = () => {
        console.log('fetching new Data')
        getReviewsBookIdByOthers(book.id, user ? user.email : "email")
            .then(reviews => {
                setReviews(reviews)
            })

        if (user) {
            getReviewByBookIdUserEmail(book.id, user.email)
                .then(review => {
                    setUserReview(review)
                })
        }
    }

    const reloadPage = () => {
        setReload(!reload)
    }

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div key={reviews}>
            <div className="book">
                <div className="book-cover">
                    <img className="book-image" src={book.bookCoverUrl} alt="BookCover"/>
                </div>
                <div className="book-details">
                    <BookCell book={book}/>
                </div>
            </div>
            <br/><br/>
            <Divider/>
            <br/>
            <div key={userReview.review}>
                {(userReview.review || userReview.rating) ?
                    <UserReview userReview={userReview} onSave={reloadPage} book={book}/> :
                    <ReviewBox onSave={reloadPage} book={book}/>}
            </div>
            <br/>
            <ReviewTable reviews={reviews}/>
        </div>
    )
}

export default Review;