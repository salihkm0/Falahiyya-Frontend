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

export const StudentSidebar = () => {
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
          <Link to={'parent/profile/:id'}>
            <SidebarProfile />
          </Link>
          <Box>
            <ListTitle>Quick Links</ListTitle>
            <List>
              <ListItem>
                <Link to="/student/dashboard">
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
                <Link to="/student/attendance">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>View Attendance</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/student/results">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Exam Results</p>
                  </Stack>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/student/events">
                  <Stack
                    direction={"row"}
                    spacing={"5px"}
                    alignItems={"center"}
                  >
                    <p>Events</p>
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