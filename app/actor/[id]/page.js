const token = process.env.TMDB_TOKEN;
async function fetchPerson(id) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${token}&language=en-US`
  );
  return await res.json();
}
export default async function Actor({ params }) {
  const person = await fetchPerson(params.id);
  const profile = "http://image.tmdb.org/t/p/w1280";
  return (
    <>
      <div className=" space-y-4">
        <div className=" flex justify-center" >
          <img className="w-1/4" src={`${profile}${person.profile_path}`} />
        </div>
        <div className="space-y-1">
          <h2 className="font-bold">{person.name}</h2>
          <h3 className="font-bold">Biography</h3>
          <div>{person.biography}</div>
        </div>
      </div>
    </>
  );
}
