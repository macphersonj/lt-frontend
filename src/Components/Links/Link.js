import React from "react";
import { Classic } from "./Variants/Classic";
import { Shows } from "./Variants/Shows";
import { Music } from "./Variants/Music";
export const Link = (props) => {
  let linkType = props.linkType;
  switch (linkType) {
    case "classicLink":
      return <Classic linkTitle={props.title} uri={props.uri}></Classic>;
    case "showsLink":
      return (
        <Shows
          linkTitle={props.title}
          uri={props.uri}
          showLinks={props.showLinks}
        ></Shows>
      );
    case "musicLink":
      return (
        <Music
          linkTitle={props.title}
          uri={props.uri}
          platformLinks={props.platformLinks}
        ></Music>
      );
    default:
      return null;
  }
};
