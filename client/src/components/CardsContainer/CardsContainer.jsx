import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getCountries } from '../../redux/actions/actions';

import SearchBar from '../Searchbar/Searchbar';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // Nuevo estado para el orden
  const [sortType, setSortType] = useState('name'); // Nuevo estado para el tipo de orden
  const [selectedContinent, setSelectedContinent] = useState(''); // Nuevo estado para el filtro de continentes
  const [currentPage, setCurrentPage] = useState(1); // Nuevo estado para la página actual

  const itemsPerPage = 10;

  useEffect(() => {
    //* acá se despacha la ACTION getCountries
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1); //* acá seteo la página a 1 cada vez que searchTerm cambia
  }, [searchTerm]);

  const filteredCountries = countries.filter(
    //* acá establezco los países filtrados, sin importar si elijo o no algún continente
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedContinent === '' || country.continent === selectedContinent)
  );

  const sortedCountries = [...filteredCountries].sort((a, b) => {
    //* resultado de los countries ordenados / usé el slice para no modificar a "countries"
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

  const handleSortChange = (event) => {
    setSortType(event.target.value);
    setSortOrder('asc');
    setCurrentPage(1);
  };

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
    setCurrentPage(1);
  };

  //************/
  //* PAGINADO */
  //************/
  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage); //* acá calculo el total de páginas teniendo en cuenta países filtrados / 10

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage; //0
  const endIndex = startIndex + itemsPerPage; //10
  const visibleCountries = sortedCountries.slice(startIndex, endIndex); //* acá muestro solo 10 países con los filtros/ordenamientos aplicados

  return (
    <div className={style.container}>
      <div className={style.filters_container}>
        <div className={style.sort}>
          <div className={style.sort_order}>
            <span>
              <label htmlFor="order" className={style.order_label}>
                Ordenar por:{' '}
              </label>
              <select
                value={sortType}
                onChange={handleSortChange}
                name="order"
                className={style.sort_type}
              >
                <option value="name">Nombre</option>
                <option value="population">Población</option>
              </select>
            </span>
            <span>
              <label htmlFor="order" className={style.order_label}>
                De manera:{' '}
              </label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                name="order"
                className={style.sort_type}
              >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
              </select>
            </span>
          </div>

          <div className={style.filters}>
            <span>
              <label htmlFor="continentFilter" className={style.order_label}>
                Filtrar por continente:{' '}
              </label>
              <select
                value={selectedContinent}
                onChange={handleContinentChange}
                name="continentFilter"
                className={style.sort_type}
              >
                <option value="">Todos los continentes</option>
                <option value="Africa">África</option>
                <option value="Antarctica">Antártida</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="North America">Norte América</option>
                <option value="Oceania">Oceanía</option>
                <option value="South America">Sudamérica</option>
              </select>
            </span>
            <span>
              <label htmlFor="continentFilter" className={style.order_label}>
                Filtrar por actividad:{' '}
              </label>
              <select
                // value={selectedContinent}
                // onChange={handleContinentChange}
                // name="continentFilter"
                className={style.sort_type}
              >
                <option value="">Todas las actividades</option>
                {/* <option value="Africa">África</option>
                <option value="Antarctica">Antártida</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europa</option>
                <option value="North America">Norte América</option>
                <option value="Oceania">Oceanía</option>
                <option value="South America">Sudamérica</option> */}
              </select>
            </span>
          </div>
          <span className={style.searchbar_container}>
            <SearchBar onSearch={setSearchTerm} />
          </span>
        </div>

        <div className={style.pages}>
          <div className={style.pages}>
            <button
              className={currentPage === 1 ? style.disabled : style.button}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className={style.page_number}>
              {currentPage} / {totalPages}
            </span>
            <button
              className={
                currentPage === totalPages ? style.disabled : style.button
              }
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <div className={style.cards_container}>
        {visibleCountries.map((country) => {
          return (
            <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag_img={country.flag_img}
              continent={country.continent}
              population={country.population}
              Activities={country.Activities} // Cambia esto según cómo se llame la relación en tu modelo
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
