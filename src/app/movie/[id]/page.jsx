import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";

async function getMovie(movieId) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=212aa34a5e71fb2d80549e64932ff99c`,
    );
    return await res.json();
}

export default async function MoviePage({ params }) {
    const movieId = params.id;
    const movie = await getMovie(movieId);
    return (
        <div className="w-full">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto ms:space-x-6">
                <Image
                    src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    width={500}
                    height={300}
                    className="rounded-lg"
                    placeholder="blur"
                    blurDataURL="/spinner.svg"
                    alt="Image is not available"
                    style={{ maxWidth: "100%", height: "100%" }}
                />
                <div className="p-2">
                    <h1 className="text-lg mb-3 font-bold">
                        {movie.title || movie.name}
                    </h1>
                    <p className="text-lg mb-3">
                        <span className="font-semibold mr-1">Overview:</span>{" "}
                        {movie.overview}
                    </p>

                    <p className="mb-3">
                        <span className="font-semibold mr-1">
                            Date Release:
                        </span>
                        {movie.release_date || movie.first_air_date}
                    </p>

                    <p className="mb-3 flex items-center">
                        <span className="font-semibold mr-3">Rating: </span>
                        {movie.vote_count}
                        <FiThumbsUp className="h-5 ml-2" />{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
