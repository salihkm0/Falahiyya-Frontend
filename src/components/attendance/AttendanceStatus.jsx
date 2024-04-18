import { useState } from "react";
import {
  AttendanceStatusBtn,
  StatusButton,
} from "../../styles/attendance/AttendanceStyle.jsx";

export const AttendanceStatus = () => {
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [statusDisplay, setStatusDisplay] = useState('');

  const handleAttendance = (e) => {
    let status = e.target.value;
    setAttendanceStatus(status);
    setStatusDisplay(status);
  };

  return (
    <>
      <AttendanceStatusBtn>
        <StatusButton
          attendanceStatus={attendanceStatus}
          defaultValue={attendanceStatus}
          onChange={handleAttendance}
        >
          <option value="select">Attendance</option>
          <option value="present">Present</option>
          <option value="absent">Absent</option>
          <option value="0">Holiday</option>
        </StatusButton>
      </AttendanceStatusBtn>
    </>
  );
};
