import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import Stack from "@mui/material/Stack";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div></div>

        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>

          <AppsIcon sx={{ fontSize: 40 }} />
          <img src="https://img.icons8.com/external-avatar-andi-nur-abdillah/64/000000/external-avatar-avatarar-bussiness-avatar-andi-nur-abdillah-37.png" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>

        <Stack className="icon" direction="row" spacing={7}>
          <img src="https://img.icons8.com/color/48/000000/youtube-play.png" />
          <img src="https://img.icons8.com/color/48/000000/gmail-new.png" />
          <img src="https://img.icons8.com/color/48/000000/google-maps-new.png" />
          <img src="https://img.icons8.com/fluency/48/000000/google-drive--v2.png" />
          <img src="https://img.icons8.com/color/48/000000/google-assistant.png" />
          <img src="https://img.icons8.com/color/48/000000/google-photos-new.png" />
        </Stack>
      </div>
    </div>
  );
}

export default Home;
