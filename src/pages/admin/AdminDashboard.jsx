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
          <Route path="/admin/add-teacher" element={<TeacherAddForm />} />
          <Route path="/admin/veiw-teacher" element={<TeachersList />} />

          {/* Class Related Pages  */}
          <Route path="/admin/add-class" element={<ClassAddForm />} />
          <Route path="/admin/add-subject" element={<SubjectAddForm />} />
          <Route path="/admin/class-list" element={<ClassList />} />
          <Route path="/admin/subject-list" element={<SubjectList />} />

          {/* Student Realted Pages  */}
          <Route path="admin/stud-attendance/add" element={<AddAttendance />} />
          <Route path="admin/stud-attendance/view" element={<ViewAttendance />} />
          <Route path="/admin/parents-list" element={<ParentsList />} />
        </Routes>
      </MainContainer>
    </>
  );
};
