// import CardsContainer from '../../components/CardsContainer/CardsContainer';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getCountries } from '../../redux/actions/actions';
// import SearchBar from '../../components/Searchbar/Searchbar';

// const Home = () => {
//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.countries);
//   const [startIndex, setStartIndex] = useState(0);
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [selectedContinent, setSelectedContinent] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     dispatch(getCountries());
//   }, [dispatch]);

//   const handleNext = () => {
//     setStartIndex(startIndex + 10);
//   };

//   const handlePrev = () => {
//     setStartIndex(Math.max(startIndex - 10, 0));
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//     setStartIndex(0);
//   };

//   const handleSortChange = (event) => {
//     setSortOrder(event.target.value);
//   };

//   const handleContinentChange = (event) => {
//     setSelectedContinent(event.target.value);
//     setStartIndex(0); // Reiniciar el índice al cambiar el continente
//   };

//   const filteredCountries = countries.filter(
//     (country) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedContinent === '' || country.continent === selectedContinent)
//   );
//   const sortedCountries = filteredCountries.slice().sort((a, b) => {
//     //* ORDENANDO POR NOMBRE Y POBLACIÓN
//     if (sortOrder === 'name_asc') {
//       return a.name.localeCompare(b.name);
//     } else if (sortOrder === 'name_desc') {
//       return b.name.localeCompare(a.name);
//     } else if (sortOrder === 'population_asc') {
//       return a.population - b.population;
//     } else if (sortOrder === 'population_desc') {
//       return b.population - a.population;
//     }
//   });

//   // const visibleCountries = countries.slice(startIndex, startIndex + 10);
//   const visibleCountries = sortedCountries.slice(startIndex, startIndex + 10);

//   return (
//     <div>
//       <h1>Esta es la vista de la HOME</h1>
//       <SearchBar onSearch={setSearchTerm} />
//       <div>
//         <label htmlFor="search">Buscar País</label>
//         <input
//           type="text"
//           name="search"
//           value={searchTerm}
//           onChange={handleSearch}
//           placeholder="Buscar país"
//         />
//       </div>
//       <div>
//         <label htmlFor="order">Ordenar por Nombre: </label>
//         <select value={sortOrder} onChange={handleSortChange} name="order">
//           <option value="name_asc">Ascendente</option>
//           <option value="name_desc">Descendente</option>
//           <option value="population_asc">Población Ascendente</option>
//           <option value="population_desc">Población Descendente</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="continentFilter"></label>
//         <select
//           value={selectedContinent}
//           onChange={handleContinentChange}
//           name="continentFilter"
//         >
//           <option value="">Todos los continentes</option>
//           <option value="Africa">África</option>
//           <option value="South America">Sudamérica</option>
//           <option value="North America">Norte América</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europa</option>
//           <option value="Oceania">Oceanía</option>
//         </select>
//       </div>
//       <button onClick={handlePrev} disabled={startIndex === 0}>
//         Anterior
//       </button>
//       <button
//         onClick={handleNext}
//         disabled={startIndex + 10 >= countries.length}
//       >
//         Siguiente
//       </button>
//       <CardsContainer countries={visibleCountries} />
//     </div>
//   );
// };


import CardsContainer from '../../components/CardsContainer/CardsContainer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions/actions';
// import SearchBar from '../../components/Searchbar/Searchbar';

const Home = () => {
  const dispatch = useDispatch();
  // const countries = useSelector((state) => state.countries);
  // const [startIndex, setStartIndex] = useState(0);
  // const [sortOrder, setSortOrder] = useState('asc');
  // const [selectedContinent, setSelectedContinent] = useState('');
  // const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  // const handleNext = () => {
  //   setStartIndex(startIndex + 10);
  // };

  // const handlePrev = () => {
  //   setStartIndex(Math.max(startIndex - 10, 0));
  // };

  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  //   setStartIndex(0);
  // };

  // const handleSortChange = (event) => {
  //   setSortOrder(event.target.value);
  // };

  // const handleContinentChange = (event) => {
  //   setSelectedContinent(event.target.value);
  //   setStartIndex(0); // Reiniciar el índice al cambiar el continente
  // };

  // const filteredCountries = countries.filter(
  //   (country) =>
  //     country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
  //     (selectedContinent === '' || country.continent === selectedContinent)
  // );
  // const sortedCountries = filteredCountries.slice().sort((a, b) => {
  //   //* ORDENANDO POR NOMBRE Y POBLACIÓN
  //   if (sortOrder === 'name_asc') {
  //     return a.name.localeCompare(b.name);
  //   } else if (sortOrder === 'name_desc') {
  //     return b.name.localeCompare(a.name);
  //   } else if (sortOrder === 'population_asc') {
  //     return a.population - b.population;
  //   } else if (sortOrder === 'population_desc') {
  //     return b.population - a.population;
  //   }
  // });

  // // const visibleCountries = countries.slice(startIndex, startIndex + 10);
  // const visibleCountries = sortedCountries.slice(startIndex, startIndex + 10);

  return (
    <div>
      <h1>Esta es la vista de la HOME</h1>
      {/* <SearchBar onSearch={setSearchTerm} /> */}
      <div>
        <label htmlFor="search">Buscar País</label>
        <input
          type="text"
          name="search"
          // value={searchTerm}
          // onChange={handleSearch}
          placeholder="Buscar país"
        />
      </div>
      <div>
        <label htmlFor="order">Ordenar por Nombre: </label>
        <select
          // value={sortOrder}
          // onChange={handleSortChange}
          name="order">
          <option value="name_asc">Ascendente</option>
          <option value="name_desc">Descendente</option>
          <option value="population_asc">Población Ascendente</option>
          <option value="population_desc">Población Descendente</option>
        </select>
      </div>
      <div>
        <label htmlFor="continentFilter"></label>
        <select
          // value={selectedContinent}
          // onChange={handleContinentChange}
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
      <button
        // onClick={handlePrev}
        // disabled={startIndex === 0}
      >
        Anterior
      </button>
      <button
        // onClick={handleNext}
        // disabled={startIndex + 10 >= countries.length}
      >
        Siguiente
      </button>
      <CardsContainer />
    </div>
  );
};

export default Home;
