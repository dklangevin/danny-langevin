import Image from 'next/image';
import styled from 'styled-components';
import { generateSolidBackground } from '../util';
import Hidden from './Hidden';

const BREAKPOINT = 650;

export default function SkillCard({ name, icon, logo }) {
  return icon ? (
    <Container>
      <WrapIcon breakpoint={BREAKPOINT}>
        <Icon src={icon} alt="icon" width={50} height={50} />
      </WrapIcon>
      <WrapIcon mobile breakpoint={BREAKPOINT}>
        <Icon src={icon} alt="icon" width={30} height={30} />
      </WrapIcon>
      {name}
    </Container>
  ) : logo ? (
    <Container>
      <Hidden breakpoint={BREAKPOINT}>
        <Logo src={logo} alt="logo" height={50} width={200} />
      </Hidden>
      <Hidden mobile breakpoint={BREAKPOINT}>
        <Logo src={logo} alt="logo" height={30} width={160} />
      </Hidden>
    </Container>
  ) : (
    <Container>
      <Initials name={name}>{name[0]}</Initials>
      {name}
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  min-width: 200px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  :hover {
    background: rgba(50, 50, 50, 0.6);
    outline: 1px solid white;
  }
  @media screen and (max-width: ${BREAKPOINT}px) {
    font-size: 18px;
    height: 60px;
    padding-inline: 12px;
  }
`;

const WrapIcon = styled(Hidden)`
  display: 'flex';
  align-items: 'center';
`;

const Icon = styled(Image)`
  object-fit: contain;
  height: 50px;
  @media screen and (max-width: ${BREAKPOINT}px) {
    height: 30px;
  }
`;

const Logo = styled(Image)`
  object-fit: contain;
  width: fit-content;
  max-width: 100%;
`;

const Initials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  min-width: 60px;
  min-height: 60px;
  border-radius: 50%;
  background: ${({ name }) => generateSolidBackground(name)};
  @media screen and (max-width: ${BREAKPOINT}px) {
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
  }
`;
