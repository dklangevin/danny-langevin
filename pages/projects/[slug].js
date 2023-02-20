import SkillCard from 'components/SkillCard';
import { allSkills, projects } from '../../constants';
import { IconGithub, IconLink } from 'icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import styled from 'styled-components';
import Hidden from 'components/Hidden';

const BREAKPOINT = 650;

export default function Projects() {
  const router = useRouter();
  const { slug } = router.query;
  const {
    name,
    preview,
    link,
    github,
    shortDescription,
    description,
    technologies,
    otherTechnologies,
  } = projects.find((p) => p.slug === slug) || {};

  const skills = useMemo(
    () =>
      technologies?.map((technology) =>
        allSkills.find((skill) => skill.name === technology)
      ),
    [technologies]
  );

  return (
    <Container>
      <Content>
        <Hidden fullWidth breakpoint={BREAKPOINT}>
          <WrapPreview>
            {preview && <Preview src={preview} fill sizes="900px"></Preview>}
          </WrapPreview>
        </Hidden>
        <Hidden mobile fullWidth breakpoint={BREAKPOINT}>
          {preview && <Preview src={preview} sizes="900px"></Preview>}
        </Hidden>
        <HeaderRow>
          <Name href={link} target="_blank" rel="noreferrer">
            {name}
          </Name>
          <ShortDescription>{shortDescription}</ShortDescription>
        </HeaderRow>

        <Info>
          <Links>
            <WrapLink>
              <LinkIcon />
              <TextLink href={link} target="_blank" rel="noreferrer">
                Visit Live Site
              </TextLink>
            </WrapLink>
            <WrapLink>
              <GithubIcon />
              <TextLink href={github} target="_blank" rel="noreferrer">
                {github}
              </TextLink>
            </WrapLink>
          </Links>
          <Description>{description}</Description>
        </Info>

        <Subtitle>Featured Technologies</Subtitle>
        <Technologies>
          {skills?.map(({ name, icon, logo }, i) => (
            <SkillCard name={name} icon={icon} logo={logo} key={i} />
          ))}
        </Technologies>

        {otherTechnologies.length > 0 && (
          <>
            <Subtitle>Other Technologies</Subtitle>
            <OtherTechnologies>
              {otherTechnologies?.map((otherTechnology, i) => (
                <OtherTechnology key={i}>{otherTechnology}</OtherTechnology>
              ))}
            </OtherTechnologies>
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  padding: 32px;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 900;
  gap: 32px;
`;

const WrapPreview = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: flex-end;
  position: relative;
  /* @media screen and (max-width: 650px) {
    height: unset;
  } */
`;

const Preview = styled(Image)`
  width: 100%;
  object-fit: cover;
  object-position: top;
  margin-top: auto;
  border-radius: 20px 20px 0 0;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  @media screen and (max-width: ${BREAKPOINT}px) {
    object-fit: contain;
    height: fit-content;
    margin-inline: -32px;
    width: calc(100% + 64px);
  }
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Name = styled.a`
  font-size: 56px;
  width: 100%;
  white-space: nowrap;
  cursor: pointer;
  position: relative;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  gap: 36px;
  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 8px;
  }
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
    padding: 0;
  }
`;

const ShortDescription = styled.span`
  font-family: 'Right Gothic Wide';
  font-size: 28px;
  font-weight: 800;
  color: var(--celeste);
  white-space: nowrap;
  text-transform: uppercase;
  font-style: italic;
`;

const Description = styled.p`
  font-size: 28px;
  font-weight: 400;
  @media screen and (max-width: 780px) {
    font-size: 22px;
  }
`;

const WrapLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 200;
`;

const LinkIcon = styled(IconLink)`
  width: 36px;
  height: 36px;
  cursor: pointer;
  fill: white;
  transform: rotate(-45deg);
`;

const GithubIcon = styled(IconGithub)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const TextLink = styled.a`
  font-size: 18px;
  text-decoration: underline;
`;

const Technologies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

const OtherTechnologies = styled.ul`
  width: 100%;
  padding: 32px;
  list-style-type: disc;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 16px;
`;

const OtherTechnology = styled.li`
  display: list-item;
`;

const Subtitle = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  :after {
    content: '';
    display: block;
    width: 100%;
    height: 0px;
    border: 1px solid #eeeeee33;
    margin-top: 1px;
  }
`;
