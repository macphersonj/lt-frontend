import { Profile } from "./Components/Profile";
import React, { useState, useEffect } from "react";
import { Link } from "./Components/Links/Link";
import { BrandBar } from "./Components/BrandBar";

import "./App.css";

function App() {
  const [profile, setProfile] = useState({});
  const [links, setLinks] = useState([]);
  const [bgColor, setBgColor] = useState(null);
  const [color, setColor] = useState(null);

  const getData = () => {
    const rand = Math.floor(Math.random() * (3 - 1));

    fetch("Data/profiles.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (profiles) {
        setProfile(profiles[rand]);
        setLinks(profiles[rand].links);
        setBgColor(profiles[rand].bg);
        setColor(profiles[rand].color);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Profile userName={profile.userProfile} userImg={profile.userImg} />
      {links &&
        links.length > 0 &&
        links.map((item, index) => (
          <Link
            linkType={item.linkType}
            uri={item.uri}
            title={item.title}
            showLinks={item.showArray}
            platformLinks={item.platformArray}
            bgColor={bgColor}
            color={color}
            key={"__uid-link_" + index}
          />
        ))}

      <BrandBar />
    </div>
  );
}

export default App;

// TODO fix theme props - will keep for now to not go overtime.
