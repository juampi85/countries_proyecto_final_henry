import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to={'/home'}> Home </Link>
      <h1>Esta es la vista de la LANDING PAGE</h1>
    </div>
  );
};

export default Landing;
