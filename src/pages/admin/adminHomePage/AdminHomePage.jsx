import React from "react";
import {
  AdminHomePageHeadding,
  AttendanceChartContainer,
  AttendanceChartHeading,
  AttendanceChartWrapper,
  QuickDetailsCard,
  QuickDetailsCount,
  QuickDetailsTitle,
  QuickDetailsWrapper,
} from "../../../styles/AdminHomePageStyle";
import {
  AttendancePieChartInMonth,
  AttendancePieChartInYear,
} from "./AttendancePieChart";

export const AdminHomePage = () => {
  return (
    <>
      <AdminHomePageHeadding>
        Falahiyya Admin Dashboard
      </AdminHomePageHeadding>

      {/* ------------------Total Details------------------------ */}

      <QuickDetailsWrapper>
        <QuickDetailsCard bgColor={"red"}>
          <QuickDetailsTitle>Total Classes</QuickDetailsTitle>
          <QuickDetailsCount>06</QuickDetailsCount>
        </QuickDetailsCard>
        <QuickDetailsCard bgColor={"green"}>
          <QuickDetailsTitle>Total Teachers</QuickDetailsTitle>
          <QuickDetailsCount>03</QuickDetailsCount>
        </QuickDetailsCard>
        <QuickDetailsCard bgColor={"blue"}>
          <QuickDetailsTitle>Total Students</QuickDetailsTitle>
          <QuickDetailsCount>65</QuickDetailsCount>
        </QuickDetailsCard>
        <QuickDetailsCard bgColor={"orenge"}>
          <QuickDetailsTitle>Total Parents</QuickDetailsTitle>
          <QuickDetailsCount>51</QuickDetailsCount>
        </QuickDetailsCard>
      </QuickDetailsWrapper>

      {/* ------------------Attendance Details Dashboard------------------------ */}

      <AttendanceChartWrapper>
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
      </AttendanceChartWrapper>
    </>
  );
};
