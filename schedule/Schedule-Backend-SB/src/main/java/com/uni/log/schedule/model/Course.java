package com.uni.log.schedule.model;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="course")
public class Course {

    @Id
    String name;
    String db_name;
    String degree;

    public Course(String name, String db_name, String degree) {
        this.name = name;
        this.db_name = db_name;
        this.degree = degree;
    }
    public Course(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDb_name() {
        return db_name;
    }

    public void setDb_name(String db_name) {
        this.db_name = db_name;
    }

    public String getDegree() {
        return degree;
    }

    public void setDegree(String degree) {
        this.degree = degree;
    }
}
