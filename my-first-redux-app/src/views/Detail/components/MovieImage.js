const MovieImage = ({ url }) => (
 <div className="w-1/3 flex justify-center">
  <img src={url} className="w-80" alt="movie-detail" />
 </div>
)

export default MovieImage;