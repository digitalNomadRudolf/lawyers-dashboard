import React from "react";
import { Box, Avatar } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { InputBase } from "@mui/material";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { KeyboardArrowDown } from "@mui/icons-material";
import styled from "@emotion/styled";
import { UserInfo } from "../types/UserProfile";
import Fade from "@mui/material/Fade";

// Search
const SearchBox = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "4px",
  padding: "0 10px",
});

const Input = styled(InputBase)({
  flex: 1,
  marginLeft: "0px",
});

const Icon = styled(SearchIcon)({
  color: "#000",
});

// User Account Dropdown
const UserAccount = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const UserAvatar = styled(Avatar)({
  backgroundColor: "#fff",
  color: "#1565c0",
  marginRight: "5px",
});

const TriggerDropdown = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 0.875rem;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 8px 16px;
  line-height: 1.5;
  background: transparent;
  border: none;
  color: #1565c0;
  cursor: pointer;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:focus-visible {
    border-color: #1565c0;
    outline: 3px solid #1565c0;
  }
`;

const StyledListbox = styled(Menu)`
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 150px;
  border-radius: 12px;
  outline: 0px;
  background: transparent;
  border: none;
  color: #1565c0;
  z-index: 1;
`;

const StyledMenuItem = styled(MenuItem)`
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }
`;

const ChevronDown = styled(KeyboardArrowDown)`
  color: #fff;
`;

const Name = styled("div")`
  color: #fff;
  font-weight: 600;
  font-size: 13px;
`;

const Role = styled("div")`
  color: #fff;
  font-size: 12px;
`;

const UserDetails = styled("div")`
  flex-direction: column;
  font-weight: 300;
  text-align: left;
  padding: 0 10px;
`;

const Navbar = ({ name, avatar, role }: UserInfo) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch: React.MouseEventHandler = (event) => {
    event.preventDefault();
    console.log("Search called: ", event);
  };

  return (
    <Box
      sx={{
        minHeight: "7vh",
        backgroundColor: "#1565c0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "5px 50px",
        justifyContent: "space-between",
      }}
    >
      {/* Search component with input and magnifying glass */}
      <SearchBox>
        <Input placeholder="Search..." />
        <Icon onClick={handleSearch} />
      </SearchBox>
      {/* TODO: Toggle Dark/Light mode */}

      {/* User Account section that uses userProfile data inside and shows Avatar, Name, Role and a Dropdown  */}
      <UserAccount>
        <TriggerDropdown
          id="dropdown-button"
          aria-controls={open ? "dropdown-button" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? true : undefined}
          onClick={handleClick}
        >
          <UserAvatar src={avatar} alt={name} />
          <UserDetails>
            <Name>{name}</Name>
            <Role>{role || ""}</Role>
          </UserDetails>
          <ChevronDown />
        </TriggerDropdown>

        <StyledListbox
          id="fade-menu"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          style={{ left: "-70px" }}
          slotProps={{
            paper: {
              style: {
                width: "150px",
              },
            },
          }}
          MenuListProps={{
            "aria-labelledby": "dropdown-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <StyledMenuItem onClick={handleClose}>My Profile</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>Settings</StyledMenuItem>
          <StyledMenuItem onClick={handleClose}>Log out</StyledMenuItem>
        </StyledListbox>
      </UserAccount>
    </Box>
  );
};

export default Navbar;
