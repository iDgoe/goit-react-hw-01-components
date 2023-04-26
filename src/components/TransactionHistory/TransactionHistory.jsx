import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.thead_tr} style={{ backgroundColor: '#00bfff' }}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tbody_tr} key={id} style={{ backgroundColor: '#ffffff' }}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// TransactionHistory.propTypes = {
//   id: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   amount: PropTypes.string.isRequired,
//   currency: PropTypes.string.isRequired,
// };

TransactionHistory.propTypes = {
    itemss: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      }),
    ),
  };