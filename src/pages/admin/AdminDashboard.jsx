import { AdminSidebar } from "./AdminSidebar";
import { Topbar } from "../../components/sidebar/Topbar.jsx";
import { MainContainer } from "../../styles/ContainerStyle.jsx";
import { Route, Routes } from "react-router-dom";
import { AdminHomePage } from "./adminHomePage/AdminHomePage";
import { AdminAddForm } from "./adminRelated/AddAdmin";
import { AdminsList } from "./adminRelated/AdminsList";
import { TeacherAddForm } from "./teacherRelated/AddTeacher";
import { ViewAdmin } from "./adminRelated/ViewAdmin";
import { TeachersList } from "./teacherRelated/TeachersList";
import { AddClass, ClassAddForm } from "./classRelated/AddClass";
import { AddSubject, SubjectAddForm } from "./classRelated/AddSubject";
import { AddAttendance } from "./studentRelated/AddAttendance";
import { ViewAttendance } from "./studentRelated/ViewAttendance";
import { ParentsList } from "./parentRelated/ParentsList";
import { ClassList } from "./classRelated/ClassesList";
import { SubjectList } from "./classRelated/SubjectList";
import { Exams } from "./studentRelated/Exams";
import { EventsList } from "../teacher/eventsRelated/EventsList";
import { ResultsList } from "./studentRelated/ResultsList";
import { TeacherAttendanceList } from "./teacherRelated/TeacherAttendanceList";
export const AdminDashboard = () => {
  return (
    <>
      <AdminSidebar />
      <Topbar />
      <MainContainer>
        <Routes>
          {/* Admin Related  Pages */}
          <Route path="/" element={<AdminHomePage />} />
          <Route path="/admin/add-admin" element={<AdminAddForm />} />
          <Route path="/admin/admin-list" element={<AdminsList />} />
          <Route path="/admin/view-admin" element={<ViewAdmin />} />
          

          {/* Teacher Related Pages */}
          <Route path="/admin/teacher/add" element={<TeacherAddForm />} />
          <Route path="/admin/techer/list" element={<TeachersList />} />
          <Route path="/admin/teacher/attendace" element={<TeacherAttendanceList />} />

          {/* Class Related Pages  */}
          <Route path="/admin/add-class" element={<ClassAddForm />} />
          <Route path="/admin/add-subject" element={<SubjectAddForm />} />
          <Route path="/admin/class-list" element={<ClassList />} />
          <Route path="/admin/subject-list" element={<SubjectList />} />

          {/* Student Realted Pages  */}
          <Route path="admin/stud-attendance/add" element={<AddAttendance />} />
          <Route path="admin/stud-attendance/view" element={<ViewAttendance />} />
          <Route path="/admin/parents-list" element={<ParentsList />} />
          <Route path="/admin/student/exams" element={<Exams />} />
          <Route path="/admin/student/results" element={<ResultsList/>} />
          <Route path="/admin/student/events" element={<EventsList />} />
        </Routes>
      </MainContainer>
    </>
  );
};
