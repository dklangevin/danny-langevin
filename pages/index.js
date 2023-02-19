import styled from 'styled-components';
import Image from 'next/image';
import Nav from 'components/Nav';
import { HEIGHT_MARGIN } from 'constants';

export default function Home() {
  return (
    <Container>
      <Nav />
      <Welcome>
        <NameAvatar>
          <Avatar src="/avatar.webp" width={280} height={280} />
          <Info>
            <Name>Danny</Name>
            <Name>Langevin</Name>
          </Info>
        </NameAvatar>
        <Title>
          <Celeste>Full Stack</Celeste>
          Software Engineer
        </Title>
      </Welcome>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - ${HEIGHT_MARGIN}px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
  @media screen and (max-width: 440px) {
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
  @media screen and (max-width: 440px) {
    margin-inline: auto;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  display: block;
  font-size: clamp(60px, 11.6vw, 160px);
  line-height: clamp(50px, 9.6vw, 133.33px);
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
  font-family: 'Right Gothic Wide';
  font-weight: 800;
  font-size: max(5.3vw, 32px);
  line-height: max(4.6vw, 28px);
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

const WrapMenu = styled.div`
  position: absolute;
  top: -30px;
  right: 32px;
  z-index: 1;
`;
