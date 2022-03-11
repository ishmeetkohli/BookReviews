import history from "../history";

export const openReviews = (book) => {
    history.push({
        pathname: '/Review',
        state: book
    });
};

export const openHome = () => {
    history.push('/');
};