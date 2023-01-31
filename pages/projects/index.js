import styled from 'styled-components';
import { projects } from '../../constants';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import Menu from '../../components/Menu';

export default function Projects() {
  const [preview, setPreview] = useState();
  return (
    <Container>
      <WrapPreview>
        {preview && <Preview src={preview} fill sizes='900px'></Preview>}
      </WrapPreview>
      {/* <Menu items={projects.map(({ name }) => name)} /> */}
      {/* <List>
        {projects.map(({ name, preview, slug }, i) => (
          <li
            key={i}
            onMouseEnter={() => setPreview(preview)}
            onMouseLeave={() => setPreview()}
          >
            <Name href={`/projects/${slug}`}>{name}</Name>
          </li>
        ))}
      </List> */}
      <List>
        {projects.map(({ name, slug, preview }) => (
          <Item
            key={name}
            href={`/projects/${slug}`}
            onMouseEnter={() => setPreview(preview)}
            onMouseLeave={() => setPreview()}
          >
            {name}
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
`;

const WrapPreview = styled.div`
  width: 100%;
  max-width: 900px;
  /* height: 100%; */
  display: flex;
  align-items: flex-end;
  position: relative;
  margin-bottom: 32px;
  /* perspective: 2000px; */
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
  /* transform: rotateY(20deg); */
  margin-left: 64px;
  /* linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 70%, rgba(0, 0, 0, 0) 100%); */
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

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 80px;
  perspective: 1000px;
`;

const Item = styled(Link)`
  text-align: right;
  font-family: 'Neue Montreal';
  font-weight: 900;
  font-size: 80px;
  line-height: 68px;
  transform-origin: 100% 0%;
  transform: rotateY(-20deg);
  :not(:hover) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  :hover {
    transform: rotateY(-5deg);
    color: var(--celeste);
  }
`;
