import React, { FC, SetStateAction, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Box,
  Typography,
  IconButton,
  ListItemButton,
  useTheme,
} from "@mui/material";
import {
  DashboardOutlined,
  CasesOutlined,
  CalendarMonthOutlined,
  PeopleAltOutlined,
  DocumentScannerOutlined,
  PaymentOutlined,
  ChevronLeft,
  SettingsOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { UserProfile, UserProfileState } from "../types/UserProfile";

interface SidebarMenuItem {
  text: string;
  icon?: React.ReactNode;
}

const menuItems: SidebarMenuItem[] = [
  {
    text: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    text: "Cases",
    icon: <CasesOutlined />,
  },
  {
    text: "Appointments",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Clients",
    icon: <PeopleAltOutlined />,
  },
  {
    text: "Documents",
    icon: <DocumentScannerOutlined />,
  },
  {
    text: "Billing",
    icon: <PaymentOutlined />,
  },
];

interface Props {
  userProfile: UserProfileState;
  sidebarWidth: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<SetStateAction<boolean>>;
  isMobile: boolean;
}

const Sidebar: FC<Props> = ({
  userProfile,
  sidebarWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isMobile,
}): JSX.Element => {
  // Track active menu item
  const [activeMenuItem, setActiveMenuItem] = useState<string>("dashboard");
  // Navigate to other pages
  const navigate = useNavigate();
  const { userProfile: profile } = userProfile;
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
    >
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: sidebarWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: sidebarWidth,
              justifyContent: "space-between",
            },
          }}
        >
          <Box display="flex" marginLeft="auto" flexDirection="column">
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h4" fontWeight="bold">
                LAWFIRM PORTAL
              </Typography>
              {isMobile && (
                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                  <ChevronLeft />
                </IconButton>
              )}
            </Box>
            <List>
              {menuItems.map(({ text, icon }) => {
                const smallText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${smallText}`);
                        setActiveMenuItem(smallText);
                      }}
                      sx={{
                        backgroundColor:
                          smallText === activeMenuItem
                            ? theme.palette.primary["dark"]
                            : "transparent",
                        color:
                          smallText === activeMenuItem
                            ? theme.palette.primary["contrastText"]
                            : theme.palette.secondary["main"],
                        "&:hover": {
                          color: theme.palette.primary["dark"],
                        },
                      }}
                    >
                      {icon && (
                        <ListItemIcon
                          sx={{
                            color:
                              smallText === activeMenuItem
                                ? theme.palette.primary["light"]
                                : theme.palette.primary["dark"],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                      )}
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          <Box display="flex" position="relative" bottom="2rem">
            {/* TODO: Get username & profile image from userProfile */}
            <Box
              component="img"
              alt="profile"
              src={profile?.avatar || ""}
              height="50px"
              width="50px"
              borderRadius="50%"
              sx={{ objectFit: "cover" }}
            />
            <Box>
              <Typography>{profile?.name}</Typography>
              <Typography>{profile?.role}</Typography>
            </Box>
            <SettingsOutlined sx={{ fontSize: "30px" }} />
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
