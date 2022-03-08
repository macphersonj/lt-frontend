import React from "react";
import { Classic } from "./Variants/Classic";
import { Shows } from "./Variants/Shows";
import { Music } from "./Variants/Music";

export const Link = (props) => {
  let linkType = props.linkType;
  switch (linkType) {
    case "classicLink":
      return (
        <Classic
          linkTitle={props.title}
          uri={props.uri}
          bgColor={props.bgColor}
          color={props.color}
        ></Classic>
      );
    case "showsLink":
      return (
        <Shows
          linkTitle={props.title}
          uri={props.uri}
          showLinks={props.showLinks}
          bgColor={props.bgColor}
          color={props.color}
        ></Shows>
      );
    case "musicLink":
      return (
        <Music
          linkTitle={props.title}
          uri={props.uri}
          platformLinks={props.platformLinks}
          bgColor={props.bgColor}
          color={props.color}
        ></Music>
      );
    default:
      return null;
  }
};
