import { useParams } from "react-router";
import { useNavigate } from 'react-router';

import moviesImage from "../../assets/movie-theater.png";
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading";
import List from "./components/List";

const Results = () => {
 const { title } = useParams();
 const navigate = useNavigate();
 const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);

 const handleListItemClick = (movieId) => {
  navigate(`/detail/${movieId}`);
 };

 const renderContent = () => {
  if (error)
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-xl">{error.error}</p>
      </div>
    );
  else if (isLoading || isFetching)
    return <Loading message="Buscando peliculas..." />;
  else if (isSuccess && movies?.results)
    return <List data={movies?.results} onListItemClick={handleListItemClick} />;
 };

 return (
  <div className="flex flex-row">
    <div className="w-3/5	h-screen overflow-y-auto px-10">
      {renderContent()}
    </div>
    <div className="w-2/5">
      <img src={moviesImage} alt="Movies" className="w-full h-screen object-cover" />
    </div>
  </div>
 );
};

export default Results;