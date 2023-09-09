import { useState, useEffect } from 'react';
import style from './Form.module.css';
import axios from 'axios';
import { validateForm } from './FormValidations';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, getActivities } from '../../redux/actions/actions';

const Form = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const [selectedCountries, setSelectedCountries] = useState([]); // estado para poder controlar los países ya elegidos y así evitar
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

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  const changeHandler = (event) => {
    const newForm = {
      ...form,
      [event.target.name]: event.target.value,
    };
    setForm(newForm);

    const newErrors = validateForm(newForm);
    setErrors(newErrors);
  };

  const areAllErrorsResolved = () => {
    const allFieldsFilled = Object.values(form).every((value) => value !== ''); //* acá controlo que todos los campos contengan información
    const noUnresolvedErrors = Object.values(errors).every(
      //* y acá reviso que todos los campos tengan el check del "valiate"
      (error) => error === '✓'
    );
    const atLeastOneCountryChoosed = selectedCountries.length > 0; //* acá controlo elegir, al menos, un país

    return allFieldsFilled && noUnresolvedErrors && atLeastOneCountryChoosed;
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

    dispatch(getActivities());

    setForm({
      name: '',
      difficulty: '',
      duration: '',
      season: '',
      countries: [],
    });
  };

  const chooseCountries = (event) => {
    const pickedCountry = event.target.value;

    // Verificar si el país ya está seleccionado
    if (!selectedCountries.includes(pickedCountry)) {
      const newSelectedCountries = [...selectedCountries, pickedCountry];
      setSelectedCountries(newSelectedCountries);

      console.log(newSelectedCountries);
      const newForm = {
        ...form,
        countries: newSelectedCountries,
      };
      setForm(newForm);
      const newErrors = validateForm(newForm);
      setErrors(newErrors);
    }
  };

  const removeCountry = (countryToRemove) => {
    const updatedSelectedCountries = selectedCountries.filter(
      (country) => country !== countryToRemove
    );
    setSelectedCountries(updatedSelectedCountries);

    const newForm = {
      ...form,
      countries: updatedSelectedCountries,
    };
    setForm(newForm);
    console.log(updatedSelectedCountries);
  };

  return (
    <>
      <form onSubmit={submitHandler} className={style.container}>
        <div className={style.input}>
          <label htmlFor="name" className={style.label}>
            Actividad:
          </label>
          <select
            value={form.name}
            onChange={changeHandler}
            name="name"
            className={
              errors.name === '✓'
                ? style.selectOk
                : errors.difficulty !== ''
                ? style.selectErr
                : null
            }
          >
            <option value="">Elija la actividad turística</option>
            <option value="Correr sobre cerros empinados">
              Correr sobre unos cerros empinados
            </option>
            <option value="Navegar en kayak sin remos">
              Pistear en kayak como un campeón
            </option>
            <option value="Manejar un karting sin frenos">
              Soñar con ser Lewis Hamilton en plena Monza
            </option>
            <option value="Jugar al padel sobre hielo">
              Jugar al deporte de los rebotes infinitos
            </option>
            <option value="Caminar sobre ortigas venenosas">
              Caminar de noche por ortigas venenosas
            </option>
            <option value="Nadar con reptiles amigablemente">
              Aprovechar para nadar en una laguna espesa
            </option>
            <option value="Descenso en rapel con los ojos vendados">
              Meter una bajada montañosa a puro rapel &quot;no-look
              style&quot;
            </option>
            <option value="Jugar al billar sobre llamas">
              Jugar al billar sobre llamas
            </option>
          </select>
          {errors.name !== '✓' ? (
            <span className={style.error}>{errors.name}</span>
          ) : (
            <span className={style.ok}>{errors.name}</span>
          )}
        </div>
        <div className={style.input}>
          <label htmlFor="difficulty" className={style.label}>
            Dificultad:
          </label>
          <select
            value={form.difficulty}
            onChange={changeHandler}
            name="difficulty"
            // className={style.select}
            className={
              errors.difficulty === '✓'
                ? style.selectOk
                : errors.difficulty !== ''
                ? style.selectErr
                : null
            }
          >
            <option value="">Elija el nivel de dificultad</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.difficulty !== '✓' ? (
            <span className={style.error}>{errors.difficulty}</span>
          ) : (
            <span className={style.ok}>{errors.difficulty}</span>
          )}
        </div>

        <div className={style.input}>
          <label
            value={form.duration}
            htmlFor="duration"
            className={style.label}
          >
            Duración:
          </label>
          <select
            type="number"
            value={form.duration}
            onChange={changeHandler}
            name="duration"
            // className={style.select}
            className={
              errors.duration === '✓'
                ? style.selectOk
                : errors.difficulty !== ''
                ? style.selectErr
                : null
            }
          >
            <option value="">Elija las horas de duración</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.duration !== '✓' ? (
            <span className={style.error}>{errors.duration}</span>
          ) : (
            <span className={style.ok}>{errors.duration}</span>
          )}
        </div>

        <div className={style.input}>
          <label htmlFor="season" className={style.label}>
            Temporada:
          </label>
          <select
            value={form.season}
            onChange={changeHandler}
            name="season"
            // className={style.select}
            className={
              errors.season === '✓'
                ? style.selectOk
                : errors.difficulty !== ''
                ? style.selectErr
                : null
            }
          >
            <option value="">Selecciona una opción</option>
            <option value="Winter">Invierno</option>
            <option value="Spring">Primavera</option>
            <option value="Summer">Verano</option>
            <option value="Autumn">Otoño</option>
          </select>
          {errors.season !== '✓' ? (
            <span className={style.error}>{errors.season}</span>
          ) : (
            <span className={style.ok}>{errors.season}</span>
          )}
        </div>

        <div className={style.input}>
          <label htmlFor="countries" className={style.label}>
            País/es:
          </label>
          <select
            value={form.countries}
            name="countries"
            className={
              errors.countries === '✓'
                ? style.selectOk
                : errors.countries !== '' || selectedCountries.length === 0
                ? style.selectErr
                : null
            }
            onChange={chooseCountries}
          >
            <option value="">Selecciona un/os País/es</option>
            {countries.map((country) => {
              if (!selectedCountries.includes(country.name)) {
                return (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                );
              } else {
                return null; // Omitir opciones ya seleccionadas
              }
            })}
          </select>
          {errors.countries !== '✓' ? (
            <span className={style.error}>{errors.countries}</span>
          ) : selectedCountries.length === 0 ? (
            <span className={style.error}>
              Debe ingresar, al menos, un país
            </span>
          ) : (
            <span className={style.ok}>{errors.countries}</span>
          )}
          <div className={style.countries_container}>
            {form.countries.map((country) => {
              return (
                <span key={country} className={style.countries}>
                  <button
                    onClick={() => removeCountry(country)}
                    className={style.delete_country}
                  >
                    x
                  </button>
                  {country}
                </span>
              );
            })}
          </div>
        </div>
        <button
          type="submit"
          className={style.button}
          disabled={!areAllErrorsResolved()}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Form;
