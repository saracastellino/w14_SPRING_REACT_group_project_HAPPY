package com.example.happyteam.happyservice.controllers;

import com.example.happyteam.happyservice.models.DiaryEntry;
import com.example.happyteam.happyservice.models.User;
import com.example.happyteam.happyservice.repositories.DiaryEntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/diary_entries")
public class DiaryEntryController {

    @Autowired
    DiaryEntryRepository diaryEntryRepository;

    @GetMapping
    public ResponseEntity<List<DiaryEntry>> getAllDiaryEntries(
            @RequestParam(name = "date_time", required = false) String dateTime,
            @RequestParam(name = "mood", required = false) Integer mood,
            @RequestParam(name = "text", required = false) String text
    ) {
            return new ResponseEntity<List<DiaryEntry>>(diaryEntryRepository.findAll(), HttpStatus.OK);
        }

    @PostMapping
    public ResponseEntity<DiaryEntry> postDiaryEntry(@RequestBody DiaryEntry diaryEntry) {
        diaryEntryRepository.save(diaryEntry);
        return new ResponseEntity<>(diaryEntry, HttpStatus.CREATED);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<DiaryEntry> putDiaryEntry(@RequestBody DiaryEntry diaryEntry, @PathVariable Long id){
        if (diaryEntry.getId().longValue() != id){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        diaryEntryRepository.save(diaryEntry);
        return new ResponseEntity<>(diaryEntry, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<List<DiaryEntry>> deleteDiaryEntry(@PathVariable Long id){
        diaryEntryRepository.deleteById(id);
        return new ResponseEntity<>(diaryEntryRepository.findAll(), HttpStatus.OK);
    }
}




