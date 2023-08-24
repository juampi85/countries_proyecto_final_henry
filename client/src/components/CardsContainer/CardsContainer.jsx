import { useSelector } from 'react-redux';
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = () => {
  // const countries = [
  // {
  //   "id": "BRA",
  //   "name": "Brazil",
  //   "flag_img": "https://flagcdn.com/w320/br.png",
  //   "continent": "South America",
  //   "capital": "Brasília",
  //   "subregion": "South America",
  //   "area": "8515767",
  //   "population": 212559409,
  //   "Activities": [
  //     {
  //       "id": "824fa926-1b7d-42be-97cc-24c0b2d1e4ed",
  //       "name": "escabiar cual perro rabioso",
  //       "difficulty": "4",
  //       "duration": 3,
  //       "season": "Winter"
  //     },
  //     {
  //       "id": "3ab522eb-42de-4e0e-a574-fb2639db033e",
  //       "name": "correr drogado",
  //       "difficulty": "4",
  //       "duration": 3,
  //       "season": "Winter"
  //     }
  //   ]
  // },
  // {
  //   "id": "ATF",
  //   "name": "French Southern and Antarctic Lands",
  //   "flag_img": "https://flagcdn.com/w320/tf.png",
  //   "continent": "Antarctica",
  //   "capital": "Port-aux-Français",
  //   "subregion": null,
  //   "area": "7747",
  //   "population": 400,
  //   "Activities": []
  // },
  // {
  //   "id": "COL",
  //   "name": "Colombia",
  //   "flag_img": "https://flagcdn.com/w320/co.png",
  //   "continent": "South America",
  //   "capital": "Bogotá",
  //   "subregion": "South America",
  //   "area": "1141748",
  //   "population": 50882884,
  //   "Activities": []
  // },
  // {
  //   "id": "VEN",
  //   "name": "Venezuela",
  //   "flag_img": "https://flagcdn.com/w320/ve.png",
  //   "continent": "South America",
  //   "capital": "Caracas",
  //   "subregion": "South America",
  //   "area": "916445",
  //   "population": 28435943,
  //   "Activities": []
  // },
  // {
  //   "id": "TJK",
  //   "name": "Tajikistan",
  //   "flag_img": "https://flagcdn.com/w320/tj.png",
  //   "continent": "Asia",
  //   "capital": "Dushanbe",
  //   "subregion": "Central Asia",
  //   "area": "143100",
  //   "population": 9537642,
  //   "Activities": []
  // },
  // {
  //   "id": "IRQ",
  //   "name": "Iraq",
  //   "flag_img": "https://flagcdn.com/w320/iq.png",
  //   "continent": "Asia",
  //   "capital": "Baghdad",
  //   "subregion": "Western Asia",
  //   "area": "438317",
  //   "population": 40222503,
  //   "Activities": []
  // },
  // {
  //   "id": "CIV",
  //   "name": "Ivory Coast",
  //   "flag_img": "https://flagcdn.com/w320/ci.png",
  //   "continent": "Africa",
  //   "capital": "Yamoussoukro",
  //   "subregion": "Western Africa",
  //   "area": "322463",
  //   "population": 26378275,
  //   "Activities": []
  // },
  // {
  //   "id": "CHE",
  //   "name": "Switzerland",
  //   "flag_img": "https://flagcdn.com/w320/ch.png",
  //   "continent": "Europe",
  //   "capital": "Bern",
  //   "subregion": "Western Europe",
  //   "area": "41284",
  //   "population": 17500657,
  //   "Activities": []
  // },
  // {
  //   "id": "MUS",
  //   "name": "Mauritius",
  //   "flag_img": "https://flagcdn.com/w320/mu.png",
  //   "continent": "Africa",
  //   "capital": "Port Louis",
  //   "subregion": "Eastern Africa",
  //   "area": "2040",
  //   "population": 1265740,
  //   "Activities": []
  // },
  // {
  //   "id": "CMR",
  //   "name": "Cameroon",
  //   "flag_img": "https://flagcdn.com/w320/cm.png",
  //   "continent": "Africa",
  //   "capital": "Yaoundé",
  //   "subregion": "Middle Africa",
  //   "area": "475442",
  //   "population": 26545864,
  //   "Activities": []
  // },
  // {
  //   "id": "ZWE",
  //   "name": "Zimbabwe",
  //   "flag_img": "https://flagcdn.com/w320/zw.png",
  //   "continent": "Africa",
  //   "capital": "Harare",
  //   "subregion": "Eastern Africa",
  //   "area": "390757",
  //   "population": 14862927,
  //   "Activities": []
  // },
  // {
  //   "id": "EGY",
  //   "name": "Egypt",
  //   "flag_img": "https://flagcdn.com/w320/eg.png",
  //   "continent": "Africa",
  //   "capital": "Cairo",
  //   "subregion": "Northern Africa",
  //   "area": "1002450",
  //   "population": 102334403,
  //   "Activities": []
  // },
  // {
  //   "id": "GRD",
  //   "name": "Grenada",
  //   "flag_img": "https://flagcdn.com/w320/gd.png",
  //   "continent": "North America",
  //   "capital": "St. George's",
  //   "subregion": "Caribbean",
  //   "area": "344",
  //   "population": 112519,
  //   "Activities": []
  // },
  // {
  //   "id": "IOT",
  //   "name": "British Indian Ocean Territory",
  //   "flag_img": "https://flagcdn.com/w320/io.png",
  //   "continent": "Asia",
  //   "capital": "Diego Garcia",
  //   "subregion": "Eastern Africa",
  //   "area": "60",
  //   "population": 3000,
  //   "Activities": []
  // },
  // {
  //   "id": "ALA",
  //   "name": "Åland Islands",
  //   "flag_img": "https://flagcdn.com/w320/ax.png",
  //   "continent": "Europe",
  //   "capital": "Mariehamn",
  //   "subregion": "Northern Europe",
  //   "area": "1580",
  //   "population": 29458,
  //   "Activities": []
  // },
  // {
  //   "id": "ROU",
  //   "name": "Romania",
  //   "flag_img": "https://flagcdn.com/w320/ro.png",
  //   "continent": "Europe",
  //   "capital": "Bucharest",
  //   "subregion": "Southeast Europe",
  //   "area": "238391",
  //   "population": 19286123,
  //   "Activities": []
  // },
  // {
  //   "id": "NIC",
  //   "name": "Nicaragua",
  //   "flag_img": "https://flagcdn.com/w320/ni.png",
  //   "continent": "North America",
  //   "capital": "Managua",
  //   "subregion": "Central America",
  //   "area": "130373",
  //   "population": 6624554,
  //   "Activities": []
  // },
  // {
  //   "id": "AGO",
  //   "name": "Angola",
  //   "flag_img": "https://flagcdn.com/w320/ao.png",
  //   "continent": "Africa",
  //   "capital": "Luanda",
  //   "subregion": "Middle Africa",
  //   "area": "1246700",
  //   "population": 32866268,
  //   "Activities": []
  // },
  // {
  //   "id": "TTO",
  //   "name": "Trinidad and Tobago",
  //   "flag_img": "https://flagcdn.com/w320/tt.png",
  //   "continent": "North America",
  //   "capital": "Port of Spain",
  //   "subregion": "Caribbean",
  //   "area": "5130",
  //   "population": 1399491,
  //   "Activities": []
  // },
  // {
  //   "id": "JEY",
  //   "name": "Jersey",
  //   "flag_img": "https://flagcdn.com/w320/je.png",
  //   "continent": "Europe",
  //   "capital": "Saint Helier",
  //   "subregion": "Northern Europe",
  //   "area": "116",
  //   "population": 100800,
  //   "Activities": []
  // },
  // {
  //   "id": "SYR",
  //   "name": "Syria",
  //   "flag_img": "https://flagcdn.com/w320/sy.png",
  //   "continent": "Asia",
  //   "capital": "Damascus",
  //   "subregion": "Western Asia",
  //   "area": "185180",
  //   "population": 17500657,
  //   "Activities": []
  // },
  // {
  //   "id": "GGY",
  //   "name": "Guernsey",
  //   "flag_img": "https://flagcdn.com/w320/gg.png",
  //   "continent": "Europe",
  //   "capital": "St. Peter Port",
  //   "subregion": "Northern Europe",
  //   "area": "78",
  //   "population": 62999,
  //   "Activities": []
  //   }
  // ]

  const countries = useSelector(state => state.countries)
  
  return (
    <div className={style.container}>
      {/* <p>Este componente debe renderizar todos los PAÍSES distribuidos en sus respectivos CARDS</p> */}
      {
        countries.map(country => {
          return <Card
            key={country.id}
            name={country.name}
            flag_img={country.flag_img}
            continent={country.continent}
          />

        })
      }
    </div>
  );
};

export default CardsContainer;
