import s from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ massege }) => {
  return <p className={s.notification}>{massege}</p>;
};

export default Notification;

Notification.propTypes = {
  massege: PropTypes.string.isRequired,
};
