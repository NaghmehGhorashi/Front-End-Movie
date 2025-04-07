import { useEffect, useState } from "react";
import { MoviesApi } from "../../../Services/ProductApi";

function MoviesByPopularity() {
    const [data, setData] = useState([]);

    useEffect(() => {
        MoviesApi()
            .then((response) => setData(response.data))
            .catch((error) => console.error("error", error));
    }, []);

    return (
        <div className="border-2 rounded-2xl bg-neutral-700  border-amber-500 md:mt-1 h-75 overflow-x-auto flex flex-nowrap scroll-smooth scrollbar-hide">
            {data &&
                data
                    .filter((item) => ( item.release_date>"2010/01/01") )
                    .map((item) => (
                        <div key={item.id} className="mx-5 my-5 min-w-40 border border-amber-400 rounded-md">
                            <img
                                src={item.poster_path}
                                alt={`Background image of ${item.original_title}`}
                                className="h-50 border border-amber-400"
                            />
                            {item.original_title && (
                                <p className="text-amber-100 mt-1 text-sm text-center">
                                    {item.original_title}
                                </p>
                            )}
                        </div>
                    ))}
        </div>
    );
}

export default MoviesByPopularity;
