import styled from 'styled-components';
import Nav from './components/Nav';

export default function Layout({ Component, pageProps }) {
  return (
    <Container>
      <Nav />
      <Content>
        <Component {...pageProps} />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  position: absolute;
  top: 80px;
  left: 0;
`;
