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
  cursor: pointer;
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

const ArrowIcon = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
`;

const StyledEmbedContainer = styled.div`
  width: 100%;
  margin: 10px auto;
`;

const AlbumArt = styled.div`
  width: 64px;
  height: 64px;
  background: url("assets/album-art.png");
  border-radius: 4px;
  float: left;
`;

const PlayBtn = styled.div`
  width: 24px;
  height: 24px;
  margin: 0 0 0 50px;
  background: url("assets/icons/play.svg");
  background-size: cover;
  float: left;
`;

const PlayBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #dadee0;
  position: relative;
  margin: 16px 0 0 0;
  &:after {
    content: "";
    width: 36%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #39e09b;
  }
`;

export const Music = (props) => {
  const [musicLinkActive, setMusicLinkActive] = useState(false);
  const [embedPlayer, setEmbedPlayer] = useState(false);

  const musicLinkHandler = () => {
    setMusicLinkActive(!musicLinkActive);
  };

  const embedHandler = () => {
    setEmbedPlayer(true);
  };
  return (
    <LinkContainer>
      <LinkButton onClick={() => musicLinkHandler()}>
        {props.linkTitle}
      </LinkButton>
      {musicLinkActive ? (
        <MusicContainer>
          {embedPlayer ? (
            <EmbedContainer>
              {/* <iframe
                title="Spotify"
                src="https://open.spotify.com/embed/track/4VtNDouDk6gLgopBhp9di6?utm_source=generator"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe> */}
              <StyledEmbedContainer>
                <AlbumArt />
                <PlayBtn />
                <PlayBar />
              </StyledEmbedContainer>
            </EmbedContainer>
          ) : null}
          {props.platformLinks.map((platform, index) => {
            return (
              <PlatformElement
                key={"__uid-platform_" + index}
                onClick={() => embedHandler()}
              >
                <a href={platform.uri} target="_blank" rel="noreferrer">
                  <PlatformIcon>
                    <img src={platform.icon} alt={platform.platform} />
                  </PlatformIcon>
                </a>
                <PlatformName>{platform.platform}</PlatformName>
                <ArrowIcon>
                  <img src="/assets/icons/arrow.svg" alt="" />
                </ArrowIcon>
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
