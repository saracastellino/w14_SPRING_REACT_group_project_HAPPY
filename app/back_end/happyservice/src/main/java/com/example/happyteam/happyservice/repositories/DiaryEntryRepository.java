package com.example.happyteam.happyservice.repositories;

import com.example.happyteam.happyservice.models.DiaryEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DiaryEntryRepository extends JpaRepository<DiaryEntry, Long> {

}
