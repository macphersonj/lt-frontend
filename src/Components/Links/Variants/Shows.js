import React, { useState } from "react";
import { LinkButton } from "../LinkButton";
import styled from "styled-components";

const SongKickLink = styled.button`
  width: 100%;
  display: block;
  padding: 10px 16px;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #263238;
  &:after {
    content: "";
    width: calc(100% - 16px);
    height: 1px;
    background: #dadee0;
    position: absolute;
    bottom: 0;
    left: 16px;
  }
`;

const ShowsContainer = styled.div`
  width: 100%;
  background: #f5f7f8;
  display: block;
  overflow: auto;
`;

const LinkContainer = styled.div`
  width: 100%;
  height: auto;
`;

const ShowDate = styled.p`
  font-size: 16px;
  line-height: 28px;
  display: block;
  margin: 0;
  letter-spacing: -0.32px;
`;

const ShowVenue = styled.p`
  font-size: 12px;
  line-height: 24px;
  display: block;
  margin: 0;
  letter-spacing: -0.24px;
`;

const SongKickLogo = styled.div`
  width: 72px;
  height: auto;
  margin: 16px auto;
`;

const ArrowIcon = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%) rotate(-90deg);
`;

const SoldOut = styled.p`
  position: absolute;
  display: block;
  top: 50%;
  right: 16px;
  margin: 0;
  transform: translateY(-50%);
  font-size: 12px;
  letter-spacing: -0.24px;
`;

export const Shows = (props) => {
  const [showLinkActive, setShowLinkActive] = useState(false);

  const showLinkHandler = () => {
    setShowLinkActive(!showLinkActive);
  };

  return (
    <LinkContainer>
      <LinkButton
        onClick={() => showLinkHandler()}
        bgColor={props.bgColor}
        color={props.color}
      >
        {props.linkTitle}
      </LinkButton>

      {showLinkActive ? (
        <ShowsContainer>
          {props.showLinks.map((show, index) => (
            <SongKickLink
              as="a"
              href={show.uri}
              target="_blank"
              rel="noreferrer"
              key={"__uid-show_" + index}
            >
              <ShowDate>{show.date}</ShowDate>
              <ShowVenue>{show.venue}</ShowVenue>

              {show.isSoldOut ? (
                <SoldOut>Sold out</SoldOut>
              ) : (
                <ArrowIcon>
                  <img src="assets/icons/arrow.svg" alt="" />
                </ArrowIcon>
              )}
            </SongKickLink>
          ))}

          <SongKickLogo>
            <img src="assets/icon-by-songkick-wordmark.svg" alt="by Songkick" />
          </SongKickLogo>
        </ShowsContainer>
      ) : null}
    </LinkContainer>
    // TODO add in custom scrollbar in event of long showlist
  );
};
