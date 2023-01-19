import styled from 'styled-components';
import Image from 'next/image';
import Nav from 'components/Nav';

export default function Home() {
  return (
    <Container>
      <Nav />
      <Section>
        <NameAvatar>
          <Avatar src='/avatar.webp' width={280} height={280} />
          <Info>
            <Name>Danny Langevin</Name>
          </Info>
        </NameAvatar>
        <Title>
          <Grey>Full Stack</Grey> Software Engineer
        </Title>
        {/* <Description>
          {
            "Hi! I'm a full stack software engineer with 4+ years experience in the software field. I graduated from CU Boulder in 2019 with a B.S. in Electrical & Computer Engineering."
          }
        </Description> */}
        {/* <Description>Click on the links above to explore!</Description> */}
      </Section>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  /* max-width: 1000px; */
`;

const NameAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Avatar = styled(Image)`
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid white;
`;

// const Name = styled.span`
//   font-size: 30px;
//   font-weight: 900;
//   text-align: center;
// `;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// const Name = styled.img`
//   width: 300px;
// `;

const Name = styled.span`
  font-size: 120px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 100px;
  font-style: italic;
  @supports ((text-stroke: 2px white) or (-webkit-text-stroke: 2px white)) {
    color: transparent;
    -webkit-text-stroke: 2px white;
    text-stroke: 2px white;
    text-shadow: none;
  }
  max-width: 610px;
`;

const Title = styled.span`
  /* width: 100%; */
  font: 900 40px 'Monument';
  /* font-size: 60px; */
  line-height: 36px;
  /* font-weight: 900; */
  text-transform: uppercase;
  text-align: justify;
  display: inline-block;
  :after {
    content: '';
    display: inline-block;
    width: 100%;
  }
`;

const Grey = styled.span`
  color: turquoise;
  display: inline-block;
`;

const Description = styled.p`
  font-size: 22px;
  text-transform: uppercase;
`;
