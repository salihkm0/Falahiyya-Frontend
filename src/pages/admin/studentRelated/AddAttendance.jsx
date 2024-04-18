import React, { useEffect, useState } from "react";
import { AttendanceTable } from "../../../components/attendance/AttendanceTable";
import {
  AttendanceBtn,
  AttendanceClass,
  AttendanceDate,
  AttendanceInput,
  AttendanceLable,
  Headding,
} from "../../../styles/attendance/AttendanceStyle";
import { useForm } from "react-hook-form";
import { studData } from "../../../data/studData";
import { Box } from "@mui/material";
import { Line } from "../../../styles/Line";

export const AddAttendance = () => {
  const [studList, setStudList] = useState([]);
  const [todayDate, setTodayDate] = useState("");
  const [data, setData] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const studClass = parseInt(data.class);

  // const handleList = () => {
  //   studData.map(
  //     (student) => student.studClass === studClass && setStudList([student])
  //   );
  // };

  useEffect(() => {
    // handleList();
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is  0!
    var yyyy = today.getFullYear();
    today = `${yyyy}-${mm}-${dd}`;
    setTodayDate(today);
  }, [data, todayDate]);

  return (
    <Box>
      <Headding>Student Attendance Management</Headding>
      <form onSubmit={handleSubmit((data) => setData(data))}>
        <AttendanceLable htmlFor="class">Class : </AttendanceLable>
        <AttendanceClass
          name="class"
          {...register("class", { required: true })}
          required
        >
          <option value="">Please Select Class</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </AttendanceClass>
        <AttendanceLable htmlFor="date">Date : </AttendanceLable>
        <AttendanceDate
          type="date"
          name="date"
          defaultValue={todayDate}
          id=""
          {...register("date", { required: true })}
          required
        />
        <AttendanceBtn type="submit">Submit</AttendanceBtn>
      </form>
      <AttendanceTable data={data} />
      <Line />
    </Box>
  );
};
