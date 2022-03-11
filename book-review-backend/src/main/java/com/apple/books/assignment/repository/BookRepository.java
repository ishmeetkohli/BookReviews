package com.apple.books.assignment.repository;

import com.apple.books.assignment.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.UUID;


@RepositoryRestResource()
public interface BookRepository extends JpaRepository<Book, UUID>, JpaSpecificationExecutor<Book>,
        QuerydslPredicateExecutor<Book> {

    Book findFirstById(UUID id);
}