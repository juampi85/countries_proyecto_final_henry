import { useState, useRef } from 'react';
import style from './Form.module.css';
import axios from 'axios';
import { validateForm } from './FormValidations';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: [],
  });

  const [errors, setErrors] = useState({
    name: '',
    difficulty: '',
    duration: '',
    season: '',
    countries: '',
  });

  const nameInputRef = useRef(null);

  // const [searchTerm, setSearchTerm] = useState('');
  // const [selectedCountries, setSelectedCountries] = useState([]);

  const changeHandler = (event) => {
    const newForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newForm);

    const newErrors = validateForm(newForm);
    setErrors(newErrors);
  };

  // const hasErrors = () => {
  //   //Esta función recorre los valores del objeto errors y devuelve true si encuentra al menos un error no vacío.
  //   return Object.values(errors).some((error) => error !== '');
  // };

  const areAllErrorsResolved = () => {
    const allFieldsFilled = Object.values(form).every((value) => value !== '');
    const noUnresolvedErrors = Object.values(errors).every(
      (error) => error === ''
    );

    return allFieldsFilled && noUnresolvedErrors;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:3001/activities', form)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((error) => {
        if (error.response && error.response.data) {
          alert(error.response.data.message); // Mostrar el mensaje de error personalizado
        } else {
          alert('Error en el servidor'); // Mensaje genérico en caso de otro tipo de error
        }
      });
    console.log(form);

    setForm({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    });
    nameInputRef.current.focus();
  };

  return (
    <form onSubmit={submitHandler} className={style.container}>
      {/* <div>
        <label htmlFor="name">Actividad:</label>
        <input
          type="text"
          value={form.name}
          onChange={changeHandler}
          name="name"
          ref={nameInputRef}
        />
        {errors.name && <span>{errors.name}</span>}
      </div> */}
      <div>
        <label htmlFor="name">Actividad:</label>
        <select value={form.name} onChange={changeHandler} name="name">
          <option value="">Elija la actividad turística</option>
          <option value="correr sobre cerros empinados">
            Correr sobre unos cerros empinados
          </option>
          <option value="andar en kayak">Pistear en kayak como un campeón</option>
          <option value="karting">
            Soñar con ser Lewis Hamilton en plena Monza
          </option>
          <option value="jugar al padel">
            Jugar al deporte de los rebotes infinitos
          </option>
          <option value="caminar por sendero">
            Caminar de noche por senderos cuasi salvajes
          </option>
          <option value="nadar con reptiles">
            Aprovechar para nadar en una laguna con algún que otro reptil cerca
            juguetón
          </option>
          <option value="descenso en rapel">Meter una bajada montañosa a puro rapel</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty">Dificultad:</label>
        <input
          type="number"
          value={form.difficulty}
          onChange={changeHandler}
          name="difficulty"
        />
        {errors.difficulty && <span>{errors.difficulty}</span>}
        {/* <label htmlFor="difficulty">Dificultad:</label>
        <select onChange={changeHandler}>
          <option value="">Elija el nivel de dificultad</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
          {errors.difficulty && <span>{errors.difficulty}</span>} */}
      </div>

      <div>
        <label htmlFor="duration">Duración:</label>
        <input
          type="number"
          value={form.duration}
          onChange={changeHandler}
          name="duration"
        />
        {errors.duration && <span>{errors.duration}</span>}
      </div>

      <div>
        <label htmlFor="season">Temporada:</label>
        <input
          type="text"
          value={form.season}
          onChange={changeHandler}
          name="season"
        />
        {errors.season && <span>{errors.season}</span>}
      </div>
      {/* <div>
        <label htmlFor="season">Temporada:</label>
        <select onChange={changeHandler}>
        <option value="">Selecciona una opción</option>
        <option value="winter">Invierno</option>
        <option value="spring">Primavera</option>
        <option value="summer">Verano</option>
        <option value="autumn">Otoño</option>
        </select>
        {errors.season && <span>{errors.season}</span>}
      </div> */}

      <div>
        <label htmlFor="countries">País/es:</label>
        <input
          type="text"
          // value={form.countries}
          value={form.countries}
          onChange={changeHandler}
          name="countries"
        />
        {errors.countries && <span>{errors.countries}</span>}
      </div>
      {/* <button type="submit" className={style.button} disabled={hasErrors()}> */}
      <button
        type="submit"
        className={style.button}
        disabled={!areAllErrorsResolved()}
      >
        SUBMIT
      </button>
    </form>
  );
};

export default Form;
