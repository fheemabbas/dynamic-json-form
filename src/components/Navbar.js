import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";
// import InboxIcon from "@mui/icons-material/Inbox";
// import MailIcon from "@mui/icons-material/Mail";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSelectedForm,
  updateSelectedFormIndex,
  updateSelectedFormfields,
} from "../store/action";

const Navbar = () => {
  const isDrawerOpen = useSelector((state) => state.isDrawerOpen);
  const { selectedForm } = useSelector((state) => state);
  const dynamicFormGroup = useSelector((state) => state.dynamicFormGroup);
  const dispatch = useDispatch();

  // const toggleDrawer = () => {
  //   dispatch({ type: "TOGGLE_DRAWER" });
  // };

  const closeDrawer = () => {
    dispatch({ type: "CLOSE_DRAWER" });
  };

  // const menuItems = [
  //   { text: "Contact Information", icon: <InboxIcon /> },
  //   { text: "Schooling Information", icon: <MailIcon /> },
  //   { text: "Employment Details", icon: <InboxIcon /> },
  //   { text: "Hobbies and Interests", icon: <MailIcon /> },
  //   { text: "Preferred Contact", icon: <InboxIcon /> },
  // ];
  const drawerContent = (
    <div>
      <List>
        {dynamicFormGroup.map((item, index) => (
          <ListItem
            button
            key={index}
            style={{
              backgroundColor: selectedForm === item.title ? "blue" : "",
              //   margin: "10px 0",
              cursor: "pointer",
            }}
            onClick={() => {
              dispatch(updateSelectedForm(item.title));
              dispatch(updateSelectedFormfields(item.fields));
              dispatch(updateSelectedFormIndex(index));
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      {/* Permanent Sidebar on larger screens */}
      <Box
        sx={{
          display: { xs: "none", sm: "block" }, // Always show on screens above 'sm'
          //   width: 240,
          marginTop: "10px",
          borderRight: "1px solid black",
        }}
      >
        <div style={{ margin: "0 auto" }}>
          <List>
            <ListItem>
              {/* <ListItemIcon>Person</ListItemIcon> */}
              <ListItemText primary={"Person"} />
            </ListItem>
          </List>
        </div>

        {drawerContent}
      </Box>

      {/* Drawer for mobile view */}
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        sx={{
          display: { xs: "block", sm: "none" }, // Only show on mobile
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
