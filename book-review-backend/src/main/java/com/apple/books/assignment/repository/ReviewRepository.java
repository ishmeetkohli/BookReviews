package com.apple.books.assignment.repository;

import com.apple.books.assignment.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.UUID;


@RepositoryRestResource()
public interface ReviewRepository extends JpaRepository<Review, Integer>, JpaSpecificationExecutor<Review>,
        QuerydslPredicateExecutor<Review> {

    List<Review> findAllByBookIdOrderByDateTimeDesc(UUID bookId);

    List<Review> findAllByBookIdAndUserEmailIsNotOrderByDateTimeDesc(UUID bookId, String userEmail);

    List<Review> findFirst10ByUserEmailIsNotOrderByDateTimeDesc(String userEmail);

    Review findFirstByBookIdAndUserEmail(UUID bookId, String userEmail);
}