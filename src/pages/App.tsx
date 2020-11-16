import React, { useEffect, useState } from "react";
import GenericMessage from "../components/GenericMessage";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import SearchBar from "../components/SearchBar";
import "./App.css";
import { getMovies, Movie } from "./App.services";

const IMAGE_PREFIX = "https://image.tmdb.org/t/p/w500/";
const ERROR_MESSAGE = "Please try again later";
const NO_RESULTS_MESSAGE = "no movie was found, please search another movie";
const SEARCH_FORM = {
  name: "search_movie",
  placeholder: "Search your movie",
  buttonText: "Search",
};

export type OnClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type OnChangeEvent = React.ChangeEvent<HTMLInputElement>;

function App() {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const [filteredMovies, setFilteredMovies] = useState<Array<Movie>>([]);
  const [shouldShowError, setShouldShowError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmitClick = (event: OnClickEvent) => {
    event.preventDefault();

    if (!searchTerm) return setFilteredMovies(movies);

    setFilteredMovies((oldFilteredMovies) =>
      oldFilteredMovies.filter(({ overview }) =>
        overview.toLowerCase().includes(` ${searchTerm} `)
      )
    );
  };

  const handleInputChange = (event: OnChangeEvent) => {
    event.preventDefault();

    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    getMovies()
      .then((result) => {
        setMovies(result);
        setFilteredMovies(result);
      })
      .catch(() => setShouldShowError(true))
      .finally(() => setIsLoading(false));
  }, [setIsLoading]);

  return (
    <div className="App">
      <SearchBar
        onClick={handleSubmitClick}
        onChange={handleInputChange}
        inputName={SEARCH_FORM.name}
        inputPlaceholder={SEARCH_FORM.placeholder}
        buttonText={SEARCH_FORM.buttonText}
      />
      {Boolean(filteredMovies.length) &&
        !shouldShowError &&
        filteredMovies.map(({ id, title, overview, poster_path: posterPath }) => (
          <ResultCard
            key={id}
            imagePath={`${IMAGE_PREFIX}${posterPath}`}
            title={title}
            overview={overview}
          />
        ))}
      {!isLoading && !filteredMovies.length && !shouldShowError && (
        <GenericMessage text={NO_RESULTS_MESSAGE} />
      )}
      {shouldShowError && <GenericMessage text={ERROR_MESSAGE} />}
      {isLoading && !shouldShowError && <Loader />}
    </div>
  );
}

export default App;
