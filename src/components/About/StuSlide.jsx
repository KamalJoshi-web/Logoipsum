import React from "react";
import Student from "../../assets/student.png";
import Teacher from "../../assets/teacher.png";
import StudentChat1 from "../../assets/student-chat-1.png";
import StudentChat2 from "../../assets/student-chat-2.png";
import StudentChat3 from "../../assets/student-chat-3.png";
import TeacherChat1 from "../../assets/teacher-chat-1.png";
import TeacherChat2 from "../../assets/teacher-chat-2.png";

const StuSlide = () => {
  const chats = [
    StudentChat1,
    StudentChat2,
    StudentChat3,
    TeacherChat2,
    TeacherChat1,
  ];
  return (
    <div className=" flex flex-wrap relative max-lg:flex-col ">
      <div className=" flex flex-col gap-5 justify-center items-start relative left-10 max-md:hidden  max-lg:hidden ">
        {chats.map((item, index) => (
          <img src={item} alt="chats" key={index} />
        ))}
      </div>
      <img src={Student} alt="image-student" className=" m-auto " />
      <img src={Teacher} alt="image-teacher" />
    </div>
  );
};

export default StuSlide;
