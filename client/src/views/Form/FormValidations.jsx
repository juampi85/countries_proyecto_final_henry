export const validateForm = (form) => {
  const newErrors = {};

  if (form.name === '') {
    newErrors.name = 'Debe especificar un nombre para la actividad';
  } else if (form.name.length < 3 || form.name.length > 30) {
    newErrors.name =
      'El nombre de la actividad debe tener entre 3 y 30 caracteres';
  } else {
    newErrors.name = '';
  }

  if (form.difficulty === '') {
    newErrors.difficulty = 'Debe especificar un nivel de dificultad';
  } else if (/^[1-5]$/.test(form.difficulty)) {
    newErrors.difficulty = '';
  } else {
    newErrors.difficulty =
      'La dificultad debe ser un número entero entre 1 y 5';
  }

  if (form.duration === '') {
    newErrors.duration =
      'Debe especificar un tiempo de duración de la actividad';
  } else if (/^[1-5]$/.test(form.duration)) {
    newErrors.duration = '';
  } else {
    newErrors.duration =
      'La duración de la actividad debe ser un número entero entre 1 y 5';
  }

  if (form.countries === '') {
    newErrors.countries =
      'Debe especificar, al menos, un país para la actividad';
  } else if (/^[^0-9!@#$%^&*()_+={}[\]:;"'<>.?\\/~`|]+$/.test(form.countries)) {
    newErrors.countries = '';
  } else {
    newErrors.countries =
      'No se permiten números ni símbolos especiales (excepto espacios y comas)';
  }

  if (form.season === '') {
    newErrors.season = 'Debe especificar una temporada para la actividad';
  } else if (
    form.season === 'Winter' ||
    form.season === 'Spring' ||
    form.season === 'Summer' ||
    form.season === 'Autumn'
  ) {
    newErrors.season = '';
  } else {
    newErrors.season =
      'Solo se permite elegir entre las opciones: Winter, Spring, Summer, Autumn';
  }

  return newErrors;
};
