import { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite(e) {
     e.preventDefault(); 
  e.stopPropagation();
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className={`text-md hover:text-rose-700 cursor-pointer ${
        isFavorite ? "text-rose-700" : "text-white"
      }`}
      onClick={toggleFavorite}
    >
      <MdOutlineFavoriteBorder />
    </button>
  );
}

export default FavoriteButton;
