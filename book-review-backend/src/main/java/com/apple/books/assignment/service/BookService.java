package com.apple.books.assignment.service;

import java.util.List;

import com.apple.books.assignment.entity.Book;
import com.apple.books.assignment.entity.Review;
import com.apple.books.assignment.repository.BookRepository;
import com.apple.books.assignment.repository.ReviewRepository;
import org.springframework.stereotype.Component;

@Component
public class BookService {
    private BookRepository bookRepository;
    private ReviewRepository reviewRepository;

    public BookService(BookRepository bookRepository, ReviewRepository reviewRepository) {
        this.bookRepository = bookRepository;
        this.reviewRepository = reviewRepository;
    }

    public List<Book> getBooks() {
        List<Book> books = bookRepository.findAll();
        books.forEach(book -> {
            List<Review> reviews = reviewRepository.findAllByBookIdOrderByDateTimeDesc(book.getId());
            double totalRating = reviews.stream()
                    .map(Review::getRating)
                    .reduce(0.0, Double::sum);

            book.setBookRatings(reviews.size());

            if(reviews.size() > 0)
                book.setBookAverageRating(totalRating / reviews.size());
            else
                book.setBookAverageRating(0);
        });
        return bookRepository.findAll();
    }
}
