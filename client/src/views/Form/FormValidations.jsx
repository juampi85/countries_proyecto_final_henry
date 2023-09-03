export const validateForm = (form) => {
  const newErrors = {};

  if (form.name === '') {
    newErrors.name = 'Debe elegir una actividad';
  } else {
    newErrors.name = '✓';
  }

  if (/^[1-5]$/.test(form.difficulty)) {
    newErrors.difficulty = '✓';
  } else {
    newErrors.difficulty = 'Debe especificar un nivel de dificultad';
  }

  if (form.duration === '') {
    newErrors.duration =
      'Debe especificar un tiempo de duración de la actividad';
  } else if (/^[1-5]$/.test(form.duration)) {
    newErrors.duration = '✓';
  } else {
    newErrors.duration =
      'La duración de la actividad debe ser un número entero entre 1 y 5';
  }

  if (/^[^0-9!@#$%^&*()_+={}[\]:;"'<>.?\\/~`|]+$/.test(form.countries)) {
    newErrors.countries = '✓';
  } else {
    newErrors.countries =
      'Debe elegir, al menos, un país';
  }

  if (form.season === '') {
    newErrors.season = 'Debe especificar una temporada para la actividad';
  } else if (
    form.season === 'Winter' ||
    form.season === 'Spring' ||
    form.season === 'Summer' ||
    form.season === 'Autumn'
  ) {
    newErrors.season = '✓';
  } else {
    newErrors.season =
      'Solo se permite elegir entre las opciones: Winter, Spring, Summer, Autumn';
  }

  return newErrors;
};
