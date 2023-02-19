import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      {'\u00A9 February 2023, Danny Langevin. All rights reserved.'}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 16px;
`;
