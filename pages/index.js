import styled from 'styled-components';
import Image from 'next/image';
import Nav from 'components/Nav';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
// import Menu from './menu';

export default function Home() {
  return (
    <Container>
      <Nav />
      <WrapMenu>{/* <Menu /> */}</WrapMenu>
      <Section>
        <Welcome>
          <NameAvatar>
            <Avatar src='/avatar.webp' width={280} height={280} />
            <Info>
              <Name>Danny</Name>
              <Name>Langevin</Name>
            </Info>
          </NameAvatar>
          <Title>
            <Celeste>Full Stack</Celeste>
            Software Engineer
          </Title>
          {/* <Description>
          {
            "Hi! I'm a full stack software engineer with 4+ years experience in the software field. I graduated from CU Boulder in 2019 with a B.S. in Electrical & Computer Engineering."
          }
        </Description> */}
          {/* <Description>Click on the links above to explore!</Description> */}
        </Welcome>
      </Section>
      {/* <Section id='experience'>
        <Experience />
      </Section>
      <Section id='skills'>
        <Skills />
      </Section> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Section = styled.section`
  display: flex;
  min-height: calc(100vh - 80px);
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  width: 100%;
  max-width: 1200px;
  perspective: 1000px;
`;

const NameAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  @media screen and (width < 440px) {
    flex-direction: column;
    align-items: unset;
  }
`;

const Avatar = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid white;
  width: clamp(200px, 30vw, 280px);
  height: clamp(200px, 30vw, 280px);
  @media screen and (width < 440px) {
    margin-inline: auto;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  display: block;
  font-size: max(12vw, 60px);
  line-height: max(10vw, 50px);
  font-weight: 700;
  text-transform: uppercase;
  font-style: italic;
  @supports ((text-stroke: 2px white) or (-webkit-text-stroke: 2px white)) {
    color: transparent;
    -webkit-text-stroke: 2px white;
    text-stroke: 2px white;
    text-shadow: none;
  }
`;

const Title = styled.span`
  font-weight: 900;
  font-size: max(5.5vw, 32px);
  line-height: max(4.8vw, 28px);
  text-transform: uppercase;
  text-align: justify;
  display: inline-block;
  :after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`;

const Celeste = styled.span`
  color: var(--celeste);
  display: inline-block;
  margin-right: 0.4em;
`;

const Description = styled.p`
  font-size: 22px;
  text-transform: uppercase;
`;

const WrapMenu = styled.div`
  position: absolute;
  top: -30px;
  right: 32px;
  z-index: 1;
`;
