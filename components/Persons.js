import Link from "next/link";

const token = process.env.TMDB_TOKEN;
async function fetchCasts(id) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${token}`);
  return (await res.json()).cast;
}
export default async function Persons({ movie }) {
  const casts = await fetchCasts(movie.id);
  const profile = "http://image.tmdb.org/t/p/w185";
  return (
    <div className="flex gap-4 flex-row flex-wrap">
      {casts.map((cast) => {
        return (
          <div
            key={cast.id}
            className="w-[180px] bg-gray-100 text-centerflex flex-col justify-between"
          >
            <Link href={`/actor/${cast.id}`}>
            {cast.profile_path ? (
              <img src={profile + cast.profile_path} />
            ) : (
              <div></div>
            )}
            </Link>
            <div className="p-2">
              <div className="text-sm">{cast.name}</div>
              <span className="text-sm text-gray-500">{cast.character}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
