import style from './Card.module.css';


const Card = ({ name, continent, flag_img }) => {
  return (  
    <div className={style.container}>
      {/* <p>Este componente debe mostrar CADA PAÍS mapeado y, además, mostrar un LINK para poder acceder al DETALLE de dicho PAÍS</p> */}
      <h2>Country: {name}</h2>
      <img src={flag_img} alt="" />
      <h3>Continent: {continent}</h3>
    </div>
  )
}

export default Card