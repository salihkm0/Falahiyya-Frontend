import { useEffect, useState } from "react";
import {
  AttendanceContainer,
  AttendanceName,
  AttendanceRoll,
  AttendanceTableHead,
  AttendanceTableRow,
  AttTable,
  SlelectAlert,
} from "../../styles/attendance/AttendanceStyle";
import { AttendanceStatus } from "./AttendanceStatus";
import { studData } from "../../data/studData";

export const AttendanceTable = ({ data }) => {
  return (
    <>
      <AttendanceContainer>
        {data.class && data.date ? (
          <AttTable>
            <AttendanceTableRow>
              <AttendanceTableHead>Roll No.</AttendanceTableHead>
              <AttendanceTableHead>Admission No.</AttendanceTableHead>
              <AttendanceTableHead>Student Name</AttendanceTableHead>
              {/* <AttendanceTableHead>{data.date}</AttendanceTableHead> */}
              <AttendanceTableHead>Status</AttendanceTableHead>
              <AttendanceTableHead>Time</AttendanceTableHead>
            </AttendanceTableRow>
            {studData.map((student, index) => (
              <AttendanceTableRow key={index}>
                <AttendanceRoll>{student.rollno}</AttendanceRoll>
                <AttendanceRoll>{student.admmissionNo}</AttendanceRoll>
                <AttendanceName>{student.studName}</AttendanceName>
                <AttendanceStatus />
              </AttendanceTableRow>
            ))}
          </AttTable>
        ) : (
          <SlelectAlert>Please Select Class And Date</SlelectAlert>
        )}
      </AttendanceContainer>
    </>
  );
};
