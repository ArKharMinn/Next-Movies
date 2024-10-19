import Link from "next/link";
import { Button } from "@/components/ui/button";
const token = process.env.TMDB_TOKEN;
async function fetchGenres() {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${token}`);
  const data =  res.json();
  return data;
}
export default async function sidebar() {
  const data = await fetchGenres();
  const genres = data.genres || [];
  
  return (
    <aside className="w-[220px] flex flex-col gap-1">
      <Button className="justify-start" variant="outline" asChild>
        <Link href="/">All Movies</Link>
      </Button>
      {genres.map((genre) => {
        return (
          <Button
            key={genre.id}
            className="justify-start"
            variant="outline"
            asChild
          >
            <Link href={`/genres/${genre.name}/${genre.id}`}>{genre.name}</Link>
          </Button>
        );
      })}
    </aside>
  );
}
