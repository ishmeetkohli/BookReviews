package com.apple.books.assignment.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import lombok.Data;
import org.hibernate.annotations.Type;

import java.util.UUID;

@Entity
@Data
public class Book {

    @Id
    @Column
    @Type(type="uuid-char")
    private UUID id;

    @Column
    @NotNull(message="{NotNull.Book.authorName}")
    private String authorName;

    @Column
    @NotNull(message="{NotNull.Book.bookTitle}")
    private String bookTitle;

    @Column
    @NotNull(message="{NotNull.Book.bookUrl}")
    private String bookUrl;

    @Column
    @NotNull(message="{NotNull.Book.bookCoverUrl}")
    private String bookCoverUrl;

    @Column
    @NotNull(message="{NotNull.Book.bookGenres}")
    private String bookGenres;

    @Column
    @NotNull(message="{NotNull.Book.bookEditorialNotes}")
    private String bookEditorialNotes;

    private double bookAverageRating;

    private long bookRatings;
}