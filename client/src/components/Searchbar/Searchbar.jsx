import styles from './SearchBar.module.css';
// import { useDispatch } from 'react-redux';
// import { getCountryByName } from '../../redux/actions/actions';

export default function SearchBar({ onSearch }) {
  const handleInputChange = (event) => {
    const searchValue = event.target.value;
    onSearch(searchValue); // Llama a la función de búsqueda desde las props
  };

  return (
    <div className={styles.divSearch}>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="Ingrese el país a buscar..."
        onChange={handleInputChange}
      />
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
