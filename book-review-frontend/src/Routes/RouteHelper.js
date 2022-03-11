import history from "../history";

export const openReviews = (book) => {
    history.push({
        pathname: '/Review',
        state: book
    });
    window.scrollTo(0, 0)
};

export const openHome = () => {
    history.push('/');
};