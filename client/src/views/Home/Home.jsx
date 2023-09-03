import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
import SearchBar from '../../components/Searchbar/Searchbar';
import style from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Nuevo estado para el orden
  const [sortType, setSortType] = useState('name'); // Nuevo estado para el tipo de orden
  const [selectedContinent, setSelectedContinent] = useState(''); // Nuevo estado para el filtro de continentes
  const [currentPage, setCurrentPage] = useState(1); // Nuevo estado para la página actual

  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

   useEffect(() => {
     setCurrentPage(1); // Setea la página a 1 cada vez que searchTerm cambia
   }, [searchTerm]);

   const filteredCountries = countries.filter(
     (country) =>
       country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
       (selectedContinent === '' || country.continent === selectedContinent)
   );

  const sortedCountries = filteredCountries.slice().sort((a, b) => {
    if (sortType === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortType === 'population') {
      return sortOrder === 'asc'
        ? a.population - b.population
        : b.population - a.population;
    }
  });

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    setSortOrder('asc');
    setCurrentPage(1);
  };

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (selectedContinent !== '') {
      setCurrentPage(1);
    }
  };

  const visibleCountries = sortedCountries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <div>
      <div className={style.home_container}>
        <span className={style.searchbar_container}>
          <label htmlFor={<SearchBar />}> Buscar País</label>
          <SearchBar onSearch={setSearchTerm} />
        </span>
        {/* <div className={style.search}>
          <label htmlFor="search">Buscar País</label>
          <input
            type="text"
            name="search"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Buscar país"
          />
        </div> */}
        <div className={style.search}>
          <label htmlFor="order">Ordenar por: </label>
          <select value={sortType} onChange={handleSortChange} name="order">
            <option value="name">Nombre</option>
            <option value="population">Población</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            name="order"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
        </div>
        <div className={style.search}>
          <label htmlFor="continentFilter">Filtrar por continente: </label>
          <select
            value={selectedContinent}
            onChange={handleContinentChange}
            name="continentFilter"
          >
            <option value="">Todos los continentes</option>
            <option value="Africa">África</option>
            <option value="South America">Sudamérica</option>
            <option value="North America">Norte América</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europa</option>
            <option value="Oceania">Oceanía</option>
          </select>
        </div>
        <div className={style.pages}>
          {currentPage > 1 && (
            <button
              className={style.button}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Anterior
            </button>
          )}
          {currentPage < totalPages && (
            <button
              className={style.button}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
      <CardsContainer filteredCountries={visibleCountries} />
    </div>
  );
};

export default Home;