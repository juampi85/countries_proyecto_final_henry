import styles from './SearchBar.module.css';

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
