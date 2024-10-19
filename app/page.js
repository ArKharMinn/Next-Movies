import Movies from "@/components/Movies";
const token = process.env.TMDB_TOKEN;
async function fetchPopular() {
 const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${token}`);
 return await res.json();
}
async function fetchTrending() {
 const res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${token}`);
return await res.json();
}
export default async function Home() {
const popularData = await fetchPopular();
const trendingData = await fetchTrending();

const popular = popularData.results || [];
const trending = trendingData.results || [];


return (
<div>
<h3 className="font-bold border-b mb-4 pb-2">Popular</h3>
<Movies movies={popular} />
<h3 className="font-bold border-b my-4 pb-2">Trending</h3>
<Movies movies={trending} />
</div>
);
}
