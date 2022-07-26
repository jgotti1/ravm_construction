import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "../Home/home";
import OurWork from "../OurWork/OurWork";
import ContactUs from "../ContactUs/contactUs";
import "./navbar.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box className="nav_bar nav_style" sx={{ borderBottom: 3, borderColor: "divider" }}>
        <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{ fontSize: ".89rem", color: "yellow", textShadow: "2px 2px black" }} className="nav_text" label="Our Company" {...a11yProps(0)} />

          <Tab sx={{ fontSize: ".89rem", color: "yellow", textShadow: "2px 2px black" }} className="nav_text" label="Our Work" {...a11yProps(1)} />

          <Tab sx={{ fontSize: ".89rem", color: "yellow", textShadow: "2px 2px black" }} className="nav_text" label="Contact Us" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <OurWork />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ContactUs />
      </TabPanel>
    </Box>
  );
}
