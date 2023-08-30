// import { useSelector } from 'react-redux';
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ filteredCountries }) => {
  // const countries = useSelector((state) => state.countries);

  return (
    <div className={style.container}>
      {/* <p>Este componente debe renderizar todos los PAÍSES distribuidos en sus respectivos CARDS</p> */}
      {filteredCountries.map((country) => {
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
  );
};

export default CardsContainer;
