import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ListItem = styled.li`
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border: 1px solid #ccc;
`;

const ListDot = styled.span`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

const ListImg = styled.img`
  width: 100px;
  border-radius: 25%;
`;

const ListName = styled.span`
  font-size: 1rem;
`;

export { List, ListItem, ListDot, ListImg, ListName, ListContainer };
