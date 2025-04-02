import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { BiCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import { MovieApi } from "../../Services/ProductApi";
import FavoriteIcon from "../../Components/CoreComponents/FavoriteButton/FavoriteButton";
import Button from "../../Components/CoreComponents/Button/Button";
import { useAppContext } from "../../Context/AppContextProvider";
import { Rating } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Movie() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const { IncreaseQty, DecreaseQty, getProductQty } = useAppContext();

  useEffect(() => {
    MovieApi(id)
      .then((response) => {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <main>
      <Wrapper>
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <BiCameraMovie className="text-blue-300 text-5xl" aria-hidden="true" />
          </div>
        ) : movie ? (
          <motion.article
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
            aria-labelledby="movie-title"
          >
            <img
              src={movie.backdrop_path}
              alt={`Background image of ${movie.original_title}`}
              className="h-80 md:h-150 md:w-full border border-orange-400 rounded-lg shadow-lg"
              loading="lazy"
            />

            <h1 
              id="movie-title"
              className="text-white mt-5 text-2xl font-bold" 
              lang="en" 
            >
              {movie.original_title}
            </h1>

            <section className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
              <div>
                <img
                  src={movie.poster_path}
                  alt={`Poster of ${movie.original_title}`}
                  className="w-full border border-orange-400 rounded-lg shadow-lg"
                  loading="lazy"
                />
              </div>

              <div>
                <p 
                  className="text-gray-400 p-3 text-sm text-left border border-orange-400 rounded-lg"
                  aria-label="Movie overview"
                >
                  {movie.overview}
                </p>
              </div>

              <div className="flex flex-col items-center justify-center border border-orange-400 rounded-lg p-4">
                <p className="text-blue-100 text-sm">
                  Release Date: <time dateTime={movie.release_date}>{movie.release_date}</time>
                </p>
                <p className="text-blue-100 text-sm">
                  Vote Average: <data value={movie.vote_average}>{movie.vote_average}</data>
                </p>
                <p className="text-blue-100 text-sm">
                  Original Language: <span lang={movie.original_language}>{movie.original_language}</span>
                </p>
                <p className="text-blue-100 text-sm">
                  Vote Count: <data value={movie.vote_count}>{movie.vote_count}</data>
                </p>

                <Rating
                  name="half-rating"
                  defaultValue={movie.vote_average / 2} 
                  precision={0.5}
                  sx={{
                    "& .MuiRating-icon": { color: "#FFA500" },
                  }}
                />

                <AvatarGroup max={4}>
                  <Avatar alt="Remy Sharp" src="" />
                  <Avatar alt="Travis Howard" src="" />
                  <Avatar alt="Cindy Baker" src="" />
                  <Avatar alt="Agnes Walker" src="/" />
                  <Avatar alt="Trevor Henderson" src="" />
                </AvatarGroup>
              </div>

              <div className="flex flex-col items-center justify-center border border-orange-400 rounded-lg p-4">
                <div className="flex items-center justify-center gap-3 mt-2">
                  <p className="text-blue-100">
                    Price: <data value={movie.vote_count}>{movie.vote_count}</data>$
                  </p>
                  <FavoriteIcon />
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <Button 
                    className="text-blue-300 w-8 h-8 flex items-center justify-center" 
                    onClick={() => IncreaseQty(id)}
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                  <span className="text-blue-100">{getProductQty(id)}</span>
                  <Button 
                    className="text-blue-300 w-8 h-8 flex items-center justify-center" 
                    onClick={() => DecreaseQty(id)}
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                </div>
                <Button className="bg-blue-300 px-4 rounded-lg mt-4">Add</Button>
              </div>
            </section>

            <section className="flex flex-wrap gap-4 justify-center mt-5 border border-orange-400 rounded-lg p-4">
              {movie.casts?.slice(0, 12).map((cast) => (
                <div key={cast.id} className="text-center">
                  <img
                    src={cast.profile_path || "https://via.placeholder.com/100"}
                    alt={`Actor: ${cast.name}`}
                    className="w-20 h-20 border border-orange-400 rounded-full mx-auto"
                    loading="lazy"
                  />
                  <p className="text-white mt-2">{cast.name}</p>
                </div>
              ))}
            </section>
          </motion.article>
        ) : (
          <p className="text-white text-center mt-10">Movie not found</p>
        )}
      </Wrapper>
    </main>
  );
}

export default Movie;


