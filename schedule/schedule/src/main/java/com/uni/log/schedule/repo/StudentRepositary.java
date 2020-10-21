package com.uni.log.schedule.repo;

import com.uni.log.schedule.table.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface StudentRepositary extends JpaRepository<Student,String> {

    @Query("from Student where email=:studemail and password=:pass ")
    Student find(@Param("studemail") String email,@Param("pass") String password );

}
