import Movie from "./Movie";

export default function Movies(props) {
  const {movies = []} = props;

  return(
    <div className="movies ">
    {movies.length ? movies.map(movie => (
      <Movie key={movie.imdbID} {...movie}/>
    )) :
    <main>
    <div>
  <main>
    <h1>Sorry!</h1>
    <p>
    Either you aren't cool enough to visit this page or it doesn't exist <em>. . . like your social life.</em>
    </p>
    <h3>Nothing Found</h3>
  </main>
</div>
    </main>
}
    </div>
  )
}