import PropTypes from 'prop-types';

export const Button = ({ option, onLeaveFeedback }) => {
  return (
    <button type="button" name={option} onClick={onLeaveFeedback}>
      {option}
    </button>
  );
};

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
