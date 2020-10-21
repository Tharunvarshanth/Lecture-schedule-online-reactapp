package com.uni.log.schedule.repo;

import com.uni.log.schedule.table.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepositary extends JpaRepository<Course,String> {
}
