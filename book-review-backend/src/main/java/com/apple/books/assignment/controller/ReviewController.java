package com.apple.books.assignment.controller;

import com.apple.books.assignment.Constants;
import com.apple.books.assignment.entity.Review;
import com.apple.books.assignment.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@Slf4j
@RestController
@RequestMapping("/api/")
public class ReviewController {

    @Autowired
    ReviewService reviewService;

    @GetMapping(path = Constants.LIST_REVIEWS_BOOK_ID_OTHER_USER_EMAIL)
    public ResponseEntity<?> listReviewsByBookId(@PathVariable("bookId") UUID bookId, @PathVariable("email") String userEmail) {
        log.info("ReviewController:  list review by bookID: " + bookId + " and not userEmail: " + userEmail);
        List<Review> resource = reviewService.getReviewsByBookIdAndOthers(bookId, userEmail);
        return ResponseEntity.ok(resource);
    }

    @GetMapping(path = Constants.LIST_REVIEWS_OTHER_USER_EMAIL)
    public ResponseEntity<?> listReviewsByOthers(@PathVariable("email") String userEmail) {
        log.info("ReviewController:  list reviews by others " + userEmail);
        List<Review> resource = reviewService.getReviewsByOthers(userEmail);
        return ResponseEntity.ok(resource);
    }

    @GetMapping(path = Constants.LIST_REVIEW_BOOK_ID_USER_EMAIL)
    public ResponseEntity<?> listReviewsByUserEmail(@PathVariable("bookId") UUID bookId, @PathVariable("email") String userEmail) {
        log.info("ReviewController:  list review by bookID: " + bookId + " and userEmail: " + userEmail);
        Review resource = reviewService.getReviewByBookIdAndUserEmail(bookId, userEmail);
        return ResponseEntity.ok(resource);
    }


    @PostMapping(path = Constants.ADD_REVIEW)
    public ResponseEntity<?> saveReview(@RequestBody Review review) {
        log.info("ReviewController:  save review");
        Review resource = reviewService.saveReview(review);
        return ResponseEntity.ok(resource);
    }
}
