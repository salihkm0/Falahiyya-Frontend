import { Route, Routes } from "react-router-dom"
import { Topbar } from "../../components/sidebar/Topbar"
import { MainContainer } from "../../styles/ContainerStyle"
import { StudentHomePage } from "./StudentHomePage"
import { StudentSidebar } from "./StudentSidebar"


export const StudentDashboard = () => {
  return (
    <>
    <StudentSidebar />
    <Topbar />
    <MainContainer >
      <Routes>
        <Route path="/" element={<StudentHomePage />} />
      </Routes>
    </MainContainer>
  </>
  )
}
