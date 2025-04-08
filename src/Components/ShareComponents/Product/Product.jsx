import { motion } from "framer-motion";
import FavoriteButton from "../../CoreComponents/FavoriteButton/FavoriteButton"; 
import Button from "../../CoreComponents/Button/Button";

function Product({ poster_path,original_title,vote_count }) {
  return (
    <motion.div
      whileHover={{
        scale: 0.98,
        backgroundColor: "rgba(113, 125, 113, 0.8)",
        color: "#fff",
        boxShadow: "0px 0px 15px rgb(0, 191, 255, 0.8)",
      }}
      className="border border-orange-400 rounded-lg w-40 h-75 p-2 shadow-md shadow-blue-300"
    >
      <img src={poster_path} alt="poster_path" className="w-full h-40 object-contain" />
      <p className="text-white mt-5 text-center">
        {original_title.split(" ").slice(0, 2).join(" ")}
      </p>
      <div className="flex justify-between">
        <p className="text-white mt-1 text-sm">
  Price: {vote_count || 'N/A'}$
</p>

        <div className="mt-1.5"><FavoriteButton /></div>
      </div>
 <Button className="text-sm">Add to cart</Button>
    </motion.div>
  );
}

export default Product;
