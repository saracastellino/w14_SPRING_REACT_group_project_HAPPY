package com.example.happyteam.happyservice.controllers;

import com.example.happyteam.happyservice.repositories.DiaryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DiaryEntryController {

    @Autowired
    DiaryEntryRepository diaryEntryRepository;

    @GetMapping
}
