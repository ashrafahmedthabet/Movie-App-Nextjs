import React from 'react';
import Link from 'next/link';

const Movies = ({moviesData}) => {
    console.log(moviesData)
    return (
        <>
        <div className="container">
          <div className="row">
            {moviesData.map((u) => {
                return(
            <div key={u["id"]} className="col-md-4 my-2">
                <div className="card" style={{width: '18rem'}}>
                <img src={`https://image.tmdb.org/t/p/original/${u.backdrop_path}`} alt="Picture of the author"className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{u.title.length > 20
                        ? u.title.substring(0, 15) + "..."
                        : u.title}</h5>
                    <p className="card-text">{u.overview.substring(0, 150)}...</p>
                    <Link href={`/moviedetails/${u.id}`} className="btn btn-primary">Movie Details</Link>
                </div>
                </div>
            </div>
            )})}
          </div>
        </div>
    </>
      
    );
};

export default Movies;
export async function getServerSideProps(){
    const res = await fetch(`http://localhost:3000/api/movies`);
    const data = await res.json();
    return {
      props: {
        moviesData: data,
      },
    };
}