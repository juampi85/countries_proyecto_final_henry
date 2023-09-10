import styles from './SearchBar.module.css';
import { useState, useRef } from 'react';

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value); 
  };

  const refreshSearch = () => {
    setSearchValue(''); 
    onSearch(''); 
    inputRef.current.focus();
  };

  return (
    <div className={styles.divSearch}>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="Ingrese el país a buscar..."
        value={searchValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      {searchValue && ( //* acá le indico quesolo muestre el botón "X" si hay un valor en el input
        <button className={styles.buttonSearch} onClick={refreshSearch}>
          Reset
        </button>
      )}
    </div>
  );
}