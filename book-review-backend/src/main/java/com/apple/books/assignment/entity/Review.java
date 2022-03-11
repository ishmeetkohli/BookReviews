package com.apple.books.assignment.entity;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import org.hibernate.annotations.Type;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;
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
    @NotNull
    private UUID bookId;

    @Column
    @Type(type="text")
    private String review;

    @Column
    private double rating;

    @Column
    @NotNull
    private String userEmail;

    @Column
    @NotNull
    private LocalDateTime dateTime;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    @Transient
    private String bookName;
}