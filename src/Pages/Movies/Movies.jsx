import { Helmet } from "react-helmet";
import Wrapper from "../../Components/ShareComponents/Wrapper/Wrapper";
import { useEffect, useState } from "react";
import { MoviesApi } from "../../Services/ProductApi";
import { BiCameraMovie } from "react-icons/bi";
import Product from "../../Components/ShareComponents/Product/Product";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: "-50%" },
  visible: { opacity: 1, x: "0%", transition: { duration: 0.9 } },
};

function Movies() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    MoviesApi()
      .then((response) => {
        setMovies(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      
      <Helmet>
        <title>Movie Database</title>
        <meta name="description" content="Browse a collection of popular movies. Find details, reviews, and ratings for each movie." />
      </Helmet>

      <Wrapper>
        {isLoading ? (
          <div className="flex flex-wrap align-middle justify-center items-center h-screen">
            <BiCameraMovie className="text-blue-300 text-5xl" />
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="ml-3 mt-5 flex lg:ml-22 flex-wrap gap-5"
          >
            {movies.map((movie) => (
              <motion.div key={movie.id} variants={itemVariants}>
                <Link
                  to={`/movies/${movie.id}`}
                  aria-label={`View details of ${movie.original_title}`}
                >
                  <Product {...movie} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </Wrapper>
    </div>
  );
}

export default Movies;


