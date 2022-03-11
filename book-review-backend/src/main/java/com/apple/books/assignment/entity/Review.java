package com.apple.books.assignment.entity;

import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Data
public class Review {
    @Id
    @Column
    @Type(type="org.hibernate.type.PostgresUUIDType")
    private UUID id;

    @Column
    @Type(type="org.hibernate.type.PostgresUUIDType")
    @NotNull(message="{NotNull.Review.bookId}")
    private UUID bookId;

    @Column
    @Type(type="text")
    @NotNull(message="{NotNull.Review.review}")
    private String review;

    @Column
    @NotNull(message="{NotNull.Review.rating}")
    private double rating;

    @Column
    @NotNull(message="{NotNull.Review.userEmail}")
    private String userEmail;

    @Column
    @NotNull(message="{NotNull.Review.dateTime}")
    private LocalDateTime dateTime;
}