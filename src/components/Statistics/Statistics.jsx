import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = props => {
  return (
    <List>
      {Object.entries(props).map(([label, value]) => (
        <StatisticsItem label={label} value={value} />
      ))}
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
