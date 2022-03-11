import React, {useEffect, useState} from "react";
import {getBooks} from "./BookService";
import BookTable from "./BookTable";


function Book() {
    const [books, setBooks] = useState([])

    useEffect(() => {
        let mounted = true;
        getBooks()
            .then(books => {
                if (mounted) {
                    setBooks(books)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <BookTable books={books}/>
    );
}

export default Book;