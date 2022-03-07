import { Profile } from "./Components/Profile";
import React, { useState, useEffect } from "react";
import { Link } from "./Components/Links/Link";
import "./App.css";

function App() {
  const [profile, setProfile] = useState({});
  const [links, setLinks] = useState([]);

  const getData = () => {
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
        const rand = Math.floor(Math.random() * (3 - 1));
        setProfile(profiles[rand]);
        setLinks(profiles[rand].links);
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
            key={"__uid-link_" + index}
          />
        ))}
    </div>
  );
}

export default App;
