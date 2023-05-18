import styled from 'styled-components';

const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e6;
  background-color: #fffffc;
  width: 300px;
`;

const ProfileImg = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
`;

const ProfileName = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const ProfileTag = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #6c757d;
`;

const ProfileLocation = styled.p`
  font-size: 1rem;
  margin: 0;
  color: #6c757d;
`;

const ProfileFooter = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0;
`;
const ProfileStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export {
  ProfileCard,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileFooter,
  ProfileStats,
};
