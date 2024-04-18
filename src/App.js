import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Login } from './pages/Auth/Login';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { StudentDashboard } from './pages/student/StudentDashboard';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';

function App() {
  const currentRole = 'admin'
  return (
    <>
<Router>
      {currentRole === '' &&
        <Routes>
          <Route path="/" element={<Login />} />

          {/* <Route path="/" element={<Homepage />} />
          <Route path="/Adminlogin" element={<Login role="Admin" />} />
          <Route path="/Studentlogin" element={<Login role="Student" />} />
          <Route path="/Teacherlogin" element={<Login role="Teacher" />} /> */}

          {/* <Route path="/Adminregister" element={<AdminRegisterPage />} /> */}

          <Route path='*' element={<Navigate to="/" />} />
        </Routes>}

      {currentRole === "admin" &&
        <>
          <AdminDashboard />
        </>
      }

      {currentRole === "parent" &&
        <>
          <StudentDashboard />
        </>
      }

      {currentRole === "teacher" &&
        <>
          <TeacherDashboard />
        </>
      }
    </Router>
    
    </>
  );
}

export default App;
