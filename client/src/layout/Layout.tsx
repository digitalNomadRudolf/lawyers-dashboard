import React, { useState } from "react";
import { useMediaQuery, Box } from "@mui/material";
import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/store";

const Layout = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  // Get userProfile from the redux state
  const userProfile = useSelector((state: RootState) => state.userProfile);

  return (
    <Box display={isMobile ? "block" : "flex"}>
      <Sidebar
        userProfile={userProfile}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        sidebarWidth="250px"
      />
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
