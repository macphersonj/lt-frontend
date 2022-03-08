import React from "react";
import styled from "styled-components";

const ProfilePic = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 0 auto 8px auto;
  background-image: url(${(props) => props.bg});
`;

const ProfileName = styled.p`
  color: #263238;
  text-align: center;
  margin: 0 0 36px 0;
  font-size: 16px;
`;

export const Profile = (props) => {
  return (
    <div data-testid="userProfile">
      <ProfilePic bg={props.userImg}></ProfilePic>
      <ProfileName>{props.userName}</ProfileName>
    </div>
  );
};
