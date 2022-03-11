import React, {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {getReviewsByOthers} from "./ReviewService";
import ReviewTable from "./ReviewTable";
import Divider from "@material-ui/core/Divider";

const ReviewFeed = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();
    const [reviews, setReviews] = useState([])

    const getReviews = () => {
        if(!isLoading && user) {
            getReviewsByOthers(user.email)
                .then(result => {
                    setReviews(result)
                })
        } else {
            setReviews({});
        }
    };

    useEffect(() => {
        getReviews()

        const interval = setInterval(() => {
            getReviews()
        }, 5000)

        return () => clearInterval(interval)
    }, [isLoading])


    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div className="review-feed">
                <h1>Latest reviews</h1>
                <Divider/>
                <ReviewTable reviews={reviews} feed={true}/>
            </div>
        )
    )
};

export default ReviewFeed;