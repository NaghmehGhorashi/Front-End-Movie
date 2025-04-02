import MostVotedMovies from "../../Components/ShareComponents/MostVotedMovies/MostVotedMovies";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import MoviesByPopularity from "../../Components/ShareComponents/moviesByPopularity/moviesByPopularity";

function Category() {
  return (
    <main>
      <Wrapper>
       
        <section aria-labelledby="most-popular-movies">
          <h2 className="text-2xl font-bold text-amber-50">
            Most Popular Movie
          </h2>
          <MostVotedMovies />
        </section>

     
        <section aria-labelledby="popular-this-week" className="mt-6">
          <h2 className="text-xl font-bold text-amber-50">
            Popular of This Week
          </h2>
          <MoviesByPopularity />
        </section>
      </Wrapper>
    </main>
  );
}

export default Category;

