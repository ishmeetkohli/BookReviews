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
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID id;

    @Column
    @NotNull
    private String authorName;

    @Column
    @NotNull
    private String bookTitle;

    @Column
    @NotNull
    private String bookUrl;

    @Column
    @NotNull
    private String bookCoverUrl;

    @Column
    @NotNull
    private String bookGenres;

    @Column
    private String bookEditorialNotes;

    private double bookAverageRating;

    private long bookRatings;
}