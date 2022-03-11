package com.apple.books.assignment.controller;

import com.apple.books.assignment.Constants;
import com.apple.books.assignment.entity.Book;
import com.apple.books.assignment.service.BookService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/")
public class BookController {

    @Autowired
    BookService bookService;

    @GetMapping(path = Constants.LIST_BOOKS)
    public ResponseEntity<?> listBooks() {
        log.info("BookController:  list books");
        List<Book> resource = bookService.getBooks();
        return ResponseEntity.ok(resource);
    }
}
