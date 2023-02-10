import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1 className={s.title}>{title}</h1>
      <br />
      <h2 className={s.statisticsTitle}>Statistics:</h2>
      <br />
      {children}
    </>
  );
};

export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
