import Persons from "@/components/Persons";
import { Badge } from "lucide-react";

const token = process.env.TMDB_TOKEN;
async function fetchMovie(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${token}`);
  return await res.json();
}
export default async function Movie({ params }) {
  const movie = await fetchMovie(params.id);
  const cover = "http://image.tmdb.org/t/p/w1280";
  return (
    <>
      <h2 className="font-bold">
        {movie.title}
        <span className="ml-1">({movie.release_date})</span>
      </h2>
      <div className="mb-4 mt-2">
        {movie.genres.map((genre) => {
          return (
            <span key={genre.id} className="mr-2 border p-1 rounded-lg shadow-md">
              {genre.name}
            </span>
          );
        })}
      </div>
      <img src={cover + movie.backdrop_path} />
      <p className="mt-3">{movie.overview}</p>
      <div className="mt-5">
 <h3 className="font-bold border-b mb-4 pb-2">Starring</h3>
 <Persons movie={movie} />
</div>

    </>
  );
}
