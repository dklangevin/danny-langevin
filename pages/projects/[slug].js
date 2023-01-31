import styled from 'styled-components';
import { projects } from '../../constants';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconGithub } from 'icons';

export default function Projects() {
  const router = useRouter();
  const { slug } = router.query;
  const { name, preview, link, github, shortDescription, description } =
    projects.find((p) => p.slug === slug) || {};
  return (
    <Container>
      <Content>
        <WrapPreview>
          {preview && <Preview src={preview} fill sizes='900px'></Preview>}
        </WrapPreview>
        <HeaderRow>
          <Name href={link} target='_blank'>
            {name}
            {/* <Link href={`/projects/${slug}`}>{name}</Link> */}
          </Name>
          <ShortDescription>{shortDescription}</ShortDescription>
        </HeaderRow>

        <Info>
          <Row></Row>
          <Row>
            <GithubIcon />
            <TextLink href={github}>{github}</TextLink>
          </Row>
          <Description>{description}</Description>
        </Info>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
`;

const WrapPreview = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: flex-end;
  position: relative;
`;

const Preview = styled(Image)`
  object-fit: cover;
  object-position: top;
  /* height: unset !important; */
  margin-top: auto;
  border-radius: 20px 20px 0 0;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 32px;
`;

const Name = styled.a`
  font-size: 56px;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
  /* @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
    color: transparent;
    -webkit-text-stroke: 1px white;
    text-stroke: 1px white;
    text-shadow: none;
  } */
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 200;
`;

const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -42px;
  padding-inline: 32px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;

const ShortDescription = styled.span`
  font-family: 'Glamsy';
  font-size: 28px;
  font-weight: 800;
  color: var(--celeste);
  white-space: nowrap;
  text-transform: uppercase;
  font-style: italic;
`;

const Description = styled.p`
  font: 400 28px 'Formula';
`;

const GithubIcon = styled(IconGithub)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const TextLink = styled.a`
  font-size: 14px;
  text-decoration: underline;
`;
