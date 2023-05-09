import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Details = ({ movie }) => {
  const { data: session } = useSession();
  const router = useRouter();
  async function handleDelete(id) {
    await fetch(`http://localhost:3001/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    router.push("/home");
  }
  if (session) {
    return (
      <>
        <div className="container">
          <h1 className="text-center">{movie.title}</h1>
          <div className="row">
            <div className="col-md-6 me-5">
              <img
                className="mt-5 w-100 h-100"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="test"
              ></img>
            </div>
            <div className="col-md-5">
              <p className="mt-5">{movie.overview}</p>
              <p className="fw-bold">
                popularity:{" "}
                <span className="badge bg-primary">{movie.popularity}</span>
              </p>
              <hr></hr>
              <p className="fw-bold">
                release_date:{" "}
                <span className="badge bg-primary">{movie.release_date}</span>
              </p>
              <hr></hr>
              <p className="fw-bold">
                vote_average:{" "}
                <span className="badge bg-primary">{movie.vote_average}</span>
              </p>
              <hr></hr>
              <p className="fw-bold">
                vote_count:{" "}
                <span className="badge bg-primary">{movie.vote_count}</span>
              </p>
              <button
                className="btn btn-danger w-100"
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container">
        <h1 className="text-center">{movie.title}</h1>
        <div className="row">
          <div className="col-md-6 me-5">
            <img
              className="mt-5 w-100 h-100"
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="test"
            ></img>
          </div>
          <div className="col-md-5">
            <p className="mt-5">{movie.overview}</p>
            <p className="fw-bold">
              popularity:{" "}
              <span className="badge bg-primary">{movie.popularity}</span>
            </p>
            <hr></hr>
            <p className="fw-bold">
              release_date:{" "}
              <span className="badge bg-primary">{movie.release_date}</span>
            </p>
            <hr></hr>
            <p className="fw-bold">
              vote_average:{" "}
              <span className="badge bg-primary">{movie.vote_average}</span>
            </p>
            <hr></hr>
            <p className="fw-bold">
              vote_count:{" "}
              <span className="badge bg-primary">{movie.vote_count}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

export async function getServerSideProps(context) {
  const { params } = context;
  const res = await fetch(`http://localhost:3000/api/movies/${params.movieId}`);
  const data = await res.json();
  return {
    props: {
      movie: data,
    },
  };

}
