import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton, Typography, Toolbar, Box, AppBar } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: 15 }}>
      <AppBar position="static" bottom="0" color="secondary" style={{ position: "fixed", bottom: 0 }}>
        <Toolbar>
          <Typography className="nav_content" variant="caption" sx={{ flexGrow: 1, color: "white", marginLeft: "15px" }}>
            R.A.V.M Construction &copy; {new Date().getFullYear()}
          </Typography>
          <Typography className="contact" variant="caption" sx={{ flexGrow: 1, color: "white", marginLeft: "15px", fontSize: ".9rem", fontStyle: "bold" }}>
            Alberto Viquez: (732)-864-6543 |{" "}
            <a className="footer_email" href="mailto:RAVMconstruction@gmail.com">
              RAVMconstruction@gmail.com
            </a>
          </Typography>

          <IconButton href="https://www.facebook.com/RAVM-Construction-101133581924091">
            <h5 className="facebook">Our FaceBook Page</h5>
            <FacebookIcon className="facebook" sx={{ flexGrow: 1, color: "blue", fontSize: "42px", background: "white", margin: "0", padding: "0", border: "2px solid black" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
