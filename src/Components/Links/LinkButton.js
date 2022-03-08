import React from "react";
import styled from "styled-components";

const StyledLink = styled.button`
  width: 100%;
  border: 0;
  padding: 12px 30px;
  color: ${(props) => (props.color ? props.color : "#263238")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#39e09b")};
  border: 2px solid ${(props) => (props.bgColor ? props.bgColor : "#39e09b")};
  margin: 10px auto 0 auto;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.28px;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    background-color: ${(props) => (props.color ? props.color : "#263238")};
    border: 2px solid ${(props) => (props.color ? props.color : "#263238")};
    color: ${(props) => (props.bgColor ? props.bgColor : "#39e09b")};
  }
`;

export const LinkButton = (props) => {
  return (
    <StyledLink
      onClick={props.onClick}
      bgColor={props.bgColor}
      color={props.color}
    >
      {props.children}
    </StyledLink>
  );
};

/// TIDY THEME COLOURS, global vars for default colours etc
