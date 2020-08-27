"use strict"

const courseReducer = (value) => {
  const course = {
    courseId: value.course_id.S,
    artistId: value.artist_id.S,
    sequence: value.sequence.N,
    title: value.title.S,
    description: value.description.S,
    level: value.level.S,
    courseNumber: value.course_number.N,
    courseVideo: value.course_video.S,
    photography: value.photography.S,
    startAt: value.start_at.N,
    endAt: value.end_at.N,
    relatedCourses: value?.related_courses?.L.map(course => course.S),
    countOfSessions: value?.related_courses?.L.length + 1,
  }

  return (course)
}

export default courseReducer
