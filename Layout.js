import styled from 'styled-components';
import Nav from './components/Nav';

export default function Layout({ Component, pageProps }) {
  return (
    <Container>
      <Noise />
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
  height: 100%;
  /* height: calc(100vh - 80px); */
  /* position: absolute;
  top: 80px;
  left: 0; */
  margin-top: 80px;
  z-index: 1;
`;

const Noise = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  :after {
    content: '';
    height: 300%;
    width: 300%;
    opacity: 0.1;
    position: fixed;
    background-image: url(/noise.png);
    animation: grain 1s steps(10) infinite;
  }
`;
