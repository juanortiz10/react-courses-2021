const Cast = ({ cast }) => {
 return (
  <div className="flex flex-row my-1 flex-wrap">
   <span className="font-bold mr-1">Cast:</span>
   {cast.map(({ name }, index) => (
    <span key={index} className="mr-1">
     {`${name}${index !== cast.length - 1 ? ',' : '.'}`}
    </span>
   ))}
  </div>
 );
};

export default Cast;