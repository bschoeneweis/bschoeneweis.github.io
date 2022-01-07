import utilStyles from '../styles/utils.module.css'

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" className={utilStyles.marginRight5px} checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default Checkbox;