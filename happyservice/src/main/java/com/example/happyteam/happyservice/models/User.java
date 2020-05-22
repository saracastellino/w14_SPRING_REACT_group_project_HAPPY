package com.example.happyteam.happyservice.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @Column
    private String name;

    @Column
    private int age;

    @Column(name="dietary_preferences")
    private String dietaryPreferences;

    @Column(name="music_type")
    private String musicType;

    @Column(name="fitness_level")
    private int fitnessLevel;

    @OneToMany(mappedBy = "user")
    private List<DiaryEntry> diaryEntries;

    public User(String name, int age, String dietaryPreferences, String musicType, int fitnessLevel) {
        this.name = name;
        this.age = age;
        this.dietaryPreferences = dietaryPreferences;
        this.musicType = musicType;
        this.fitnessLevel = fitnessLevel;
        this.diaryEntries = new ArrayList<>();
    }

    public User() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getDietaryPreferences() {
        return dietaryPreferences;
    }

    public void setDietaryPreferences(String dietaryPreferences) {
        this.dietaryPreferences = dietaryPreferences;
    }

    public String getMusicType() {
        return musicType;
    }

    public void setMusicType(String musicType) {
        this.musicType = musicType;
    }

    public int getFitnessLevel() {
        return fitnessLevel;
    }

    public void setFitnessLevel(int fitnessLevel) {
        this.fitnessLevel = fitnessLevel;
    }

    public List<DiaryEntry> getDiaryEntries() {
        return diaryEntries;
    }

    public void setDiaryEntries(List<DiaryEntry> diaryEntries) {
        this.diaryEntries = diaryEntries;
    }
}
