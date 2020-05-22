package com.example.happyteam.happyservice.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name="diary")

public class DiaryEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="date_time")
    private String dateTime;

    @Column(name="mood")
    private int mood;

    @Column(name="text")
    private String text;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    public DiaryEntry(String dateTime, int mood, String text) {
        this.dateTime = dateTime;
        this.mood = mood;
        this.text = text;
    }

    public DiaryEntry() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public int getMood() {
        return mood;
    }

    public void setMood(int mood) {
        this.mood = mood;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
