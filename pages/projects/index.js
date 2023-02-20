import Hidden from 'components/Hidden';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { projects } from '../../constants';

export default function Projects() {
  const [preview, setPreview] = useState();
  const [currentProject, setCurrentProject] = useState();
  return (
    <Container>
      <WrapList>
        <List>
          {projects.map(({ name, slug, preview }, i) => (
            <Item
              key={name}
              href={`/projects/${slug}`}
              onMouseEnter={() => {
                setPreview(preview);
                setCurrentProject(slug);
              }}
              selected={currentProject === slug}
            >
              {name}
            </Item>
          ))}
        </List>
        <LearnMore>Click on a project to learn more!</LearnMore>
      </WrapList>

      <WrapPreview href={`/projects/${currentProject}`}>
        <Hidden fullWidth breakpoint={540}>
          {preview && <Preview src={preview} fill sizes="900px"></Preview>}
        </Hidden>
      </WrapPreview>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
  position: relative;
`;

const WrapPreview = styled(Link)`
  width: 100%;
  max-width: 900px;
  min-width: 600px;
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-bottom: 32px;
`;

const Preview = styled(Image)`
  object-fit: contain;
  height: unset !important;
  margin-top: auto;
  border-radius: 20px 20px 0 0;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 70%,
    rgba(0, 0, 0, 0) 100%
  );
  margin-left: 64px;
  @media screen and (max-width: 1200px) {
    margin-block: auto;
  }
  /* @media screen and (max-width: 780px) {
    height: 100% !important;
    object-fit: cover;
    object-position: left;
  } */
`;

// const List = styled.ul`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 16px;
//   font: 600 60px 'Formula Extended';
//   /* text-transform: uppercase; */
//   margin-left: auto;
//   padding: 32px;
//   margin-right: 128px;
// `;

const Name = styled(Link)`
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  :not(:hover) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  :hover {
    color: var(--celeste);
    /* padding-left: 12px;
    margin-right: -12px; */
  }
  /* ::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-in;
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  } */
`;

const WrapList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 64px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  margin-left: 5%;
  perspective: 1000px;
  font-size: max(8vw, 60px);
  line-height: max(7vw, 50px);
  font-weight: 900;
  @media screen and (max-width: 540px) {
    min-width: 100%;
    margin-left: 0;
    padding: 16px;
    font-size: max(10vw, 80px);
    line-height: max(9vw, 70px);
  }
`;

const Item = styled(Link)`
  font-family: 'Neue Montreal';
  /* font-family: 'Glamsy'; */
  transform-origin: 0% 0%;
  transform: rotateY(20deg);
  white-space: nowrap;
  display: flex;
  flex-direction: column;

  ${({ selected }) =>
    selected
      ? css`
          transform: rotateY(5deg);
          color: var(--celeste);
        `
      : css`
          @supports (
            (text-stroke: 1px white) or (-webkit-text-stroke: 1px white)
          ) {
            color: transparent;
            -webkit-text-stroke: 1px white;
            text-stroke: 1px white;
            text-shadow: none;
          }
        `}
  /* :not(:hover) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  :hover {
    transform: rotateY(5deg);
    color: var(--celeste);
  } */
  @media screen and (max-width: 540px) {
    white-space: unset;
  }
`;

const LearnMore = styled.span`
  font-size: 18px;
  line-height: 22px;
  font-family: 'Right Gothic Wide';
  color: white;
  padding-left: 32px;
`;
