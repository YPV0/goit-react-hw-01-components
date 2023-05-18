import React from 'react';
import PropTypes from 'prop-types';
import {
  StatsList,
  StatsSection,
  StatsTitle,
  StatsItem,
  StatsItemExt,
  StatsPercent,
} from './stats.styled';

export default function Stats({ title, info }) {
  return (
    <StatsSection>
      <StatsTitle>{title}</StatsTitle>
      <StatsList>
        {info.map(stat => {
          return (
            <StatsItem key={stat.id}>
              <StatsItemExt>{stat.label}</StatsItemExt>
              <StatsPercent>{stat.percentage}</StatsPercent>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsSection>
  );
}

Stats.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
