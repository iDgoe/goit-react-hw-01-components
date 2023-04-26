import css from './Ststistics.module.css';
import PropTypes from 'prop-types';


const newColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.7 +
      ')';
  return color;
};

      export const Statistics = ({ title, stats }) => {
        return (
          <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
      
            <ul className={css.stats__list}>
              {stats.map(({ id, label, percentage }) => {
                return (
                  <li
                    className={css.stats}
                    key={id}
                    style={{ backgroundColor: newColor() }}
                  >
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      };
      
    //   Statistics.propTypes = {
    //     title: propTypes.string,
    //     // stats: propTypes.number.isRequired,
    //     stats: propTypes.exact({followers: propTypes.string, views: propTypes.string, likes: propTypes.number})
    //   };

    Statistics.propTypes = {
        title: PropTypes.string,
        stats: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          }),
        ),
      };