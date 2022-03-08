import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  width: 86px;
  height: auto;
  margin: 0 auto;
  margin-top: auto;
  padding-top: 20px;
`;

export const BrandBar = () => {
  return (
    <Logo data-testid="linktreeLogo">
      <img src="assets/logo.svg" alt="Linktree" />
    </Logo>
  );
};
