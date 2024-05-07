import css from "./SearchBox.module.css";

//екшен зміни фільтра при введенні в текстове поле

export default function SearchBox({ value, onFilter }) {
  const handleSearch = (event) => {
    onFilter(event.target.value);
  };
  return (
    <div className={css.search}>
      <label>Find contacts by name</label>
      <input
        type="text"
        name="search"
        value={value}
        onChange={handleSearch}
        className={css.inputSearch}
      ></input>
    </div>
  );
}
