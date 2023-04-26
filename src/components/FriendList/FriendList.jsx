import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    // console.log(friends);
  
    return (
      <div className={css.friends}>
        <ul className={css.friends__list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={css.friends__item} key={id}>
              <span className={`${css.friends__status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img className={css.avatar} src={avatar} alt={name} width="48" />
              <p className={css.friends__name}>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  // FriendList.propTypes = {
  //   avatar: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired,
  //   isOnline: PropTypes.bool.isRequired,
  //   id: PropTypes.number.isRequired,
  // };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ),
  };