import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Movieslist from "./Movieslist";

const Movies = () => {
  const [movies, setmovies] = useState([]);
  const [loading, isloading] = useState(false);
  const [error, seterror] = useState(null);

  const Fetchmovieshandler = useCallback(async () => {
    isloading(true);
    seterror(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error("something went wrong...retrying");
      }
      const data = await response.json();

      setmovies(data.results);
    } catch (error) {
      seterror(error.message);
    }
    isloading(false);
  },[]);
  useEffect(() => {
    Fetchmovieshandler();
  }, [Fetchmovieshandler]);

  //console.log(movies);

  return (
    <React.Fragment>
      <header>
        <ul className="header">
          <li>
            <NavLink activeClassName="active" to="/Home">
              HOME
            </NavLink>
          </li>

          <NavLink to="/store">STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        </ul>
        <h1>THE GENERICS</h1>
      </header>

      <ul className="container">
        <button onClick={Fetchmovieshandler}>FETCH MOVIES</button>
      </ul>
      <section>
        <div>
          <ul>
            {!loading && <Movieslist movies={movies} />}
            {loading && <ul style={{ color: "red" }}> loading movies...</ul>}
            {!loading && error && <p>{error}</p>}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Movies;
