import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

{
  /* <iframe
          src={`https://www.2embed.stream/embed/movie/${id}`}
          className="w-full h-full m-10"
        ></iframe> */
}
{
  /* <iframe
          src={`https://multiembed.mov/directstream.php?video_id=${id}&tmdb=1`}
          className="w-full h-full m-10"
        ></iframe> */
}

const MoviePlayer = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  return id ? (
    <div className="absolute overflow-hidden w-screen h-screen flex items-center justify-center bg-[#000000f5] top-0 left-0">
      <Link
        onClick={() => navigate(-1)}
        className="hover:text-[#6556CD] text-white absolute text-2xl top-[5%] right-[5%] ri-close-fill"
      ></Link>
      {id ? (
        <iframe
          src={`https://vidsrc.cc/v2/embed/movie/${id}?autoplay=true`}
          className="w-full h-full m-10"
        ></iframe>
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  ) : null;
};

export default MoviePlayer;
