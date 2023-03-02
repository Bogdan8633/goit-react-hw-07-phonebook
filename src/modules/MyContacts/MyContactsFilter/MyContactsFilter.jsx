import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selectors';
import styles from './myContactsFilter.module.css';

const MyContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input type="text" name="filter" value={filter} onChange={handleFilter} />
    </div>
  );
};

export default MyContactsFilter;
