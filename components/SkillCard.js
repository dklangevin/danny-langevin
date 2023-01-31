import styled from 'styled-components';
import Image from 'next/image';
import {
  generateLinearGradientBackground,
  generateSolidBackground,
} from '@/util';

export default function SkillCard({ name, icon, logo }) {
  return icon ? (
    <Container>
      <Icon src={icon} alt='icon' width={50} height={50} />
      {name}
    </Container>
  ) : logo ? (
    <Container>
      <Logo src={logo} alt='logo' height={50} width={200} />
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
`;

const Icon = styled(Image)`
  object-fit: contain;
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
`;
