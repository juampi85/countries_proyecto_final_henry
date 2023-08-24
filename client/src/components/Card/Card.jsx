import style from './Card.module.css';


const Card = ({ name, continent }) => {
  return (  
    <div className={style.container}>
      {/* <p>Este componente debe mostrar CADA PAÍS mapeado y, además, mostrar un LINK para poder acceder al DETALLE de dicho PAÍS</p> */}
      <h2>Country: {name}</h2>
      {/* {props.flag_img} */}
      <h3>Continent: {continent}</h3>
    </div>
  )
}

export default Card