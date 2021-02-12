package com.uni.log.schedule.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
  @Table(name = "lecture")
public class Lecture {

   @Id
   private String email;
   private String password;
   private String name;

   private String image;


   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }

   public String getPassword() {
      return password;
   }

   public void setPassword(String password) {
      this.password = password;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getImage() {
      return image;
   }

   public void setImage(String image) {
      this.image = image;
   }




   public Lecture( String email, String password, String name, String image) {

      this.email = email;
      this.password = password;
      this.name = name;
      this.image = image;
   }
   public Lecture(){}




}
