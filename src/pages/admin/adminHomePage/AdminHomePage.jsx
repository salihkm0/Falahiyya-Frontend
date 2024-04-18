import React from "react";
import {
  AdminHomePageHeadding,
  AttendanceChartContainer,
  AttendanceChartHeading,
  AttendanceChartWrapper,
} from "../../../styles/AdminHomePageStyle";
import {
  AttendancePieChartInMonth,
  AttendancePieChartInYear,
} from "./AttendancePieChart";

export const AdminHomePage = () => {
  return (
    <>
      <AdminHomePageHeadding>
        Welcome to the Falahiyya admin home page!
      </AdminHomePageHeadding>


{/* ------------------Attendance Details Dashboard------------------------ */}

      {/* <AttendanceChartWrapper>
        <AttendanceChartContainer>
          <AttendanceChartHeading>
            Student Total Attendance Chart in Month(Days)
          </AttendanceChartHeading>
          <AttendancePieChartInMonth />
        </AttendanceChartContainer>
        <AttendanceChartContainer>
          <AttendanceChartHeading>
            Student Total Attendance Chart in Year(Days)
          </AttendanceChartHeading>
          <AttendancePieChartInYear />
        </AttendanceChartContainer>
      </AttendanceChartWrapper> */}
    </>
  );
};
