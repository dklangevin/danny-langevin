import styled from 'styled-components';

export default function Menu({ items }) {
  return (
    <Container>
      <List>
        {items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  perspective: 600px;
`;

const Item = styled.li`
  text-align: right;
  font-family: 'Neue Montreal';
  font-weight: 900;
  font-size: 60px;
  line-height: 54px;
  transform-origin: 100% 0%;
  transform: rotateY(-20deg);
  :not(:hover) {
    @supports ((text-stroke: 1px white) or (-webkit-text-stroke: 1px white)) {
      color: transparent;
      -webkit-text-stroke: 1px white;
      text-stroke: 1px white;
      text-shadow: none;
    }
  }
  :hover {
    transform: rotateY(-5deg);
    color: var(--celeste);
  }
`;
