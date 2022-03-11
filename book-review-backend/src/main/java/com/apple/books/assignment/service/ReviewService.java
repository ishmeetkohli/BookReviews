package com.apple.books.assignment.service;

import com.apple.books.assignment.entity.Review;
import com.apple.books.assignment.repository.ReviewRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Component
public class ReviewService {
    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    public List<Review> getReviewsByBookIdAndOthers(UUID bookId, String userEmail) {
        return reviewRepository.findAllByBookIdAndUserEmailIsNotOrderByDateTimeDesc(bookId, userEmail);
    }

    public List<Review> getReviewsByOthers(String userEmail) {
        return reviewRepository.findFirst10ByUserEmailIsNotOrderByDateTimeDesc(userEmail);
    }

    public Review getReviewByBookIdAndUserEmail(UUID bookId, String userEmail) {
        return reviewRepository.findFirstByBookIdAndUserEmail(bookId, userEmail);
    }

    public Review saveReview(Review review) {
        if (Objects.isNull(review.getId())) {
            review.setId(UUID.randomUUID());
        }
        review.setDateTime(LocalDateTime.now());
        return reviewRepository.save(review);
    }
}
