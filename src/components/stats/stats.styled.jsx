import styled from 'styled-components';

// Helper function for generating random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #dee2e6;
  background-color: #fffffc;
  width: 300px;
  margin: 0 auto;
`;

const StatsTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const StatsList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  border: 1px solid #dee2e6;
  padding: 10px 13.6px;
  background-color: ${() => getRandomColor()};
`;

const StatsItemExt = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

const StatsPercent = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;

export {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsItem,
  StatsItemExt,
  StatsPercent,
};
