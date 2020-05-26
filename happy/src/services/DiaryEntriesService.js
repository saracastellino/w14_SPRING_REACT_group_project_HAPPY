const baseURL = 'http://localhost:8080/diary_entries/'

export default {
  getDiaryEntries() {
    return fetch(baseURL)
      .then(res => res.json())
  },
  addDiaryEntries(diaryEntry) {
      console.log(diaryEntry);
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(diaryEntry),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
  },
  updateDiaryEntry(diaryEntry) {
    // return fetch(baseURL + pirate._id, {
    return fetch(baseURL + diaryEntry.id, {
      method: 'PUT',
      body: JSON.stringify(diaryEntry),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
  },
  deleteDiaryEntry(id) {
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  }
}
