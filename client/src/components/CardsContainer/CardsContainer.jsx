import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getActivities, getCountries } from '../../redux/actions/actions';

import SearchBar from '../Searchbar/Searchbar';
import Card from '../Card/Card';
import style from './CardsContainer.module.css';

const CardsContainer = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortType, setSortType] = useState('name'); 
  const [selectedContinent, setSelectedContinent] = useState(''); 
  const [selectedActivity, setSelectedActivity] = useState(''); 
  const [currentPage, setCurrentPage] = useState(1); 
  const [filteredCountries, setFilteredCountries] = useState([]); 

  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities(selectedActivity));
  }, [dispatch, selectedActivity]);

  const uniqueActivityNames = Array.from(
    new Set(activities.map((activity) => activity.name))
  );

  useEffect(() => {
    setCurrentPage(1); //* acá seteo la página a 1 cada vez que searchTerm cambia
  }, [searchTerm]);

  useEffect(() => {
    setFilteredCountries(
      countries.filter(
        //* acá establezco los países filtrados, sin importar si elijo o no algún continente o actividdad
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (selectedContinent === '' ||
            country.continent === selectedContinent) &&
          (selectedActivity === '' ||
            country.Activities.some(
              (activity) => activity.name === selectedActivity
            ))
      )
    );
  }, [countries, searchTerm, selectedContinent, selectedActivity]);

  let sortedCountries = [...filteredCountries].sort((a, b) => {
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

          <div className={style.search_pages}>
            <span>
              <SearchBar onSearch={setSearchTerm} />
            </span>
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
                  currentPage === totalPages || currentPage > totalPages
                    ? style.disabled
                    : style.button
                }
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={
                  currentPage === totalPages || currentPage > totalPages
                }
              >
                Siguiente
              </button>
            </div>
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
              <label htmlFor="activityFilter" className={style.order_label}>
                Filtrar por actividad:{' '}
              </label>
              <select
                value={selectedActivity}
                onChange={(e) => setSelectedActivity(e.target.value)}
                name="activityFilter"
                className={style.sort_type}
              >
                <option value="">Todas las actividades</option>
                {uniqueActivityNames.map((name) => {
                  return (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  );
                })}
              </select>
            </span>
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
              Activities={country.Activities}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardsContainer;