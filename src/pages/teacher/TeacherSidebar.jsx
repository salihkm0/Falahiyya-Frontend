import { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListTitle,
  NavSubContainer,
  SidebarContainer,
  SidebarToggleIcon,
  ToggleIcon,
} from "../../styles/Sidebar/SidebarStyle.jsx";
import CloseIcon from "@mui/icons-material/Close";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { SidebarProfile } from "../../components/sidebar/SidebarProfile";

export const TeacherSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    const mobileNavHandler = (e) => {
      setOpenSidebar(false);
    };
    document.addEventListener("mousedown", mobileNavHandler);
  });
  return (
    <>
      <SidebarContainer open={openSidebar}>
        <SidebarToggleIcon open={openSidebar}>
          {openSidebar ? (
            <CloseIcon sx={ToggleIcon} onClick={() => setOpenSidebar(false)} />
          ) : (
            <DehazeIcon sx={ToggleIcon} onClick={() => setOpenSidebar(true)} />
          )}
        </SidebarToggleIcon>

        <NavSubContainer>
          <Link to={'/teacher/profile/:id'}>
            <SidebarProfile />
          </Link>
          <Box>
            <ListTitle>Teacher</ListTitle>
            <List>
              {/* <ListItem>
                <Link to="/add-teacher">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Add Teacher</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/veiw-teacher">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Teahers</p>
                  </Stack>
                </Link>
              </ListItem> */}
              <ListItem>
                <Link to="/teacher/dashboard">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Dashboard</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/teachers-attendance">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Teachers Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="teacher/add-subject">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Add Subject</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/veiw-subjects">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Veiw/Edit Subjects</p>
                  </Stack>
                </Link>
              </ListItem>
            </List>
          </Box>
          <Box>
            <ListTitle>Student</ListTitle>
            <List>
              <ListItem>
                <Link to="/teacher/veiw-students">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Students</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/veiw-parents">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View/Edit Parents</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/stud-attendance/add">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Add Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/stud-attendance/view">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/student-results">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Results</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teacher/student-events">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Students Events</p>
                  </Stack>
                </Link>
              </ListItem>
            </List>
          </Box>
          {/* <ListTitle>SETTINGS</ListTitle> */}
        </NavSubContainer>
      </SidebarContainer>
    </>
  );
};