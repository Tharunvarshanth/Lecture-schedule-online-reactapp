package com.uni.log.schedule.repo;


import com.uni.log.schedule.model.Lecture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LectureRepositary extends JpaRepository<Lecture, String> {

    @Query("from Lecture  where email=:lemail and password=:lpassword")
    Lecture find(@Param("lemail") String email,@Param("lpassword") String password);

}
