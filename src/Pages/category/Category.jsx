import MostVotedMovies from "../../Components/ShareComponents/MostVotedMovies/MostVotedMovies"
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper" 
import MoviesByPopularity from "../../Components/ShareComponents/moviesByPopularity/moviesByPopularity"

function Category() {
  return (
    <div className="">
      <Wrapper> 
      <h2 className="text-xl text-amber-50">Most Popular Movie :</h2>
      <MostVotedMovies />
      <h2 className="text-xl mt-3 text-amber-50">Popular of this week:</h2>
      <MoviesByPopularity/>
      </Wrapper>
      </div>
  )
}

export default Category
