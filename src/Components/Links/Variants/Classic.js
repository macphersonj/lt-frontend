import React from "react";
import { LinkButton } from "../LinkButton";

export const Classic = (props) => {
  const simpleLinkHandler = (uri) => {
    window.open(uri);
  };

  return (
    <LinkButton
      onClick={() => simpleLinkHandler(props.uri)}
      bgColor={props.bgColor}
      color={props.color}
      data-testid="classicLink"
    >
      {props.linkTitle}
    </LinkButton>
  );
};
