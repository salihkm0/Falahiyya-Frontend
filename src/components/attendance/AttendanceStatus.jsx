import { useState } from "react";
import {
  AttendanceStatusBtn,
  StatusButton,
} from "../../styles/attendance/AttendanceStyle.jsx";

export const AttendanceStatus = () => {
  const [attendanceStatus, setAttendanceStatus] = useState("");
  const [statusDisplay, setStatusDisplay] = useState('');
  const [presentTime, setPresentTime] = useState('')

  const handleAttendance = (e) => {
    let status = e.target.value;
    setAttendanceStatus(status);
    setStatusDisplay(status);
    // Get present time for marking attendance
    var today = new Date();
    var hh = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
    var time = hh + ':' + mm + ':' + ss;
      setPresentTime(time);
  };

  console.log(attendanceStatus + ' ' + presentTime);

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
      <AttendanceStatusBtn>
        {attendanceStatus === 'present' ?  presentTime : '' }
      </AttendanceStatusBtn>
    </>
  );
}

export const AttendanceTime = () => {

}
