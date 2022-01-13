import Cast from "./Cast";
import Genre from "./Genre";
import Rating from "./Rating";

const RightContainer = ({
 title,
 year,
 rating,
 synopsis,
 genres,
 cast,
}) => {
 return (
  <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
   <h2 className="text-4xl font-bold my-1">
    {`${title} (${year})`}
   </h2>
   {rating && <Rating rating={rating} />}
   <p className="text-left">{synopsis}</p>
   {genres?.length > 0 && <Genre genres={genres} />}
   {cast?.length > 0 && <Cast cast={cast} />}
  </div>
 );
};

export default RightContainer;