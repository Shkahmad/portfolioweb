import React from "react";
import "./Navbar.css";
import "./Navbarmedia.css";
import { FaBarsStaggered } from "react-icons/fa6";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className="bg">
        <div className="container home">
          <div className="logo">
            <h1>Portfolio</h1>
          </div>
          <div className="nav-item">
            <ul className="navbar-ul">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">WORK</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <div className="dropdown">
                <button
                  class="btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown button
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <li>
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </div>
          <FaBarsStaggered onClick={handleOpen} className="bar-icons" />
        </div>
        <div className="into">
          <h1>I am Ahmad Shahzad</h1>
          <h2>Developer & Freelancr</h2>
        </div>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-style" >
            <Typography id="modal-modal-description" sx={{ mt: 'auto' }}>
              <ul className="mune-nav-bars">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">SERVICES</a>
              </li>
              <li>
                <a href="#">WORK</a>
              </li>
              <li>
                <a href="#">BLOG</a>
              </li>
              <li>
                <a href="#">CONTACT</a>
              </li>
              </ul>
            </Typography>
          </Box>
        </Modal>
      </div>

    </div>
  );
};

export default Navbar;
