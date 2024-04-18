import { Route, Routes } from "react-router-dom"
import { Topbar } from "../../components/sidebar/Topbar"
import { MainContainer } from "../../styles/ContainerStyle"
import { TeacherHomePage } from "./TeacherHomePage"
import { TeacherSidebar } from "./TeacherSidebar"


export const TeacherDashboard = () => {
  return (
    <>
    <TeacherSidebar />
    <Topbar />
    <MainContainer >
      <Routes>
        <Route path="/" element={<TeacherHomePage />} />
      </Routes>
    </MainContainer>
  </>
  )
}
