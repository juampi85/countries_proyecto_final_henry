import styles from './SearchBar.module.css';
import { useState, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCountryByName } from '../../redux/actions/actions';

export default function SearchBar({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  // const refreshSearch = () => { 
  //   onSearch(''); // Llama a la función de básqueda desde las props
  // }

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    onSearch(value); // Llama a la función de búsqueda desde las props
  };

  const refreshSearch = () => {
    setSearchValue(''); // Limpia el valor del input
    onSearch(''); // Llama a la función de búsqueda con un valor vacío
    inputRef.current.focus(); // Hace focus en el input
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
      {searchValue && ( // Muestra el botón "X" solo si hay un valor en el input
        <button className={styles.buttonSearch} onClick={refreshSearch}>
          X
        </button>
      )}
    </div>
  );
}

//************************/
//* Solución con ACTIONS */
//************************/
// export default function SearchBar() {
//   const dispatch = useDispatch();

//   function handleChange(e) {
//     dispatch(getCountryByName(e.target.value));
//   }

//   return (
//     <div className={styles.divSearch}>
//       <input
//         type="text"
//         className={styles.inputSearch}
//         placeholder="Ingrese el país a buscar..."
//         onChange={handleChange}
//       />
//     </div>
//   );
// }
