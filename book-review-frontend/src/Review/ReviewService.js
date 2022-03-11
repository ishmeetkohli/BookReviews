export const getReviewsBookIdByOthers = (bookId, email) => {
    return fetch(`/api/reviews/book/${bookId}/other/${email}`).then(data => data.text()).then(data => {return data ? JSON.parse(data) : {}})
};

export const getReviewsByOthers = (email) => {
    return fetch(`/api/reviews/user/${email}`).then(data => data.text()).then(data => {return data ? JSON.parse(data) : {}})
};

export const getReviewByBookIdUserEmail = (bookId, email) => {
    return fetch(`/api/reviews/book/${bookId}/user/${email}`).then(data => data.text()).then(data => {return data ? JSON.parse(data) : {}})
};

export const saveReview = async (id, bookId, email, review, rating, callback) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : true },
        body: JSON.stringify({ id: id, review: review, rating: rating, userEmail: email, bookId: bookId})
    };

    await fetch(`/api/review`, requestOptions)
    callback()
};

export const deleteReview = async (review, callback) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : true },
        body: JSON.stringify(review)
    };

    await fetch(`/api/review`, requestOptions)
    callback()
};