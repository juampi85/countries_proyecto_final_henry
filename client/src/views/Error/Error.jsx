import style from './Error.module.css';

const Error = () => {
  return (
    <div className={style.error_container}>
      <h1 className={style.error_text}>Error 404 || PAGE NOT FOUND...</h1>
    </div>
  );
};

export default Error;