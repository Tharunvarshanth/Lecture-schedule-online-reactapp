package com.uni.log.schedule.controller;

import com.uni.log.schedule.ResourceNotFoundException;

import com.uni.log.schedule.repo.CourseRepositary;
import com.uni.log.schedule.repo.LectureRepositary;
import com.uni.log.schedule.repo.StudentRepositary;

import com.uni.log.schedule.table.Course;
import com.uni.log.schedule.table.Lecture;
import com.uni.log.schedule.table.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.HashMap;
@CrossOrigin
@RestController
@RequestMapping("/")
public class
ControllerRepositary {

    @Autowired
    private LectureRepositary lectureRepositary;

    @Autowired
    private CourseRepositary courseRepositary;

    @Autowired
    private StudentRepositary studentRepositary;

    @PostMapping("signin")
    public ResponseEntity < Lecture > checkloginlec(@RequestBody Lecture lecture){

             System.out.println("dj");
        Lecture lecture1= lectureRepositary.find(lecture.getEmail(),lecture.getPassword());
        // orElseThrow(() - > new ResourceNotFoundException("not found"));


        if(lecture1==null){
            System.out.println("k");
            return null;
        }
        System.out.println(lecture1.getEmail());
        return ResponseEntity.ok(lecture1);


    }


    @GetMapping("getdepartment")
    public List<Course> getdepartment(){


        return  courseRepositary.findAll();

    }

    @PostMapping("studentlogin")
    public ResponseEntity<Student> checkloginstu(@RequestBody Student stu){

        System.out.println(stu.getEmail());
        Student s = studentRepositary.find(stu.getEmail(),stu.getPassword());
        if(s==null){
            System.out.println("null");
            return null;
        }
        return ResponseEntity.ok(s);
    }
}
