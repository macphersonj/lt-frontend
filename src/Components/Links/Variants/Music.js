import React, { useState } from "react";
import { LinkButton } from "../LinkButton";
import styled from "styled-components";

const LinkContainer = styled.div`
  width: 100%;
  height: auto;
`;

const MusicContainer = styled.div`
  width: 100%;
  background: #f5f7f8;
  display: block;
  overflow: auto;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const PlatformElement = styled.div`
  width: 100%;
  display: block;
  padding: 12px 55px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #263238;
  &:after {
    content: "";
    width: calc(100% - 55px);
    height: 1px;
    background: #dadee0;
    position: absolute;
    bottom: 0;
    left: 55px;
  }
  &:last-of-type {
    &:after {
      content: none;
    }
  }
`;

const PlatformName = styled.p`
  font-size: 16px;
  letter-spacing: -0.32px;
  line-height: 0;
`;

const PlatformIcon = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;

const EmbedContainer = styled.div`
  margin: 16px;
`;

export const Music = (props) => {
  const [musicLinkActive, setMusicLinkActive] = useState(false);

  const musicLinkHandler = () => {
    setMusicLinkActive(!musicLinkActive);
  };
  return (
    <LinkContainer>
      <LinkButton onClick={() => musicLinkHandler()}>
        {props.linkTitle}
      </LinkButton>
      {musicLinkActive ? (
        <MusicContainer>
          <EmbedContainer>
            <iframe
              title="Spotify"
              src="https://open.spotify.com/embed/track/4VtNDouDk6gLgopBhp9di6?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </EmbedContainer>
          {props.platformLinks.map((platform) => {
            return (
              <PlatformElement>
                <PlatformIcon>
                  <img src={platform.icon} alt={platform.platform} />
                </PlatformIcon>
                <PlatformName>{platform.platform}</PlatformName>
              </PlatformElement>
            );
          })}
        </MusicContainer>
      ) : null}
    </LinkContainer>
  );
};

// TODO
// 1: create components for icons so we can dynamically style them
// 2: switch out platform embeds when user clicks different platforms
