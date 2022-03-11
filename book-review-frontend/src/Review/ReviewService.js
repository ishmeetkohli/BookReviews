export const getReviewsBookIdByOthers = (bookId, email) => {
    return fetch(`/api/reviews/book/${bookId}/other/${email}`).then(data => data.json())
};

export const getReviewsByOthers = (email) => {
    return fetch(`/api/reviews/user/${email}`).then(data => data.json())
};

export const getReviewByBookIdUserEmail = (bookId, email) => {
    return fetch(`/api/reviews/book/${bookId}/user/${email}`).then(data => data.json())
};

export const saveReview = (id, bookId, email, review, rating) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: id, review: review, rating: rating, userEmail: email, bookId: bookId})
    };

    fetch(`/api/review`, requestOptions)
};