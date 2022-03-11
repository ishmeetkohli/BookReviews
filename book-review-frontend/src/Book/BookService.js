export const getBooks = () => {
    return fetch('/api/books').then(data => data.text()).then(data => {return data ? JSON.parse(data) : {}})
};