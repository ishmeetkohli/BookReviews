package com.apple.books.assignment;

import org.springframework.stereotype.Component;

@Component
public class Constants {
    public static final String LIST_BOOKS = "/books";
    public static final String LIST_REVIEWS_BOOK_ID_OTHER_USER_EMAIL = "/reviews/book/{bookId}/other/{email}";
    public static final String LIST_REVIEWS_OTHER_USER_EMAIL = "/reviews/user/{email}";
    public static final String LIST_REVIEW_BOOK_ID_USER_EMAIL = "/reviews/book/{bookId}/user/{email}";
    public static final String ADD_REVIEW = "/review";
}
