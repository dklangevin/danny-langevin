import styled from 'styled-components';
import Image from 'next/image';

export default function SkillCard({ name, icon, logo }) {
  return icon ? (
    <Container>
      <Icon src={`/icons/${icon}`} alt='icon' width={50} height={50} />
      {name}
    </Container>
  ) : (
    <Container>
      <Logo src={logo} alt='logo' height={50} width={200} />
    </Container>
  );
}

const Container = styled.div`
  height: 100px;
  padding-inline: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.2);
  font-size: 24px;
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
